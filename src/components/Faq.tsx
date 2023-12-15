import { sectionHeadContentList } from "../data/data";
import Accordion from "./Accordion";
import SectionHead from "./SectionHead";
import ButtonStandard from "./buttons/ButtonStandard";

const Faq = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-10 pt-24">
      <div className="flex max-w-[34rem] flex-col items-center gap-4 p-5 text-center md:gap-7">
        <SectionHead
          header={sectionHeadContentList[2].header}
          paragraph={sectionHeadContentList[2].paragraph}
        />
      </div>
      <Accordion />
      <ButtonStandard label="More Info" applyStyle="blue" />
    </div>
  );
};

export default Faq;
