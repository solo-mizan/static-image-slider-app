import HeroSection from "@/components/home/hero-section";
import ImageSlider from "@/components/home/image-slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ImageSlider />
    </main>
  );
}
