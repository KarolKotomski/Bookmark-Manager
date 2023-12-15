type Props = {
  header: string;
  paragraph: string;
};

const SectionHead = ({ header, paragraph }: Props) => {
  return (
    <>
      <h2 className="text-2xl font-medium text-blueDark md:text-[2rem]">
        {header}
      </h2>
      <p className="text-sm leading-6 text-grealish md:text-lg">{paragraph}</p>
    </>
  );
};

export default SectionHead;
