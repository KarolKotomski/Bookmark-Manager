import BannerSideTextBlock from "./BannerSideTextBlock";
import { heroBannerElementsList } from "../data/data";
import bannerImage from "../assets/illustration-hero.svg";

const HeroBanner = () => {
  return (
    <div className="relative py-14">
      <div className="absolute bottom-0 right-0 -z-10 h-[65%] w-[40%] rounded-l-full bg-blueBright pt-10"></div>
      <div className="container grid grid-cols-2">
        <BannerSideTextBlock content={heroBannerElementsList[0]} />
        <div>
          <img src={bannerImage} alt="tablet device showing bookmark website" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
