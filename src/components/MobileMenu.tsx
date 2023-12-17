import { navElementsList } from "../data/data";
import CloseIcon from "./icons/CloseIcon";
import FacebookIcon from "./icons/FacebookIcon";
import LogoBookmark from "./icons/LogoBookmark";
import TwitterIcon from "./icons/TwitterIcon";

type Props = {
  isMenuActive: boolean;
  handleCloseMenu: () => void;
};

const MobileMenu = ({ isMenuActive, handleCloseMenu }: Props) => {
  const handleNavElementsMapping = () => {
    return navElementsList.map((element, index) => {
      return (
        <li
          key={index}
          className="w-full cursor-pointer border-b border-slate-600 p-5 text-center tracking-[0.125em] text-white transition duration-300 hover:text-redBright"
        >
          {element}
        </li>
      );
    });
  };

  return (
    <div
      className={`fixed z-[99] flex h-full flex-col items-center justify-between overflow-hidden bg-blueDark py-9 opacity-95 transition-all duration-500 lg:py-12 ${
        isMenuActive ? "w-full" : "w-0"
      }`}
    >
      <div className="container flex w-full max-w-3xl flex-col gap-9">
        <div className="flex items-center justify-between transition-colors">
          <LogoBookmark fillColor="white/dark/white" />
          <div onClick={handleCloseMenu} className="flex justify-center">
            <CloseIcon fillColor="white" />
          </div>
        </div>
        <nav className="border-t border-slate-600">
          <ul className="flex flex-col items-center text-xl">
            {handleNavElementsMapping()}
            <li className="mt-6 w-full cursor-pointer rounded-md border-2 border-white p-2 text-center font-medium tracking-widest text-white transition duration-300 hover:border-redBright hover:text-redBright">
              LOGIN
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-10">
        <FacebookIcon />
        <TwitterIcon />
      </div>
    </div>
  );
};

export default MobileMenu;
