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
          className="hover:text-redBright cursor-pointer transition duration-300"
        >
          {element}
        </li>
      );
    });
  };
  return (
    <div className="font-me container flex items-center justify-between py-12 text-sm tracking-widest">
      <img src={mainLogo} alt="main logo" className="cursor-pointer" />
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
