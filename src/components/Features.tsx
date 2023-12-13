import TextBlock from "./TextBlock";
import { textBlockElementsList, featuresElementsList } from "../data/data";

const Features = () => {
  const handleHeaderMapping = () => {
    return featuresElementsList.map((element) => {
      return (
        <h4 key={element.id} className="w-full text-gray-500">
          {element.sliderHeader}
        </h4>
      );
    });
  };

  return (
    <div className="container flex flex-col items-center justify-center gap-10 pt-24">
      <div className="flex max-w-[33rem] text-center">
        <TextBlock content={textBlockElementsList[1]} />
      </div>

      <div className="flex w-full max-w-[45rem] justify-between border-b-2 pb-5  text-center text-base">
        {handleHeaderMapping()}
      </div>
    </div>
  );
};

export default Features;
