import { useEffect, useState } from "react";
import { navElementsList } from "../data/data";
import ButtonHeader from "./buttons/ButtonHeader";
import LogoIcon from "./icons/LogoBookmark";
import HamburgerIcon from "./icons/HamburgerIcon";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleClick = () => {
    setIsMenuActive(!isMenuActive);
  };

  useEffect(() => {
    if (isMenuActive === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuActive]);

  const handleNavElementsMapping = () => {
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
    <>
      <MobileMenu isMenuActive={isMenuActive} handleCloseMenu={handleClick} />

      <div className="container flex items-center justify-between py-9 lg:py-12 text-sm tracking-widest">
        <LogoIcon fillColor="blue/white/dark" />
        <nav className="flex items-center gap-10">
          <ul className="hidden items-center gap-10 lg:flex">
            {handleNavElementsMapping()}
            <div className="hidden md:block">
              <ButtonHeader />
            </div>
          </ul>
          <div onClick={handleClick} className="lg:hidden">
            <HamburgerIcon />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
