type Props = {
  label: string;
  applyStyle: string;
};

const ButtonStandard = ({ label, applyStyle }: Props) => {
  const blueButtonStyle = `border-blueBright bg-blueBright text-white hover:bg-white hover:text-blueBright`;
  const greyButtonStyle = `border-gray-100 bg-gray-100 text-gray-500 hover:bg-white hover:border-gray-500`;

  let buttonStyle = "";

  if (applyStyle === "blue") {
    buttonStyle = blueButtonStyle;
  }
  if (applyStyle === "grey") {
    buttonStyle = greyButtonStyle;
  }

  return (
    <button
      className={`whitespace-nowrap rounded-md border-2 px-6 py-3 text-sm font-medium tracking-wide shadow-lg transition duration-300 ${buttonStyle}`}
    >
      {label}
    </button>
  );
};

export default ButtonStandard;
