import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Download from "./components/Download";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PopUpModal from "./components/PopUpModal";
import { useEffect, useState } from "react";

function App() {
  const [isModalActive, setIsModalActive] = useState(true);

  // const handleMouseEnter = (event: any) => {
  //   const mouseY = event.clientY;

  //   if (mouseY <= 5) {
  //     setIsModalActive(true);
  //   }
  // };

  const handleClose = () => {
    setIsModalActive(false);
  };

  // useEffect(() => {
  //   // Add event listener for mouse move near the window edge
  //   window.addEventListener("mousemove", handleMouseEnter);

  //   // Show modal after 30 sec
  //   const timer = setTimeout(() => {
  //     setIsModalActive(true);
  //   }, 30000);

  //   // Remove event listener and clear timeout
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseEnter);
  //     clearTimeout(timer);
  //   };
  // }, []);

  // useEffect(() => {
  //   // Hide and show vertical scrollbar
  //   document.body.style.overflow = isModalActive ? "hidden" : "auto";
  // }, [isModalActive]);

  return (
    <>
      {isModalActive && <PopUpModal closeRequest={handleClose} />}

      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <Features />
        </section>
        <section>
          <Download />
        </section>
        <section>
          <Faq />
        </section>
        <section>
          <Contact />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
