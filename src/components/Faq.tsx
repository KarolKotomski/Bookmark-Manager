import { sectionHeadContentList } from "../data/data";
import Accordion from "./Accordion";
import SectionHead from "./SectionHead";

const Faq = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-10 pt-24">
      <SectionHead content={sectionHeadContentList[2]} />
      <Accordion/>
    </div>
  );
};

export default Faq;
