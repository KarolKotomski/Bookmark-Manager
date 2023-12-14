import hamburgerIcon from "../assets/icon-hamburger.svg";

const ButtonHamburger = () => {
  return (
    <button className="p-2 lg:invisible">
      <img src={hamburgerIcon} alt="hamburger menu" />
    </button>
  );
};

export default ButtonHamburger;
