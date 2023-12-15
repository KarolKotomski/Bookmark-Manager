import { bannerContentList } from "../data/data";
import Banner from "./Banner";

const Hero = () => {
  return (
    <div className="container">
      <Banner content={bannerContentList[3]} />
    </div>
  );
};

export default Hero;
