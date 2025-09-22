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
      <TracingBeam>
        <div className="overflow-x-hidden w-full">
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </TracingBeam>
    </>
  );
}
export default App;
