import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import ProblemSolving from "./components/ProblemSolving";
import Learning from "./components/Learning";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <ProblemSolving />
        <Learning />
        <Contact />
      </main>
    </>
  );
}

export default App;