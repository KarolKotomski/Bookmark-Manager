import AccordionUnit from "./AccordionUnit";
import { faqContentList } from "../data/data";

const Accordion = () => {
  return (
    <div className="flex max-w-xl flex-col">
      {faqContentList.map((element) => {
        return <AccordionUnit key={element.id} content={element} />;
      })}
    </div>
  );
};

export default Accordion;
