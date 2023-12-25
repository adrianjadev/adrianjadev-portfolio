import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Techstacks from "./components/techstacks/Techstacks";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";

// import Test from "./Test";

const App = () => {
  return (
    <div>
      {/* <Cursor /> */}
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Stack"><Techstacks /></section>
      <section id="Services"><Parallax type="services" /></section>
      <section><Services /></section>
      <section id="Portfolio"><Parallax type="portfolio" /></section><Portfolio />
      <section id="Contact"><Contact /></section>
    </div>
  );
}

export default App;