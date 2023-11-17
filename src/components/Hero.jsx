import React from "react";
import HeroBackground from "../assets/img/HeroBackground.png";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${HeroBackground})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl text-white">
            <h1 className="mb-5 text-5xl font-bold">Selamat Datang</h1>
            <h2 className="mb-5 text-3xl">
              Di website Pengaduan Online Masyarakat
            </h2>
            <p className="mb-5">
              Sampaikan laporan anda langsung kepada instansi pemerintah
              berwenang.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
