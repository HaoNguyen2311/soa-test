import Image from "next/image";
import HeroBannerImage from "@/public/heroBanner.png";
import { Button } from "../ui/button";
import ChatIcon from "../../public/chatIcon.svg";

const HeroSection = () => {
  return (
    <div className="relative">
      <Image
        src={HeroBannerImage}
        alt="Hero Banner"
        className="object-contain"
      />
      <Button className="h-14 w-14 bg-textCore rounded-full absolute  sm:right-4 sm:bottom-5 md:right-4 md:bottom-10 bottom-20 right-[148px]">
        <Image src={ChatIcon} alt="Chat Icon" />
      </Button>
    </div>
  );
};

export default HeroSection;
