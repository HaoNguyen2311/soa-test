import Image from "next/image";
import MealImage from "@/public/Blog5/meal.png";
import Image1 from "@/public/Blog5/image1.png";
import Image2 from "@/public/Blog5/image2.png";
import Image3 from "@/public/Blog5/image3.png";
import Image4 from "@/public/Blog5/image4.png";
import InstagramIcon from "@/public/Blog5/instagram.svg";
import Arrow from "@/public/arrowUpRight.svg";

const ShareCreations = () => {
  return (
    <div className="max-w-[1240px] mx-auto mt-[100px] pt-[60px] mb-0 lg:mb-20 md:mb-8">
      <div className="flex md:gap-14 sm:gap-1 lg:gap-20 items-center px-4 md:px-8 lg:px-0 flex-col-reverse md:flex-row">
        <p className="text-[#562C2CCC] md:text-base sm:text-sm lg:text-lg font-normal flex-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially{" "}
        </p>
        <p className="text-textBrown sm:text-2xl  md:text-[40px] md:leading-[48px] lg:leading-[60px] font-semibold flex-[1.05]">
          Immortalisez des moments inoubliables avec{" "}
          <span className="text-textCore">#BASIC</span>
        </p>
      </div>
      <div className="bg-blog5-bg p-4 md:py-[44px] md:px-[60px] lg:py-[38px] lg:px-[105px] flex items-center justify-center mt-6 md:mt-8">
        <div className="bg-white p-6">
          <Image src={MealImage} alt="Image" />
          <div className="flex justify-between mt-6">
            <div className="flex flex-col gap-1">
              <p className="text-black sm:text-base md:text-xl lg:text-2xl font-semibold">
                La famille
              </p>
              <p className="text-[#666666] sm:text-sm md:text-base lg:text-lg font-normal mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className="border border-[#6666661A] rounded-full text-sm md:text-xl font-normal w-fit text-nowrap flex-1 py-1.5 px-4 flex justify-center items-center h-fit">
              24 Sep 2024
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:flex justify-between mt-6 md:gap-8 px-4 md:px-8 lg:px-0 gap-x-5 gap-y-4 ">
        <div className="rounded-[20px] relative">
          <Image className="rounded-[20px]" src={Image1} alt="Image" />
          <div className="flex py-4 px-5 justify-between items-center absolute bottom-0 w-full bg-[#562C2C99] md:rounded-b-[20px]">
            <Image
              className="sm:w-4 sm:h-4 md:w6 md:h-6 lg:w-auto lg:h-auto"
              src={InstagramIcon}
              alt="Instagram Icon"
            />
            <p className="text-white text-xs md:text-base lg:text-lg font-medium">
              Anthony Durand
            </p>
            <Image
              className="sm:w-4 sm:h-4 md:w6 md:h-6 lg:w-auto lg:h-auto"
              src={Arrow}
              alt="Instagram Icon"
            />
          </div>
        </div>
        <div className="rounded-[20px] relative">
          <Image className="rounded-[20px]" src={Image2} alt="Image" />
          <div className="flex py-4 px-5 justify-between items-center absolute bottom-0 w-full bg-[#562C2C99] rounded-b-[20px]">
            <Image
              className="sm:w-4 sm:h-4 md:w6 md:h-6 lg:w-auto lg:h-auto"
              src={InstagramIcon}
              alt="Instagram Icon"
            />
            <p className="text-white text-xs md:text-base lg:text-lg font-medium">
              Anthony Durand
            </p>
            <Image
              className="sm:w-4 sm:h-4 md:w6 md:h-6 lg:w-auto lg:h-auto"
              src={Arrow}
              alt="Instagram Icon"
            />
          </div>
        </div>
        <div className="rounded-[20px] relative">
          <Image className="rounded-[20px]" src={Image3} alt="Image" />
          <div className="flex py-4 px-5 justify-between items-center absolute bottom-0 w-full bg-[#562C2C99] rounded-b-[20px]">
            <Image
              className="sm:w-4 sm:h-4 md:w6 md:h-6 lg:w-auto lg:h-auto"
              src={InstagramIcon}
              alt="Instagram Icon"
            />
            <p className="text-white text-xs md:text-base lg:text-lg font-medium">
              Anthony Durand
            </p>
            <Image
              className="sm:w-4 sm:h-4 md:w6 md:h-6 lg:w-auto lg:h-auto"
              src={Arrow}
              alt="Instagram Icon"
            />
          </div>
        </div>
        <div className="rounded-[20px] relative">
          <Image className="rounded-[20px]" src={Image4} alt="Image" />
          <div className="flex py-4 px-5 justify-between items-center absolute bottom-0 w-full bg-[#562C2C99] rounded-b-[20px]">
            <Image
              className="sm:w-4 sm:h-4 md:w6 md:h-6 lg:w-auto lg:h-auto"
              src={InstagramIcon}
              alt="Instagram Icon"
            />
            <p className="text-white text-xs md:text-base lg:text-lg font-medium">
              Anthony Durand
            </p>
            <Image
              className="sm:w-4 sm:h-4 md:w6 md:h-6 lg:w-auto lg:h-auto"
              src={Arrow}
              alt="Instagram Icon"
            />
          </div>
        </div>
      </div>
      <p className="text-[#666666] text-sm md:text-base font-bold lg:text-2xl text-center lg:mt-12 md:mt-10 mt-6">
        Consultez @BASIC et <span className="text-textCore">#BASIC</span> pour
        découvrir les expériences inoubliables des pourvoiries et activités
        BASIC.
      </p>
    </div>
  );
};

export default ShareCreations;
