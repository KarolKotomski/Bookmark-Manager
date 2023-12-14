import bannerHero from "../assets/illustration-hero.svg";
import bannerTab1 from "../assets/illustration-features-tab-1.svg";
import bannerTab2 from "../assets/illustration-features-tab-2.svg";
import bannerTab3 from "../assets/illustration-features-tab-3.svg";

//Navbar&Footer data:

export const navElementsList = ["FEATURES", "PRICING", "CONTACT"];

//Main data:

export const bannerContentList = [
  {
    id: 1,
    isHero: true,
    header: "A Simple Bookmark Manager",
    paragraph:
      "A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.",
    buttonText: ["Get it on Chrome", "Get it on Firefox"],
    image: bannerHero,
  },
  {
    id: 2,
    isHero: false,
    header: "Bookmark in one click",
    paragraph:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    buttonText: ["More Info"],
    image: bannerTab1,
  },
  {
    id: 3,
    isHero: false,
    header: "Intelligent search",
    paragraph:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    buttonText: ["More Info"],
    image: bannerTab2,
  },
  {
    id: 4,
    isHero: false,
    header: "Share your bookmarks",
    paragraph:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    buttonText: ["More Info"],
    image: bannerTab3,
  },
];

export const featuresElementsList = [
  "Simple Bookmarking",
  "Speedy Searching",
  "Easy Sharing",
];

export const sectionHeadContentList = [
  {
    id: 1,
    header: "Features",
    paragraph:
      "Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.",
  },
  {
    id: 2,
    header: "Download the extension",
    paragraph:
      "We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.",
  },
  {
    id: 3,
    header: "Frequently Asked Questions",
    paragraph:
      "Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.",
  },
];
