import BannerSideImageBlock from "./BannerSideImageBlock";
import BannerSideTextBlock from "./BannerSideTextBlock";
import { heroBannerElementsList } from "../data/data";

const HeroBanner = () => {
  return (
    <div className="container grid grid-cols-2  items-center gap-36 py-20">
      <BannerSideTextBlock content={heroBannerElementsList[0]} />

      <BannerSideImageBlock />
    </div>
  );
};

export default HeroBanner;
