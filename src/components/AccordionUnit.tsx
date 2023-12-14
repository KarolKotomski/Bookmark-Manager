import CaretIcon from "./icons/CaretIcon";

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
    <div
      className="flex cursor-pointer flex-col border-b"
      onClick={() => {
        handleToggle(content.id);
      }}
    >
      <div className="group flex items-center justify-between py-5">
        <h3 className="text-[0.9375rem] text-blueDark transition-colors duration-300 group-hover:text-redBright md:text-lg">
          {content.question}
        </h3>
        <div
          className={`stroke-blueBright transition-transform duration-300 md:px-5 ${
            activeButtonId === content.id && "rotate-180 stroke-redBright"
          }`}
        >
          <CaretIcon />
        </div>
      </div>
      <div
        className={`ease-[cubic-bezier(0.25,0.1,0.25,1.0) grid transition-all duration-300 ${
          activeButtonId === content.id
            ? "grid-rows-[1fr] pb-8 pt-2"
            : "grid-rows-[0fr]"
        }`}
      >
        <p className="overflow-hidden text-sm leading-8 text-gray-500 md:text-base">
          {content.answer}
        </p>
      </div>
    </div>
  );
};

export default AccordionUnit;
