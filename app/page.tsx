import Navbar from "./_components/navbar/Navabar";
import Hero from "./_components/hero/Hero";
import About from "./_components/about/About";
import Skills from "./_components/skills/Skills";
import Projects from "./_components/projects/Projects";
import Experience from "./_components/experience/Experience";
import Contact from "./_components/contact/Contact";
export default function Home() {
  return (
    <div>
      <section id="sec-1-navbar" className="container mx-auto">
        <Navbar />
      </section>
      <section id="sec-2-hero" className="container mx-auto">
        <Hero />
      </section>
      <section id="sec-3-About">
        <About />
      </section>
      <section id="sec-3-Skills">
        <Skills />
      </section>
      <section id="sec-4-Projects">
        <Projects />
      </section>
      <section id="sec-4-Experience">
        <Experience />
      </section>
      <section id="sec-5-Contact">
        <Contact />
      </section>
    </div>
  );
}
