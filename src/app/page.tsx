import { FeaturesSection } from "@/components/home/features-section";
import { HeroSection } from "@/components/home/hero-section";
import { LearningRoadmap } from "@/components/home/learning-roadmap";

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-16">
      <HeroSection />
      <FeaturesSection />
      <LearningRoadmap />
    </div>
  );
}
