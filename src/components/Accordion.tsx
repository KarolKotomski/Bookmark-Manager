import AccordionUnit from "./AccordionUnit";
import { faqContentList } from "../data/data";
import { useState } from "react";

const Accordion = () => {
  const [activeButtonId, setActiveButtonId] = useState(0);

  const toggle = (id: number) => {
    if (activeButtonId === id) {
      setActiveButtonId(0);
    } else {
      setActiveButtonId(id);
    }
  };

  return (
    <div className="flex max-w-[33.9rem] flex-col border-t">
      {faqContentList.map((element) => {
        return (
          <AccordionUnit
            key={element.id}
            content={element}
            activeButtonId={activeButtonId}
            handleToggle={toggle}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
