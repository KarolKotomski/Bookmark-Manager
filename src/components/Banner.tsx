import BackgroundShape from "./BackgroundShape";
import ButtonStandard from "./ButtonStandard";

type content = {
  id: number;
  isHero: boolean;
  header: string;
  paragraph: string;
  buttonText: string[];
  image: string;
};

type Props = {
  content: content;
};

const Banner = ({ content }: Props) => {
  return (
    <div className="relative py-14">
      <BackgroundShape />
      <div className="container grid grid-cols-2">
        <div className="flex max-w-[80%]">
          <div className="flex flex-col justify-center gap-7">
            {content.isHero ? (
              <h1 className="text-[2.75rem] font-medium leading-[3rem] text-blueDark">
                {content.header}
              </h1>
            ) : (
              <h2 className="text-4xl font-medium text-blueDark">
                {content.header}
              </h2>
            )}
            <p className="text-grealish">{content.paragraph}</p>
            <div className="flex w-fit gap-5">
              {content.buttonText[0] && (
                <ButtonStandard
                  label={content.buttonText[0]}
                  applyStyle="blue"
                />
              )}
              {content.buttonText[1] && (
                <ButtonStandard
                  label={content.buttonText[1]}
                  applyStyle="grey"
                />
              )}
            </div>
          </div>
        </div>
        <div>
          <img
            src={content.image}
            alt="tablet device showing bookmark website"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
