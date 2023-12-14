import { featuresElementsList, sectionHeadContentList } from "../data/data";
import FeaturesHeader from "./FeaturesHeader";
import FeaturesMain from "./FeaturesMain";
import SectionHead from "./SectionHead";

const Features = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-10 pt-24">
      <SectionHead content={sectionHeadContentList[0]} />

      <div className="flex w-full max-w-[45rem] flex-col justify-between border-t-2 pb-5 text-center text-base md:flex-row md:border-t-0">
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
