import { Button } from "@/components/ui/button";
import FruitsImage from "@/public/fruits.png";
import Image from "next/image";
import ArrowUpRightIcon from "@/public/arrowUpRightColor.svg";
import clsx from "clsx";

type BlockItemProps = {
  className?: string;
};

const DiscoverCard = ({ className }: BlockItemProps) => {
  return (
    <div className={clsx(className, "flex-1")}>
      <Image
        src={FruitsImage}
        className="aspect-[343/200] w-full md:aspect-auto md:w-auto"
        alt="FruitsImage"
      />
      <p className="text-textCore font-medium md:text-lg text-xs lg:text-xl mt-4 md:mt-5 lg:mt-6">
        Case Title
      </p>
      <p className="text-textBrown font-medium text-base md:text-2xl text-[28px] md:mt-1 mt-0.5">
        Case sous-titre
      </p>
      <p className="text-[#562C2CCC] font-normal text-sm md:text-lg line-clamp-2 mt-2 md:mt-4">
        Chaque sentier vous conduit à des panoramas époustouflants, chaque
        instant devient une aventure, chaque rencontre vous promet un so uvenir
        marquant. Avec MITIK, le tourisme d&apos;aventure allie nature brute et
        confort raffiné à toutes les saisons. Randonnée, canoë, observation de
        la faune, rencontres culturelles, exploration en montagne, chaque
        escapade est une immersion inoubliable dans les grands espaces
        canadiens.
      </p>
      <Button className="border-[1.5px] border-[#562C2C4D] rounded-full md:py-2.5 md:px4 lg:py-2.5 px-3 py-2 lg:px-[76px] bg-transparent shadow-none mt-6">
        <p className="text-textBrown sm:text-sm md:text-base text-lg font-medium">
          Forfait 1
        </p>
        <Image
          className="!text-white "
          src={ArrowUpRightIcon}
          alt="arrow icon"
        />
      </Button>
    </div>
  );
};

export default DiscoverCard;
