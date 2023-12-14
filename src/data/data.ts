import bannerHero from "../assets/illustration-hero.svg";
import bannerTab1 from "../assets/illustration-features-tab-1.svg";
import bannerTab2 from "../assets/illustration-features-tab-2.svg";
import bannerTab3 from "../assets/illustration-features-tab-3.svg";

import chromeLogo from "../assets/logo-chrome.svg";
import firefoxLogo from "../assets/logo-firefox.svg";
import operaLogo from "../assets/logo-opera.svg";

//HEADER AND FOOTER data:

export const navElementsList = ["FEATURES", "PRICING", "CONTACT"];

//MAIN DATA:

/** Banners */

export const bannerContentList = [
  {
    id: 1,
    isHero: true,
    header: "A Simple Bookmark Manager",
    paragraph:
      "A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.",
    buttonText: ["Get it on Chrome", "Get it on Firefox"],
    image: bannerHero,
    altText: "tablet device showing bookmark website",
  },
  {
    id: 2,
    isHero: false,
    header: "Bookmark in one click",
    paragraph:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    buttonText: ["More Info"],
    image: bannerTab1,
    altText: "opened application window",
  },
  {
    id: 3,
    isHero: false,
    header: "Intelligent search",
    paragraph:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    buttonText: ["More Info"],
    image: bannerTab2,
    altText: "opened application window with magnifying glass",
  },
  {
    id: 4,
    isHero: false,
    header: "Share your bookmarks",
    paragraph:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    buttonText: ["More Info"],
    image: bannerTab3,
    altText:
      "opened application window with cell phone device and two people interacting",
  },
];

/** Features */

export const featuresElementsList = [
  "Simple Bookmarking",
  "Speedy Searching",
  "Easy Sharing",
];

/** SectionHead */

export const sectionHeadContentList = [
  {
    header: "Features",
    paragraph:
      "Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.",
  },
  {
    header: "Download the extension",
    paragraph:
      "We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.",
  },
  {
    header: "Frequently Asked Questions",
    paragraph:
      "Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.",
  },
];

/** Download */

export const downloadContentList = [
  {
    id: 1,
    icon: chromeLogo,
    altText: "chrome browser logo",
    header: "Add to Chrome",
    paragraph: "Minimum version 62",
  },
  {
    id: 2,
    icon: firefoxLogo,
    altText: "firefox browser logo",
    header: "Add to Firefox",
    paragraph: "Minimum version 55",
  },
  {
    id: 3,
    icon: operaLogo,
    altText: "opera browser logo",
    header: "Add to Opera",
    paragraph: "Minimum version 46",
  },
];

/** FAQ */

export const faqContentList = [
  {
    id: 1,
    question: "What is Bookmark?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non lingula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non lingula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non lingula. Suspendisse imperdiet.",
  },
  {
    id: 2,
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non lingula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non lingula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non lingula. Suspendisse imperdiet.",
  },
  {
    id: 3,
    question: "Is there a mobile app?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non lingula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non lingula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non lingula. Suspendisse imperdiet.",
  },
  {
    id: 4,
    question: "What about other Chromium browsers?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non lingula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non lingula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non lingula. Suspendisse imperdiet.",
  },
];
