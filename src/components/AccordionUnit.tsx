import caretIcon from "../assets/icon-arrow.svg";

type content = {
  id: number;
  question: string;
  answer: string;
};

type Props = {
  content: content;
};

const AccordionUnit = ({ content }: Props) => {
  return (
    <div className="flex flex-col gap-5 py-5">
      <div className="flex items-center justify-between">
        <h3 className="text-blueDark">{content.question}</h3>
        <img src={caretIcon} alt="caret" />
      </div>
      <p className="text-gray-500">{content.answer}</p>
    </div>
  );
};

export default AccordionUnit;
