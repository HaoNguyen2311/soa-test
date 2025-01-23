import Image from "next/image";
import TreeIco from "@/public/tree.svg";
import IceCream from "@/public/iceCream.png";
import AuthenIcon from "@/public/authen.svg";
import RespectIcon from "@/public/respct.svg";
import DiversityIcon from "@/public/diversity.svg";
import PersonalIcon from "@/public/personal.svg";
import ConfortIcon from "@/public/confort.svg";

const Experiences = () => {
  return (
    <div className="max-w-[1240px] mx-auto mt-20 ">
      <div className="flex gap-6 py-8 px-4 md:py-0 md:px-8 lg:px-0 bg-blog4-bg md:bg-none bg-no-repeat bg-cover">
        <div className="flex-[1.42] flex flex-col justify-between px-4 py-3 md:px-0 md:py-0  bg-[#FFFFFF99]">
          <div>
            <Image src={TreeIco} alt="Tree Icon" />
            <p className="text-textCore text-2xl md:text-[40px] md:leading-[56px] lg:text-5xl font-semibold mt-1">
              Des expériences inoubliables{" "}
              <span className="text-[#F2542D99] font-semibold">
                Lorem Ipsum truc
              </span>
            </p>
          </div>
          <div className="md:grid grid-cols-[1fr,7.2fr] items-start md:items-center md:gap-x-12 md:gap-y-5 flex flex-col mt-6 md:mt-10">
            <div className="w-full h-0.5 bg-[#BBBBBB] flex-1 hidden md:block" />
            <p className="text-textBrown text-base md:text-2xl lg:text-[28px] font-semibold text-left">
              À propos de BASIC
            </p>
            <p className="text-[#562C2CCC] md:base text-sm lg:text-lg font-normal col-start-2 mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <Image
          className="flex-1 hidden md:block"
          src={IceCream}
          alt="Ice Cream Image"
        />
      </div>
      <div className="flex justify-center md:justify-between mt-[60px] flex-wrap sm:px-4 md:px-8 lg:px-0 gap-6 md:gap-0">
        <div className="flex flex-col items-center justify-center px-10">
          <div className="rounded-full bg-[#0E9594] flex items-center justify-center p-3 w-fit">
            <Image
              className="w-2.5 h-2.5 md:w-auto md:h-auto"
              src={AuthenIcon}
              alt="Imge"
            />
          </div>
          <p className="text-textBrown sm:text-base md:text-xl lg:text-2xl font-medium sm:mt-2 md:mt-3 lg:mt-4">
            Authenticité
          </p>
          <p className="text-[#562C2CCC] sm:text-sm md:text-base lg:text-lg font-normal md:mt-1 lg:mt-2">
            Sous-titre
          </p>
        </div>
        <div className="flex flex-col items-center justify-center px-10">
          <div className="rounded-full bg-[#0E9594] flex items-center justify-center p-3 w-fit">
            <Image
              className="w-2.5 h-2.5 md:w-auto md:h-auto"
              src={RespectIcon}
              alt="Imge"
            />
          </div>
          <p className="text-textBrown sm:text-base md:text-xl lg:text-2xl font-medium sm:mt-2 md:mt-3 lg:mt-4">
            Authenticité
          </p>
          <p className="text-[#562C2CCC] sm:text-sm md:text-base lg:text-lg font-normal md:mt-1 lg:mt-2">
            Sous-titre
          </p>
        </div>
        <div className="flex flex-col items-center justify-center px-10">
          <div className="rounded-full bg-[#0E9594] flex items-center justify-center p-3 w-fit">
            <Image
              className="w-2.5 h-2.5 md:w-auto md:h-auto"
              src={DiversityIcon}
              alt="Imge"
            />
          </div>
          <p className="text-textBrown sm:text-base md:text-xl lg:text-2xl font-medium sm:mt-2 md:mt-3 lg:mt-4">
            Authenticité
          </p>
          <p className="text-[#562C2CCC] sm:text-sm md:text-base lg:text-lg font-normal md:mt-1 lg:mt-2">
            Sous-titre
          </p>
        </div>
        <div className="flex flex-col items-center justify-center px-10">
          <div className="rounded-full bg-[#0E9594] flex items-center justify-center p-3 w-fit">
            <Image
              className="w-2.5 h-2.5 md:w-auto md:h-auto"
              src={PersonalIcon}
              alt="Imge"
            />
          </div>
          <p className="text-textBrown sm:text-base md:text-xl lg:text-2xl font-medium sm:mt-2 md:mt-3 lg:mt-4">
            Authenticité
          </p>
          <p className="text-[#562C2CCC] sm:text-sm md:text-base lg:text-lg font-normal md:mt-1 lg:mt-2">
            Sous-titre
          </p>
        </div>
        <div className="flex flex-col items-center justify-center px-10">
          <div className="rounded-full bg-[#0E9594] flex items-center justify-center p-3 w-fit">
            <Image
              className="w-2.5 h-2.5 md:w-auto md:h-auto"
              src={ConfortIcon}
              alt="Imge"
            />
          </div>
          <p className="text-textBrown sm:text-base md:text-xl lg:text-2xl font-medium sm:mt-2 md:mt-3 lg:mt-4">
            Authenticité
          </p>
          <p className="text-[#562C2CCC] sm:text-sm md:text-base lg:text-lg font-normal md:mt-1 lg:mt-2">
            Sous-titre
          </p>
        </div>
      </div>
    </div>
  );
};
export default Experiences;
