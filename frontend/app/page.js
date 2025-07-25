import ModernHero from "./components/ModernHero";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Features from "./components/Features";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <ModernHero/>
      <Services/>
      <Features/>
      <Contactus/>
      <Aboutus/>
    </div>
  );
}
