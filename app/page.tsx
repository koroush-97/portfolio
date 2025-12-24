import Navbar from "./_components/navbar/Navabar";
import Hero from "./_components/hero/Hero";
export default function Home() {
  return (
    <div>
      <section id="sec-1" className="container mx-auto">
        <Navbar />
      </section>
      <section id="sec-2">
        <Hero />
      </section>
    </div>
  );
}
