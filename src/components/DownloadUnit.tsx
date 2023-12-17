import dots from "../assets/bg-dots.svg";
import ButtonStandard from "./buttons/ButtonStandard";

type content = {
  id: number;
  icon: string;
  altText: string;
  header: string;
  paragraph: string;
};

type Props = {
  content: content;
};

const DownloadUnit = ({ content }: Props) => {
  return (
    <div className="relative flex min-w-[15.625rem] flex-col items-center gap-14 rounded-xl p-6 shadow-md">
      <div className="flex flex-col items-center gap-1 whitespace-nowrap">
        <img src={content.icon} alt={content.altText} className="p-5" />
        <h3 className="text-lg font-medium tracking-wider text-blueDark ">
          {content.header}
        </h3>
        <p className="text-sm text-grealish">{content.paragraph}</p>
      </div>
      <div className="absolute bottom-[5.75rem]">
        <img src={dots} alt="background dots pattern" />
      </div>

      <div className="flex items-center justify-center">
        <ButtonStandard buttonType="button" label="Add & Install Extension" applyStyle="blue" />
      </div>
    </div>
  );
};

export default DownloadUnit;
