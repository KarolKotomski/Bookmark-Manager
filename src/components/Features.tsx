import {
  bannerContentList,
  featuresElementsList,
  sectionHeadContentList,
} from "../data/data";
import Banner from "./Banner";
import FeaturesHeader from "./FeaturesHeader";
import SectionHead from "./SectionHead";

const Features = () => {
  const handleBannerContentMapping = () => {
    return bannerContentList.map((element) => {
      if (element.isHero === true) {
        return null;
      } else {
        return <Banner content={element} />;
      }
    });
  };

  return (
    <div className="container flex flex-col items-center justify-center gap-10 pt-24">
      <div className="flex max-w-[34rem] flex-col items-center gap-4 p-5 text-center md:gap-7">
        <SectionHead
          header={sectionHeadContentList[0].header}
          paragraph={sectionHeadContentList[0].paragraph}
        />
      </div>

      <div className="flex w-full max-w-[45rem] flex-col justify-between border-t-2 pb-5 text-center text-base md:flex-row md:border-t-0">
        {featuresElementsList.map((element, index) => {
          return <FeaturesHeader key={index} text={element} />;
        })}
      </div>

      <div>{handleBannerContentMapping()}</div>
    </div>
  );
};

export default Features;
