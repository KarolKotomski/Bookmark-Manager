import ButtonStandard from "./ButtonStandard";

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
        <h1 className="text-5xl font-medium text-blueDark">{content.header}</h1>
      ) : (
        <h2 className="text-3xl font-medium text-blueDark">{content.header}</h2>
      )}
      <p className="text-grealish">{content.paragraph}</p>
      <div className="flex w-fit gap-5">
        {content.isButton && (
          <ButtonStandard label={content.buttonText[0]} style="blue" />
        )}
        {content.isButton && (
          <ButtonStandard label={content.buttonText[1]} style="grey" />
        )}
      </div>
    </div>
  );
};

export default BannerSideTextBlock;
