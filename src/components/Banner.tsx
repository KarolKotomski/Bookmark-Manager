import BackgroundShape from "./BackgroundShape";
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
      <div
        className={`flex w-full flex-col-reverse gap-16 lg:gap-0 ${
          content.isHero ? "lg:flex-row" : "lg:flex-row-reverse sm:gap-24"
        }`}
      >
        <div
          className={`flex flex-col justify-center gap-7 p-5 text-center lg:w-1/2 lg:p-0 lg:text-left ${
            !content.isHero && "lg:items-end lg:justify-start"
          }`}
        >
          <div
            className={`${
              !content.isHero ? "lg:max-w-[80%] lg:pt-14" : "xl:max-w-[80%]"
            } flex flex-col`}
          >
            <SectionHead
              header={content.header}
              paragraph={content.paragraph}
              isHero={content.isHero}
            />
            <div className={`w-full justify-center gap-3 lg:w-fit lg:justify-start lg:gap-5 ${content.isHero ? "flex" : "hidden lg:flex"}`}>
              {content.buttonText[0] && (
                <ButtonStandard
                  buttonType="button"
                  label={content.buttonText[0]}
                  applyStyle="blue"
                />
              )}
              {content.buttonText[1] && (
                <ButtonStandard
                  buttonType="button"
                  label={content.buttonText[1]}
                  applyStyle="grey"
                />
              )}
            </div>
          </div>
        </div>
        <div className="relative flex w-full justify-center lg:max-w-[50%] lg:justify-end">
          <img
            src={content.image}
            alt={content.altText}
            className={`${content.id === 3 && "xs:pr-[2.375rem]"} ${
              content.id === 1 && "w-full"
            }`}
          />
          <BackgroundShape shape={content.id} />
        </div>
      </div>
    </>
  );
};

export default Banner;
