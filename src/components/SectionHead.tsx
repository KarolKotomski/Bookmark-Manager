type Props = {
  header: string;
  paragraph: string;
  isHero?: boolean;
};

const SectionHead = ({ header, paragraph, isHero }: Props) => {
  return (
    <>
      {isHero ? (
        <h1 className="text-3xl font-medium text-blueDark md:text-[3rem] md:leading-[3.25rem]">
          {header}
        </h1>
      ) : (
        <h2 className="text-2xl font-medium text-blueDark md:text-[2rem]">
          {header}
        </h2>
      )}

      <p className="py-3 text-sm leading-6 text-grealish md:text-lg lg:py-5">
        {paragraph}
      </p>
    </>
  );
};

export default SectionHead;
