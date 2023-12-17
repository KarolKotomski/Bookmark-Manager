import SectionHead from "./SectionHead";
import { bannerContentList } from "../data/data";
import ButtonStandard from "./buttons/ButtonStandard";
import CloseIcon from "./icons/CloseIcon";
import BackgroundShape from "./BackgroundShape";

type Props = {
  closeRequest: () => void;
};

const PopUpModal = ({ closeRequest }: Props) => {
  const handleModalContentMapping = () => {
    return bannerContentList.map(
      ({ header, paragraph, id, buttonText, image, altText }) => {
        if (id === 2) {
          return (
            <div
              key={id}
              className="relative overflow-hidden rounded-2xl bg-white"
            >
              <div className="flex justify-end p-7">
                <div onClick={closeRequest} className="flex">
                  <CloseIcon fillColor="black" />
                </div>
              </div>
              <div
                key={id}
                className="relative grid grid-cols-1 gap-10 p-7 lg:mb-24 lg:grid-cols-2 lg:gap-0 lg:p-10"
              >
                <div className="relative mx-auto lg:ml-auto">
                  <img src={image} alt={altText} className="relative z-10" />
                  <BackgroundShape shape="pop-up" />
                </div>
                <div className="self-center text-center lg:p-10 lg:text-start">
                  <SectionHead header={header} paragraph={paragraph} />
                  <div className="pt-7">
                    <ButtonStandard
                      buttonType="button"
                      label={buttonText[0]}
                      applyStyle="blue"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        }
        return null;
      },
    );
  };

  return (
    <>
      <div
        onClick={closeRequest}
        className="fixed bottom-0 left-0 right-0 top-0 z-30 bg-blueDark opacity-95"
      ></div>
      <div className="container fixed left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 transform">
        {handleModalContentMapping()}
      </div>
    </>
  );
};

export default PopUpModal;
