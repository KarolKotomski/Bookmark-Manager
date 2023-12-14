import icon from "../../assets/icon-hamburger.svg";

const HamburgerIcon = () => {
  return (
    <button className="p-2 lg:invisible">
      <img src={icon} alt="hamburger menu" />
    </button>
  );
};

export default HamburgerIcon;
