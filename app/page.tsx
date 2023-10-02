import Socials from "@/components/Socials";
import HeroSection from "@/components/HeroSection";
import profile1 from "@/public/profile1.svg";
import profile2 from "@/public/profile2.svg";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection imageUrl="profile1.svg" imageAlt="hero" />
      <Socials />
    </div>
  );
}
