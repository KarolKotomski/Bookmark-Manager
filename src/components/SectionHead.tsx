type content = {
  header: string;
  paragraph: string;
};

type Props = {
  content: content;
};

const SectionHead = ({ content }: Props) => {
  return (
    <div className="flex max-w-[35rem] flex-col items-center gap-7 pb-5 text-center">
      <h2 className="text-4xl font-medium text-blueDark">{content.header}</h2>
      <p className="text-grealish">{content.paragraph}</p>
    </div>
  );
};

export default SectionHead;
