import { useState } from "react";
import {
  bannerContentList,
  featuresElementsList,
  sectionHeadContentList,
} from "../data/data";
import Banner from "./Banner";
import FeaturesHeader from "./FeaturesHeader";
import SectionHead from "./SectionHead";

const Features = () => {
  const [activeFeatureHeaderId, setActiveFeatureHeaderId] = useState(1);

  const handleSwitchHeader = (id: number) => {
    setActiveFeatureHeaderId(id);
  };

  const handleFeaturesHeaderContentMapping = () => {
    return featuresElementsList.map((element) => {
      return (
        <FeaturesHeader
          key={element.id}
          label={element.label}
          headerId={element.id}
          handleSwitchHeader={handleSwitchHeader}
          activeFeatureHeaderId={activeFeatureHeaderId}
        />
      );
    });
  };

  const handleBannerContentMapping = () => {
    return bannerContentList.map((element) => {
      if (activeFeatureHeaderId === element.id) {
        return <Banner key={element.id} content={element} />;
      }
    });
  };

  return (
    <div className="container flex flex-col items-center justify-center gap-7 py-10">
      <div className="flex max-w-[34rem] flex-col items-center gap-4 p-5 text-center md:gap-7">
        <SectionHead
          header={sectionHeadContentList[0].header}
          paragraph={sectionHeadContentList[0].paragraph}
        />
      </div>

      <div className="flex w-full max-w-[45rem] flex-col justify-center border-t-2 pb-5 text-center text-base sm:flex-row sm:border-t-0">
        {handleFeaturesHeaderContentMapping()}
      </div>

      {handleBannerContentMapping()}
    </div>
  );
};

export default Features;
