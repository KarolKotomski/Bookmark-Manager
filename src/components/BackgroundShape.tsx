type Props = {
  shape: number | "pop-up";
};

const BackgroundShape = ({ shape }: Props) => {
  let applyStyle;

  if (shape === 1) {
    applyStyle =
      "right-[10%] top-[17%] h-[100%] rounded-r-full sm:right-[10%] md:right-[10%] lg:right-[10%] xl:right-[10%] w-screen -z-10";
  }
  if (shape === 2) {
    applyStyle =
      "right-[18%] top-[17%] h-[95%] rounded-r-full sm:right-[22%] md:right-[27%] lg:right-[15%] xl:right-[12%] w-screen -z-10";
  }
  if (shape === 3) {
    applyStyle =
      "right-[18%] top-[17%] h-[95%] rounded-r-full sm:right-[22%] md:right-[27%] lg:right-[15%] xl:right-[12%] w-screen -z-10";
  }
  if (shape === 4) {
    applyStyle =
      "left-[16%] top-[23%] h-[80%] rounded-l-full sm:left-[16%] md:left-[20%] lg:left-[16%] xl:left-[16%] w-screen -z-10";
  }
  if (shape === "pop-up") {
    applyStyle =
      "right-[20%] top-[30%] h-[80%] rounded-r-full   sm:right-[20%] md:right-[20%] lg:right-[20%] xl:right-[20%] w-screen";
  }

  return <div className={`absolute bg-blueBright ${applyStyle}`}></div>;
};

export default BackgroundShape;
