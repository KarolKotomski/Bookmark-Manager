import SectionHead from "./SectionHead";
import { sectionHeadContentList } from "../data/data";

const Download = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-10 pt-24">
      <SectionHead content={sectionHeadContentList[1]} />
    </div>
  );
};

export default Download;
