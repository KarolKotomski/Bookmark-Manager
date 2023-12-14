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
      <div className="container flex items-center justify-between py-12 text-sm tracking-widest">
        <div className="flex items-center gap-10">
          <LogoIcon textFillColor="white" />
          <nav>
            <ul className="flex items-center gap-10 px-6">{handleMapping()}</ul>
          </nav>
        </div>
        <div className="flex items-center gap-10">
          <FacebookIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
