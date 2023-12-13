import hamburgerIcon from "../assets/icon-hamburger.svg";

const ButtonHamburger = () => {
  return (
    <button className="lg:invisible p-2">
      <img src={hamburgerIcon} alt="hamburger menu" />
    </button>
  );
};

export default ButtonHamburger;
