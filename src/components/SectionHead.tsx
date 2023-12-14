type content = {
  header: string;
  paragraph: string;
};

type Props = {
  content: content;
};

const SectionHead = ({ content }: Props) => {
  return (
    <div className="flex max-w-[34rem] flex-col items-center gap-4 p-5 text-center md:gap-7">
      <h2 className="text-2xl font-medium text-blueDark md:text-[2rem]">
        {content.header}
      </h2>
      <p className="leading-6 text-sm text-grealish md:text-lg">
        {content.paragraph}
      </p>
    </div>
  );
};

export default SectionHead;
