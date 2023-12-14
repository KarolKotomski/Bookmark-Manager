import mainLogo from "../assets/logo-bookmark.svg";
import { navElementsList } from "../data/data";

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
        <div className="flex items-center">
          <img
            src={mainLogo}
            alt="main logo"
            className="cursor-pointer"
          />
        </div>
        <nav>
          <ul className="flex items-center gap-10 px-6">{handleMapping()}</ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
