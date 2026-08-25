import { Navbar } from "./components/zyra/Navbar";
import { Hero } from "./components/zyra/Hero";
import { About } from "./components/zyra/About";
import { Purpose } from "./components/zyra/Purpose";
import { Mission } from "./components/zyra/Mission";
import { Products } from "./components/zyra/Products";
import { Ecosystem } from "./components/zyra/Ecosystem";
import { Timeline } from "./components/zyra/Timeline";
import { Vision } from "./components/zyra/Vision";
import { Founders } from "./components/zyra/Founders";
import { Values } from "./components/zyra/Values";
import { Contact } from "./components/zyra/Contact";
import { Footer } from "./components/zyra/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Purpose />
        <Mission />
        <Products />
        <Ecosystem />
        <Timeline />
        <Vision />
        <Founders />
        <Values />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
