import Features from "./components/Features";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { bannerContentList } from "./data/data";
import Download from "./components/Download";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <Banner content={bannerContentList[0]} />
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
