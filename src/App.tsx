import Features from "./components/Features";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroBanner />
        <Features />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
