import ButtonStandard from "./buttons/ButtonStandard";
import errorIcon from "../assets/icon-error.svg";
import { useState } from "react";

const Form = () => {
  const [isErrorActive, setIsErrorActive] = useState(false);
  const [inputValue, setInputValue] = useState("");

  //Form Submitting
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCheckEmail(inputValue);
  };

  //Input Change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  //Input email check
  const handleCheckEmail = (value: string) => {
    if (!value.includes("@")) {
      setIsErrorActive(true);
    } else {
      setIsErrorActive(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-5 xs:flex-row"
    >
      <div className="relative w-full">
        <input
          onChange={handleInputChange}
          value={inputValue}
          placeholder="Enter your email address"
          className={`relative z-20 h-12 w-full rounded-md border-2 px-5 text-sm text-blueDark placeholder-grealish placeholder-opacity-40 outline-blueDark ${
            isErrorActive ? "border-redBright" : "border-white"
          }`}
        />

        {isErrorActive && (
          <>
            <img
              src={errorIcon}
              alt="error sign"
              className="absolute right-4 top-6 z-30 -translate-y-1/2"
            />
            <div className="z-10 -translate-y-[0.3rem] rounded-b-md bg-redBright px-3 pb-1 pt-2 text-left text-xs italic xs:absolute xs:w-full">
              Whoops, make sure it's an email
            </div>
          </>
        )}
      </div>

      <ButtonStandard buttonType="submit" applyStyle="red" label="Contact Us" />
    </form>
  );
};

export default Form;
