"use client";

import {
  AboutSection,
  CakraFooter,
  CakraHeader,
  DocumentationSection,
  HeroSection,
  LandingBackground,
  ModulesSection,
  PlaygroundSection,
  SurveyDataSection,
  TimelineSection,
  ChampionSection,
  useCakraLandingBackground,
} from "./cakra";

export default function CakraLandingPage() {
  const { canvasRef, logoOpacity, contentY, hasRenderableFrame } =
    useCakraLandingBackground();

  return (
    <>
      <LandingBackground
        canvasRef={canvasRef}
        logoOpacity={logoOpacity}
        hasRenderableFrame={hasRenderableFrame}
      />

      <CakraHeader />

      <HeroSection contentY={contentY} />

      <main className="relative z-10 mx-auto max-w-6xl space-y-20 px-4 pb-24 sm:px-6 lg:px-8">
        <AboutSection />
        <TimelineSection />
        <ModulesSection />
        <PlaygroundSection />
        <ChampionSection />
        <SurveyDataSection />
        <DocumentationSection />
      </main>

      <CakraFooter />
    </>
  );
}
