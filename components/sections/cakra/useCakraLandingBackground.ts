"use client";

import type { MotionValue } from "framer-motion";
import type { RefObject } from "react";
import { useEffect, useRef, useState } from "react";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

import { FRAME_SOURCES, TOTAL_FRAMES } from "./constants";

/**
 * Manual background scale.
 * - 1.0 = fit mode baseline
 * - < 1.0 = smaller
 * - > 1.0 = larger
 */
const SCALE_MULTIPLIER = 1.0;

/**
 * How frames fit the viewport.
 * - "contain": never crops (may add margins)
 * - "cover": fills viewport (may crop)
 */
const FIT_MODE: "contain" | "cover" = "cover";

/** Cached max scroll distance for frame mapping. */
type ScrollMetrics = {
  maxScrollY: number;
};

function getResponsiveScaleMultiplier(viewportWidth: number) {
  return SCALE_MULTIPLIER;
}

function getViewportSize(canvas: HTMLCanvasElement) {
  const rect = canvas.getBoundingClientRect();
  const width = Math.max(1, Math.round(rect.width || window.innerWidth));
  const height = Math.max(1, Math.round(rect.height || window.innerHeight));
  return { width, height };
}

/** Draw image like CSS `object-fit` (+ optional multiplier). */
function drawLogoFrameCover(
  ctx: CanvasRenderingContext2D,
  canvasCssWidth: number,
  canvasCssHeight: number,
  image: HTMLImageElement,
) {
  const iw = image.naturalWidth || image.width;
  const ih = image.naturalHeight || image.height;
  if (!iw || !ih) {
    return;
  }

  const base =
    FIT_MODE === "cover"
      ? Math.max(canvasCssWidth / iw, canvasCssHeight / ih)
      : Math.min(canvasCssWidth / iw, canvasCssHeight / ih);
  const scale = base * getResponsiveScaleMultiplier(canvasCssWidth);
  const dw = iw * scale;
  const dh = ih * scale;
  const x = (canvasCssWidth - dw) / 2;
  const y = (canvasCssHeight - dh) / 2;

  ctx.drawImage(image, x, y, dw, dh);
}

export function useCakraLandingBackground(): {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  logoOpacity: MotionValue<number>;
  contentY: MotionValue<number>;
  hasRenderableFrame: boolean;
} {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const [loadedFrames, setLoadedFrames] = useState(0);
  const [hasRenderableFrame, setHasRenderableFrame] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  /** Bumps whenever canvas size updates so redraw runs after resize. */
  const [viewportRevision, setViewportRevision] = useState(0);
  const scrollMetricsRef = useRef<ScrollMetrics>({ maxScrollY: 1 });

  const { scrollY, scrollYProgress } = useScroll();
  const logoOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    [0.4, 0.7, 0.3],
  );
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -64]);

  // Map scroll position 0..maxScrollY to frames 0..TOTAL_FRAMES-1 (no loop).
  useMotionValueEvent(scrollY, "change", (y) => {
    const maxScrollY = scrollMetricsRef.current.maxScrollY || 1;
    const clampedProgress = Math.min(1, Math.max(0, y / maxScrollY));
    const nextFrame = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.round(clampedProgress * (TOTAL_FRAMES - 1))),
    );

    setCurrentFrame((prev) => (prev === nextFrame ? prev : nextFrame));
  });

  useEffect(() => {
    const updateScrollMetrics = () => {
      const doc = document.documentElement;
      const viewportHeight =
        window.visualViewport?.height ?? window.innerHeight;
      const maxScrollY = Math.max(1, doc.scrollHeight - viewportHeight);
      scrollMetricsRef.current.maxScrollY = maxScrollY;
    };

    updateScrollMetrics();
    window.addEventListener("resize", updateScrollMetrics);
    window.addEventListener("load", updateScrollMetrics);

    return () => {
      window.removeEventListener("resize", updateScrollMetrics);
      window.removeEventListener("load", updateScrollMetrics);
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const nextFrames = FRAME_SOURCES.map((source) => {
      const image = new window.Image();
      image.decoding = "async";

      image.onload = () => {
        if (!isMounted) {
          return;
        }

        setHasRenderableFrame(true);
        setLoadedFrames((count) => count + 1);
      };

      image.onerror = () => {
        if (!isMounted) {
          return;
        }

        setLoadedFrames((count) => count + 1);
      };

      image.src = source;
      return image;
    });

    framesRef.current = nextFrames;

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const { width: cssW, height: cssH } = getViewportSize(canvas);
      // Use round to avoid fractional-DPI blur on Windows (125%, 150%, etc).
      const nextWidth = Math.round(cssW * dpr);
      const nextHeight = Math.round(cssH * dpr);

      const didChange =
        canvas.width !== nextWidth || canvas.height !== nextHeight;

      if (didChange) {
        canvas.width = nextWidth;
        canvas.height = nextHeight;
      }

      const context = canvas.getContext("2d");
      if (!context) {
        return;
      }

      // Draw in CSS pixels, scaled by DPR for sharpness.
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";

      if (didChange) {
        setViewportRevision((n) => n + 1);
      }
    };

    resizeCanvas();

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(canvas);
    window.addEventListener("resize", resizeCanvas);
    window.visualViewport?.addEventListener("resize", resizeCanvas);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", resizeCanvas);
      window.visualViewport?.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const frames = framesRef.current;

    if (!canvas || frames.length === 0) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";

    const { width: cssW, height: cssH } = getViewportSize(canvas);
    const canvasWidth = cssW;
    const canvasHeight = cssH;

    const scaleX = canvas.width / cssW;
    const scaleY = canvas.height / cssH;
    context.setTransform(scaleX, 0, 0, scaleY, 0, 0);
    context.fillStyle = "#0f0f0f";
    context.fillRect(0, 0, canvasWidth, canvasHeight);

    const image =
      (frames[currentFrame] && frames[currentFrame].complete
        ? frames[currentFrame]
        : undefined) ?? frames.find((frame) => frame.complete);

    if (!image) {
      return;
    }

    drawLogoFrameCover(context, canvasWidth, canvasHeight, image);
  }, [currentFrame, loadedFrames, viewportRevision]);

  return {
    canvasRef,
    logoOpacity,
    contentY,
    hasRenderableFrame,
  };
}
