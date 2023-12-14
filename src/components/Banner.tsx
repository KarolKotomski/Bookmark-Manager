import BackgroundShape from "./BackgroundShape";
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
    <div className="container py-10">
      <div className="flex flex-col-reverse items-center lg:grid lg:grid-cols-2">
        <div className="flex flex-col gap-7 p-5 text-center lg:p-0 lg:text-left xl:max-w-[80%] lg:pr-5">
          {content.isHero ? (
            <h1 className="text-3xl font-medium text-blueDark md:text-5xl md:leading-[3.25rem]">
              {content.header}
            </h1>
          ) : (
            <h2 className="text-4xl font-medium text-blueDark">
              {content.header}
            </h2>
          )}
          <p className="px-6 text-sm text-grealish md:text-lg lg:px-0">
            {content.paragraph}
          </p>
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
    </div>
  );
};

export default Banner;
