import { bannerContentList } from "../data/data";
import Banner from "./Banner";

const Hero = () => {
  return (
    <div className="container">
      <Banner content={bannerContentList[0]} />
    </div>
  );
};

export default Hero;
