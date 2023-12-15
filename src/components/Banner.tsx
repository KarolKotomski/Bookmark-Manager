import SectionHead from "./SectionHead";
import ButtonStandard from "./buttons/ButtonStandard";

type content = {
  id: number;
  isHero: boolean;
  header: string;
  paragraph: string;
  buttonText: string[];
  image: string;
  altText: string;
};

type Props = {
  content: content;
};

const Banner = ({ content }: Props) => {
  return (
    <>
      <div className="flex flex-col-reverse items-center lg:grid lg:grid-cols-2">
        <div className="flex flex-col gap-7 p-5 text-center lg:p-0 lg:pr-5 lg:text-left xl:max-w-[80%]">
          <SectionHead
            header={content.header}
            paragraph={content.paragraph}
            isHero={content.isHero}
          />
          <div className="flex w-full justify-center gap-3 lg:justify-start lg:gap-5">
            {content.buttonText[0] && (
              <ButtonStandard label={content.buttonText[0]} applyStyle="blue" />
            )}
            {content.buttonText[1] && (
              <ButtonStandard label={content.buttonText[1]} applyStyle="grey" />
            )}
          </div>
        </div>

        <div className="flex w-full items-center justify-center">
          <img src={content.image} alt={content.altText} />
        </div>
      </div>
    </>
  );
};

export default Banner;
