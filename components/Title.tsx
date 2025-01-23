type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return (
    <div className="flex gap-10  items-center justify-center w-full">
      <div className="h-0.5 w-full bg-[#BBBBBB]" />
      <h2 className="text-textCore sm:text-2xl md:text-[40px] md:leading-[60px] text-[52px] leading-[60px] font-semibold text-nowrap">
        {title}
      </h2>
      <div className="h-0.5 w-full bg-[#BBBBBB]" />
    </div>
  );
};
export default Title;
