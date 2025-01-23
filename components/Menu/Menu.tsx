"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import Image from "next/image";
import MountainLogo from "@/public/mountains.svg";
import FishingLogo from "@/public/fishing .svg";
import CrossHairLogo from "@/public/crosshair.svg";
import ArrowUpRightIcon from "@/public/arrowUpRight.svg";
import MenuIcon from "@/public/menu.svg";

export function Menu() {
  return (
    <div className="md:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="bg-transparent shadow-none">
            <Image src={MenuIcon} alt="Menu Image" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="bg-[#562C2CB2] min-w-[300px]">
          <div>
            <DrawerHeader>
              <DrawerTitle>Menu</DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>
          </div>
          <div>
            <div className="flex flex-col gap-4 p-4">
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
              <Link href="">
                <Image src={MountainLogo} alt="Mountain Logo" />
              </Link>
              <Link href="">
                <Image src={FishingLogo} alt="Fishing Logo" />
              </Link>
              <Link href="">
                <Image src={CrossHairLogo} alt="CrossHair Logo" />
              </Link>
              <Button className="py-2 pl-6 pr-4 rounded-[34px] bg-textCore w-fit">
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
        </DrawerContent>
      </Drawer>
    </div>
  );
}
