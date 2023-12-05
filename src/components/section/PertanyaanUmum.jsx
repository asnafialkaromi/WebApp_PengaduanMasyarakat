import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Accordion from "../elements/Accordion";

const PertanyaanUmum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      once: true,
      
    });
  }, []);

  return (
    <div className="w-[80%]">
      <h2
        className="lg:text-2xl text-xl font-bold text-dark pb-5"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        Pertanyaan Umum
      </h2>
      <div
        className="flex flex-col gap-5 w-[100%]"
        data-aos="fade-right"
        data-aos-offset="500"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
      >
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
      </div>
    </div>
  );
};

export default PertanyaanUmum;
