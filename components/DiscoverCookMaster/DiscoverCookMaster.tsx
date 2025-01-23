import { Button } from "../ui/button";

const Block6 = () => {
  return (
    <div className="bg-blog6-bg flex items-center justify-center pt-[114px] pb-[178px] md:pb-[260px] md:pt-[70px]">
      <div className="max-w-[646px] flex flex-col justify-center items-center text-center">
        <p className="text-textBrown text-2xl md:text-[40px] md:leading-[56px] lg:text-[52px] lg:leading-[60px] font-semibold">
          Explorez avec BASIC{" "}
          <span className="text-[#562C2C80]">dès aujourd&apos;hui</span>
        </p>
        <p className="text-textBrown text-sm md:text-xl lg:text-2xl font-normal mt-2 md:mt-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s,
        </p>
        <Button className="py-3 px-10 text-white text-lg font-medium bg-textCore mt-10 rounded-full">
          Explorer
        </Button>
      </div>
    </div>
  );
};

export default Block6;
