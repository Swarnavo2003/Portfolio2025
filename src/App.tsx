import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="w-full h-screen overflow-auto scroll-auto transition-all ease-in-out">
      <Navbar />
      <HeroSection />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
