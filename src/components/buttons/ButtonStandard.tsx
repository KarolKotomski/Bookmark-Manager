type Props = {
  label: string;
  applyStyle: string;
  buttonType: "button" | "submit" | "reset";
};

const ButtonStandard = ({ label, applyStyle, buttonType }: Props) => {
  const blueButtonStyle = `border-blueBright bg-blueBright text-white hover:bg-white hover:text-blueBright shadow-lg`;
  const greyButtonStyle = `border-gray-100 bg-gray-100 text-gray-500 hover:bg-white hover:border-gray-500 shadow-lg`;
  const redButtonStyle = `border-redBright bg-redBright text-white hover:bg-white hover:border-redBright hover:text-redBright`;

  let buttonStyle = "";

  if (applyStyle === "blue") {
    buttonStyle = blueButtonStyle;
  }
  if (applyStyle === "grey") {
    buttonStyle = greyButtonStyle;
  }
  if (applyStyle === "red") {
    buttonStyle = redButtonStyle;
  }

  let currentType: "button" | "submit" | "reset" = "button";

  if (buttonType === "button") {
    currentType = "button";
  }
  if (buttonType === "submit") {
    currentType = "submit";
  }

  return (
    <button
      type={currentType}
      className={`whitespace-nowrap rounded-md border-2 px-3 py-3 text-sm font-medium tracking-wide transition duration-300 xs:px-5 ${buttonStyle}`}
    >
      {label}
    </button>
  );
};

export default ButtonStandard;
