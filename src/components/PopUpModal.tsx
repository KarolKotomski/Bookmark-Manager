import SectionHead from "./SectionHead";
import { bannerContentList } from "../data/data";
import ButtonStandard from "./buttons/ButtonStandard";
import CloseIcon from "./icons/CloseIcon";

type Props = {
  closeRequest: () => void;
};

const PopUpModal = ({ closeRequest }: Props) => {
  const handleModalContentMapping = () => {
    return bannerContentList.map(
      ({ header, paragraph, id, buttonText, image, altText }) => {
        if (id === 2) {
          return (
            <div key={id} className="rounded-2xl bg-white">
              <div className="flex justify-end p-7">
                <div onClick={closeRequest} className="flex">
                  <CloseIcon fillColor="black" />
                </div>
              </div>
              <div
                key={id}
                className="grid grid-cols-1  p-7 lg:grid-cols-2 lg:p-10"
              >
                <div className="mx-auto lg:ml-auto">
                  <img src={image} alt={altText} />
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
        className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-blueDark opacity-95"
      ></div>
      <div className="container fixed left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform">
        {handleModalContentMapping()}
      </div>
    </>
  );
};

export default PopUpModal;
