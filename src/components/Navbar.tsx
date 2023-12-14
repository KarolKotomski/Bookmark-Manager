import { navElementsList } from "../data/data";
import ButtonHeader from "./buttons/ButtonHeader";
import LogoIcon from "./icons/LogoBookmark";
import HamburgerIcon from "./icons/HamburgerIcon";

const Navbar = () => {
  const handleMapping = () => {
    return navElementsList.map((element, index) => {
      return (
        <li
          key={index}
          className="cursor-pointer text-blueDark transition duration-300 hover:text-redBright"
        >
          {element}
        </li>
      );
    });
  };
  return (
    <div className="container flex items-center justify-between py-12 text-sm tracking-widest">
      <LogoIcon textFillColor="standard" />
      <nav>
        <ul className="flex items-center gap-10">
          {handleMapping()}
          <ButtonHeader />
          <HamburgerIcon />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
