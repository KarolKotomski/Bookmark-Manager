type content = {
  id: number;
  isHero: boolean;
  header: string;
  paragraph: string;
  isButton: boolean;
  buttonText: string[];
};

type Props = {
  content: content;
};

const BannerSideTextBlock = ({ content }: Props) => {
  return (
    <div className="flex flex-col gap-10">
      {content.isHero ? (
        <h1 className="text-5xl font-medium">{content.header}</h1>
      ) : (
        <h2 className="text-3xl font-medium">{content.header}</h2>
      )}
      <p className="text-grealish">{content.paragraph}</p>
      <div>
        {content.isButton &&
          content.buttonText.map((element, index) => {
            return <button key={index}>{element}</button>;
          })}
      </div>
    </div>
  );
};

export default BannerSideTextBlock;
