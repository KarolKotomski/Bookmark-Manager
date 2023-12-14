import { featuresElementsList } from "../data/data";
import FeaturesHeader from "./FeaturesHeader";
import FeaturesMain from "./FeaturesMain";
import SectionHead from "./SectionHead";

const Features = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-10 pt-24">
      <SectionHead />

      <div className="flex w-full max-w-[45rem] justify-between border-b-2 pb-5  text-center text-base">
        {featuresElementsList.map((element, index) => {
          return <FeaturesHeader key={index} text={element} />;
        })}
      </div>

      <div>
        <FeaturesMain />;
      </div>
    </div>
  );
};

export default Features;
