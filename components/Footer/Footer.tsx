import Image from "next/image";
import InstagramIcon from "@/public/Footer/instagram.svg";
import FacebookIcon from "@/public/Footer/facebook.svg";
import YoutubeIcon from "@/public/Footer/youtube.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-textBrown py-8 md:py-10 lg:py-14 px-4 md:px-8 lg:px-0">
      <div className="max-w-[1240px] mx-auto ">
        <div className="grid grid-cols-1 items-center md:flex justify-between">
          <div className="flex flex-col gap-2.5 text-center md:text-start">
            <p className="text-white text-lg font-normal">BASIC</p>
            <p className="text-white text-lg font-normal">5149046789</p>
            <p className="text-white text-lg font-normal">
              Quebec, 3100 Boulevard de la Cote-Vertu
            </p>
          </div>
          <div className="flex flex-col gap-2.5 text-center md:text-start">
            <Link href="" className="text-[#FFFFFF99] text-lg font-normal">
              Activité 1
            </Link>
            <Link href="" className="text-[#FFFFFF99] text-lg font-normal">
              Activité 1
            </Link>
            <Link href="" className="text-[#FFFFFF99] text-lg font-normal">
              Activité 1
            </Link>
          </div>
          <div className="flex flex-col gap-2.5 text-center md:text-start">
            <Link href="" className="text-[#FFFFFF99] text-lg font-normal">
              Activité 1
            </Link>
            <Link href="" className="text-[#FFFFFF99] text-lg font-normal">
              Activité 1
            </Link>
            <Link href="" className="text-[#FFFFFF99] text-lg font-normal">
              Activité 1
            </Link>
          </div>
          <div className="flex flex-col gap-2.5 text-center md:text-start">
            <Link href="" className="text-[#FFFFFF99] text-lg font-normal">
              Activité 1
            </Link>
            <Link href="" className="text-[#FFFFFF99] text-lg font-normal">
              Activité 1
            </Link>
          </div>
        </div>
        <div className="bg-[#FFFFFF4D] h-[1px] w-full mt-14 mb-5 hidden md:block" />
        <div className="flex justify-between items-center flex-col-reverse md:flex-row mt-8 md:mt-0">
          <p className="text-white sm:text-sm md:text-base lg:text-lg font-normal">
            © BASIC 2024
          </p>
          <div className="bg-[#FFFFFF4D] block md:hidden h-[1px] w-full mt-8 mb-6" />
          <div className="flex gap-4">
            <Link href="" className="bg-textCore rounded-full p-1">
              <Image src={FacebookIcon} alt="Image" />
            </Link>
            <Link href="" className="bg-textCore rounded-full p-1">
              <Image src={InstagramIcon} alt="Image" />
            </Link>
            <Link href="" className="bg-textCore rounded-full p-1">
              <Image src={YoutubeIcon} alt="Image" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
