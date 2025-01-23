import Discover from "@/components/Discover/Discover";
import ExploreCookMaster from "@/components/ExploreCookMaster/ExploreCookMaster";
import Experiences from "@/components/Experiences/Experiences";
import ShareCreations from "@/components/ShareCreations/ShareCreations";
import Block6 from "@/components/DiscoverCookMaster/DiscoverCookMaster";
import HeroSection from "@/components/HeroBanner/HeroBanner";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Discover />
      <ExploreCookMaster />
      <Experiences />
      <ShareCreations />
      <Block6 />
    </div>
  );
}
