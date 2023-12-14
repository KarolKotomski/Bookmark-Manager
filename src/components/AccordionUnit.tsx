import caretIcon from "../assets/icon-arrow.svg";

type content = {
  id: number;
  question: string;
  answer: string;
};

type Props = {
  content: content;
  activeButtonId: number;
  handleToggle: (id: number) => void;
};

const AccordionUnit = ({ content, activeButtonId, handleToggle }: Props) => {
  return (
    <div className="flex cursor-pointer flex-col border-t">
      <div
        className="flex items-center justify-between py-5"
        onClick={() => {
          handleToggle(content.id);
        }}
      >
        <h3 className="text-blueDark">{content.question}</h3>
        <img src={caretIcon} alt="caret" className="px-5" />
      </div>
      <div
        className={`grid ${
          activeButtonId === content.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <p className="overflow-hidden text-base leading-8 text-gray-500">
          {content.answer}
        </p>
      </div>
    </div>
  );
};

export default AccordionUnit;
