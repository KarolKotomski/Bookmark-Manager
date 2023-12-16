import { bannerContentList } from "../data/data";
import Banner from "./Banner";

const Hero = () => {
  return (
    <div className="container pt-4">
      <Banner content={bannerContentList[3]} />
    </div>
  );
};

export default Hero;
