import { bannerContentList } from "../data/data";
import Banner from "./Banner";

const Hero = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-7 py-10">
      <Banner content={bannerContentList[3]} />
    </div>
  );
};

export default Hero;
