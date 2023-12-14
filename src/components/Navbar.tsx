import { navElementsList } from "../data/data";
import ButtonHamburger from "./ButtonHamburger";
import ButtonHeader from "./ButtonHeader";
import LogoIcon from "./icons/LogoBookmark";

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
          <ButtonHamburger />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
