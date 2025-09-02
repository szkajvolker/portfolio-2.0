import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { TracingBeam } from "./components/ui/TracingBeam";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem]">
        <TracingBeam className="w-full">
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </TracingBeam>
      </div>
    </>
  );
}
export default App;
