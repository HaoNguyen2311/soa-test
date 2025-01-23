import Title from "../Title";
import DiscoverCard from "./DiscoverCard/DiscoverCard";

const Discover = () => {
  const items = [1, 2, 3];
  return (
    <div className="max-w-[1240px] mx-auto my-20 px-6 lg:px-0">
      <Title title="title 1" />
      <p className="font-normal text-sm md:text-xl lg:text-2xl text-center mt-4 text-textBrown">
        Sous-titre Bloc 1
      </p>
      <div className="flex sm:mt-5 mt-10 flex-col md:flex-row gap-6 md:gap-8">
        {items.map((i, index) => {
          return (
            <DiscoverCard
              className={index % 2 ? "" : "sm:mt-0 md:mt-11"}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Discover;
