import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Features from "./components/Features";
import Introduction from "./components/Introduction";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Introduction/>
      <Services/>
      <Features/>
      <Contactus/>
      <Aboutus/>
    </>
  );
}
