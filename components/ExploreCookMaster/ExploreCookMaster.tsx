import Link from "next/link";
import ArrowIcon from "@/public/arrowRight.svg";
import Image from "next/image";
import Carousel from "../Carousel/Carousel";

const ExploreCookMaster = () => {
  return (
    <div className="px-4 md:px-8 lg:px-0">
      <div className="flex items-center justify-center md:justify-between max-w-[1240px] mx-auto">
        <p className="text-textCore font-semibold text-2xl md:text-[40px] lg:text-5xl text-center md:text-left">
          Explorez d’avantage avec BASIC
        </p>
        <Link href="" className="items-center gap-2 hidden md:flex">
          En savoir plus <Image src={ArrowIcon} alt="Arrow Icon" />
        </Link>
      </div>
      <div className="max-w-[1240px] mx-auto mt-4 md:mt-9">
        <Carousel />
      </div>
    </div>
  );
};

export default ExploreCookMaster;
