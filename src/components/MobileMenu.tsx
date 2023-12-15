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
      className={`fixed z-[99] flex h-full flex-col items-center justify-between overflow-hidden bg-blueDark py-9 opacity-95 transition-all duration-500 ${
        isMenuActive ? "w-full px-6" : "w-0"
      }`}
    >
      <div className="flex w-full flex-col gap-9">
        <div
          onClick={handleCloseMenu}
          className="flex items-center justify-between transition-colors"
        >
          <LogoBookmark style="white/dark/white" />
          <CloseIcon />
        </div>
        <nav className="border-t border-slate-600">
          <ul className="flex flex-col items-center text-xl">
            {handleNavElementsMapping()}
            <li className="w-full cursor-pointer rounded-md p-2 mt-6 text-center tracking-widest text-white transition duration-300 hover:text-redBright font-medium border-2 border-white">
              LOGIN
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex gap-10">
        <FacebookIcon />
        <TwitterIcon />
      </div>
    </div>
  );
};

export default MobileMenu;
