import Image from "next/image";
import Logo from "@/public/logo.svg";
import MountainLogo from "@/public/mountains.svg";
import FishingLogo from "@/public/fishing .svg";
import CrossHairLogo from "@/public/crosshair.svg";
import ArrowUpRightIcon from "@/public/arrowUpRight.svg";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu } from "../Menu/Menu";

const Header = () => {
  return (
    <div className="bg-[#562C2CB2] backdrop-blur-[15px] flex items-center justify-between px-4 py-3 lg:px-[170px] md:py-4 sticky top-0 z-20">
      <Image src={Logo} alt="Logo Image" />
      <div className="gap-6 hidden md:flex">
        <Link className="text-[#FFFFFFE5] text-base font-medium" href="">
          Titre 1
        </Link>
        <Link className="text-[#FFFFFFE5] text-base font-medium" href="">
          Titre 2
        </Link>
        <Link className="text-[#FFFFFFE5] text-base font-medium" href="">
          Titre 3
        </Link>
        <Link className="text-[#FFFFFFE5] text-base font-medium" href="">
          Titre 4
        </Link>
      </div>
      <Menu />
      <div className="gap-5 hidden md:flex">
        <div className="flex gap-4">
          <Link href="">
            <Image src={MountainLogo} alt="Mountain Logo" />
          </Link>
          <Link href="">
            <Image src={FishingLogo} alt="Fishing Logo" />
          </Link>
          <Link href="">
            <Image src={CrossHairLogo} alt="CrossHair Logo" />
          </Link>
          <Button className="py-2 pl-6 pr-4 rounded-[34px] bg-textCore">
            <div className="w-6 h-6">
              <Image
                className="!text-white"
                src={ArrowUpRightIcon}
                alt="arrow icon"
              />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
