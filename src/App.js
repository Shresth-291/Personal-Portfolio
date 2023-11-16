import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Testi from "./components/Testi";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight)
  console.log(ratio)

  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight)
    }
    window.addEventListener("resize", resizeRatio)
    return () => {
      window.removeEventListener("resize", resizeRatio)
    }
  }, [ratio]);

  console.log(ratio)
  

  return ratio < 2.1? (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home ratio={ratio} />
      <Work />
      <Timeline />
      <Services />
      <Testi />
      <Contact />
      <Footer />
      <Toaster />
    </>
  ) : (<em id="customMessage">Please change the ratio to View!</em>);
}

export default App;
