"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { MotionValue } from "framer-motion";
import type { RefObject } from "react";

type LandingBackgroundProps = {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  logoOpacity: MotionValue<number>;
  hasRenderableFrame: boolean;
};

export function LandingBackground({
  canvasRef,
  logoOpacity,
  hasRenderableFrame,
}: LandingBackgroundProps) {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-[100dvh] min-h-[100svh] w-full overflow-hidden bg-[#0f0f0f] lg:min-h-[100vh]">
      <motion.div
        style={{ opacity: logoOpacity }}
        className="absolute inset-0 h-full min-h-[100dvh] w-full lg:min-h-[100vh]"
      >
        {hasRenderableFrame ? (
          <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="absolute inset-0 block h-full w-full min-h-[100dvh] lg:min-h-[100vh]"
          />
        ) : (
          <div className="relative h-full min-h-[100dvh] w-full lg:min-h-[100vh]">
            <Image
              src="/images/LOGO-CAKRA.png"
              alt=""
              fill
              sizes="100vw"
              aria-hidden
              className="object-cover object-center opacity-60"
              priority
              quality={100}
            />
          </div>
        )}
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(27,54,93,0.35),transparent_45%),linear-gradient(180deg,rgba(15,15,15,0.15),rgba(15,15,15,0.6))]" />
    </div>
  );
}
