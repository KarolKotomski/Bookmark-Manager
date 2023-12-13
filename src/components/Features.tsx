import TextBlock from "./TextBlock";
import { textBlockElementsList } from "../data/data";

const Features = () => {
  return (
    <div className="container flex flex-col items-center py-32">
      <div className="flex w-[40%] text-center">
        <TextBlock content={textBlockElementsList[1]} />
      </div>
    </div>
  );
};

export default Features;
