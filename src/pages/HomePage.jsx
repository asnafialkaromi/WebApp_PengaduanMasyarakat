import { useEffect } from "react";
import NavBarUser from "../components/elements/NavBarUser";
import Hero from "../components/section/Hero";
import ReasonDetails from "../components/section/ReasonDetails";
import FeatureDetails from "../components/section/FeatureDetails";
import Footer from "../components/elements/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  
  window.scrollTo(0, 0);
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
        <NavBarUser />
        <Hero />
        <ReasonDetails />
        <FeatureDetails />
        <Footer />
    </>
  );
};

export default HomePage;
