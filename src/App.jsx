import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import clouds from "@/assets/clouds.jpg";

function App() {
  return (
    <>
     <div
      className="min-h-screen w-full bg-neutral-200 bg-center bg-cover bg-no-repeat bg-fixed py-6 sm:py-10 px-3 sm:px-8"
      style={{ backgroundImage: `url(${clouds})` }}
    >
      <div className="mx-auto max-w-6xl rounded-[28px] bg-[#fbfaf7] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)] overflow-hidden">
        
      <Navbar />
      <section id="header">
        <Header />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
          </div>
    </div>
    </>
  );
}

export default App;
