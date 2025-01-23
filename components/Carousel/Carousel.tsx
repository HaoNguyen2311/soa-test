"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import DinnerImage from "@/public/dinner.png";
import BreakfastImage from "@/public/breakFast.png";

const Carousel = () => {
  const settings = {
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="px-[28px]">
        <Image src={DinnerImage} alt="Image" />
        <p className="text-textCore font-medium text-xs md:text-lg lg:text-xl mt-4 md:mt-6">
          Case Title
        </p>
        <p className="text-[#222222] font-medium text-base md:text-2xl text-[28px] mt-0.5 md:mt-1">
          Case sous-titre
        </p>
        <div className="mt-2 md:mt-4 before:h-full before:w-[0.5px] before:bg-[#BBBBBB] before:absolute relative">
          <p className="text-[#562C2CCC] font-normal lg:text-lg line-clamp-3 ml-4 md:text-lg text-sm">
            Chaque sentier vous conduit à des panoramas époustouflants, chaque
            instant devient une aventure, chaque rencontre vous promet un so
            uvenir marquant. Avec MITIK, le tourisme d&apos;aventure allie
            nature brute et confort raffiné à toutes les saisons. Randonnée,
            canoë, observation de la faune, rencontres culturelles, exploration
            en montagne, chaque escapade est une immersion inoubliable dans les
            grands espaces canadiens.
          </p>
        </div>
      </div>
      <div className="px-[28px]">
        <Image src={BreakfastImage} alt="Image" />
        <p className="text-textCore font-medium text-xs md:text-lg lg:text-xl mt-6">
          Case Title
        </p>
        <p className="text-[#222222] font-medium text-base md:text-2xl lg:text-[28px] mt-1">
          Case sous-titre
        </p>
        <div className="mt-4 before:h-full before:w-[0.5px] before:bg-[#BBBBBB] before:absolute relative">
          <p className="text-[#562C2CCC] font-normal lg:text-lg line-clamp-3 ml-4 md:text-lg text-sm">
            Chaque sentier vous conduit à des panoramas époustouflants, chaque
            instant devient une aventure, chaque rencontre vous promet un so
            uvenir marquant. Avec MITIK, le tourisme d&apos;aventure allie
            nature brute et confort raffiné à toutes les saisons. Randonnée,
            canoë, observation de la faune, rencontres culturelles, exploration
            en montagne, chaque escapade est une immersion inoubliable dans les
            grands espaces canadiens.
          </p>
        </div>
      </div>
      <div className="px-[28px]">
        <Image src={DinnerImage} alt="Image" />
        <p className="text-textCore font-medium text-xs md:text-lg lg:text-xl mt-6">
          Case Title
        </p>
        <p className="text-[#222222] font-medium text-base md:text-2xl lg:text-[28px] mt-1">
          Case sous-titre
        </p>
        <div className="mt-4 before:h-full before:w-[0.5px] before:bg-[#BBBBBB] before:absolute relative">
          <p className="text-[#562C2CCC] font-normal lg:text-lg line-clamp-3 ml-4 md:text-lg text-sm">
            Chaque sentier vous conduit à des panoramas époustouflants, chaque
            instant devient une aventure, chaque rencontre vous promet un so
            uvenir marquant. Avec MITIK, le tourisme d&apos;aventure allie
            nature brute et confort raffiné à toutes les saisons. Randonnée,
            canoë, observation de la faune, rencontres culturelles, exploration
            en montagne, chaque escapade est une immersion inoubliable dans les
            grands espaces canadiens.
          </p>
        </div>
      </div>
      <div className="px-[28px]">
        <Image src={BreakfastImage} alt="Image" />
        <p className="text-textCore font-medium text-xs md:text-lg lg:text-xl mt-6">
          Case Title
        </p>
        <p className="text-[#222222] font-medium text-base md:text-2xl lg:text-[28px] mt-1">
          Case sous-titre
        </p>
        <div className="mt-4 before:h-full before:w-[0.5px] before:bg-[#BBBBBB] before:absolute relative">
          <p className="text-[#562C2CCC] font-normal lg:text-lg line-clamp-3 ml-4 md:text-lg text-sm">
            Chaque sentier vous conduit à des panoramas époustouflants, chaque
            instant devient une aventure, chaque rencontre vous promet un so
            uvenir marquant. Avec MITIK, le tourisme d&apos;aventure allie
            nature brute et confort raffiné à toutes les saisons. Randonnée,
            canoë, observation de la faune, rencontres culturelles, exploration
            en montagne, chaque escapade est une immersion inoubliable dans les
            grands espaces canadiens.
          </p>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
