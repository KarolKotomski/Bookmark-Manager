import { sectionHeadContentList } from "../data/data";
import Accordion from "./Accordion";
import SectionHead from "./SectionHead";
import ButtonStandard from "./buttons/ButtonStandard";

const Faq = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-10 pt-24">
      <SectionHead content={sectionHeadContentList[2]} />
      <Accordion />
      <ButtonStandard label="More Info" applyStyle="blue" />
    </div>
  );
};

export default Faq;
