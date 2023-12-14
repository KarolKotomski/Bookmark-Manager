import { navElementsList } from "../data/data";
import FacebookIcon from "./icons/FacebookIcon";
import TwitterIcon from "./icons/TwitterIcon";
import LogoIcon from "./icons/LogoBookmark";

const Footer = () => {
  const handleMapping = () => {
    return navElementsList.map((element, index) => {
      return (
        <li
          key={index}
          className="cursor-pointer text-white transition duration-300 hover:text-redBright"
        >
          {element}
        </li>
      );
    });
  };
  return (
    <div className="bg-blueDark">
      <div className="container flex flex-col items-center gap-10 py-8 text-sm tracking-widest md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-10 md:flex-row ">
          <LogoIcon textFillColor="white" />
          <nav>
            <ul className="flex flex-col gap-7 px-6 text-center md:flex-row">
              {handleMapping()}
            </ul>
          </nav>
        </div>
        <div className="flex items-center justify-center gap-10">
          <FacebookIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
