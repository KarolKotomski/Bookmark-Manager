import featuresPicture1 from "../assets/illustration-features-tab-1.svg";
import featuresPicture2 from "../assets/illustration-features-tab-2.svg";
import featuresPicture3 from "../assets/illustration-features-tab-3.svg";

//Navbar data:

export const navElementsList = ["FEATURES", "PRICING", "CONTACT"];

//Main data:

export const textBlockElementsList = [
  {
    id: 1,
    isHero: true,
    header: "A Simple Bookmark Manager",
    paragraph:
      "A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.",
    isButton: true,
    buttonText: ["Get it on Chrome", "Get it on Firefox"],
  },
  {
    id: 2,
    isHero: false,
    header: "Features",
    paragraph:
      "Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.",
    isButton: false,
  },
];

export const featuresElementsList = [
  {
    id: 1,
    sliderHeader: "Simple Bookmarking",
    header: "Bookmark in one click",
    paragraph:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    isButton: true,
    buttonText: ["More Info"],
    image: { featuresPicture1 },
  },
  {
    id: 2,
    sliderHeader: "Speedy Searching",
    header: "Intelligent search",
    paragraph:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    isButton: true,
    buttonText: ["More Info"],
    image: { featuresPicture2 },
  },
  {
    id: 3,
    sliderHeader: "Easy Sharing",
    header: "Share your bookmarks",
    paragraph:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    isButton: true,
    buttonText: ["More Info"],
    image: { featuresPicture3 },
  },
];
