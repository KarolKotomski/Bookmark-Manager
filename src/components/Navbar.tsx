import mainLogo from "../assets/logo-bookmark.svg";
import { navElementsList } from "../data/data";
import ButtonHamburger from "./ButtonHamburger";
import ButtonHeader from "./ButtonHeader";

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
      <div className="flex items-center">
        <img src={mainLogo} alt="main logo" className="cursor-pointer" />
      </div>
      <nav>
        <ul className="flex items-center gap-12">
          {handleMapping()}
          <ButtonHeader />
          <ButtonHamburger />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
