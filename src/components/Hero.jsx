import React from "react";
import QuestionImage from "../assets/img/QuestionImage.png";
import HeroBackground from "../assets/img/HeroBackground.png";

const Hero = () => {
  return (
    <div>
      <div className="hero items-center justify-center pt-[80px]">
        <div className="flex flex-col text-center text-white z-10 gap-4">
          <h1 className="text-5xl font-bold">Selamat Datang</h1>
          <h3 className="text-3xl">Di Website Pengaduan Online Masyarakat</h3>
          <p className="text-xl">
            Sampaikan laporan anda langsung kepada instansi pemerintah
            berwenang.
          </p>
        </div>

        <img
          className="h-auto max-w-full"
          src={HeroBackground}
          alt="Deskripsi Gambar"
        />
      </div>
      <div className="hero min-sm-screen bg-base-200 h-auto pb-6 pt-6 dark:bg-white text-black">
        <div className="hero-content md:flex-row flex-col lg:w-full">
          <div>
            <h1 className="text-5xl font-bold">
              Kenapa Menggunakan Website ini?
            </h1>
            <p className="py-6">
              Kami berkomitmen untuk menyediakan sarana yang efektif dan efisien
              bagi Anda untuk menyampaikan keluhan, memberikan saran, dan
              berinteraksi dengan pemerintah daerah. Dengan mengakses website
              ini, Anda dapat mengajukan pengaduan secara online, memantau
              status keluhan, dan berpartisipasi aktif dalam meningkatkan
              kualitas hidup di komunitas Anda. Keamanan dan kerahasiaan
              informasi Anda adalah prioritas kami, dan melalui platform ini,
              kami membuka jembatan komunikasi antara warga dan pemerintah untuk
              menciptakan lingkungan yang lebih transparan dan responsif. Mari
              bersama-sama membangun masyarakat yang lebih baik dengan
              memberikan suara Anda melalui pengaduan yang Anda layangkan di
              sini. Terima kasih atas partisipasi Anda dalam memajukan kualitas
              hidup bersama-sama!
            </p>
          </div>
          <img src={QuestionImage} className="max-w-sm rounded-ld" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
