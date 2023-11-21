import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import CardAdmin from "../components/CardAdmin";
import QuestionImage from "../assets/img/QuestionImage.png";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <div className=" flex bg-white min-h-fit py-32 text-black items-center justify-center">
        <div className="flex max-w-7xl lg:gap-32 gap-10 lg:flex-row flex-col justify-center items-center lg:w-full xl:p-0 p-5">
          <div>
            <h1 className="xl:text-5xl md:text-4xl text-2xl font-bold">
              Kenapa Menggunakan Website ini?
            </h1>
            <p className="py-6 xl:text-xl md:text-lg text-base">
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
          <img
            src={QuestionImage}
            className="sm:max-w-sm sm:max-h-96 max-w-xs max-h-80 rounded-ld"
          />
        </div>
      </div>
      <div className="flex w-[100%] min-h-screen bg-white items-center justify-center">
        <div className="flex flex-col gap-16 items-center max-w-7xl  text-center px-4">
          <h1 className="sm:text-3xl text-xl font-bold text-white bg-blue-700 w-fit px-6 py-3 rounded-full">
            Jenis - Jenis Pelayanan
          </h1>
          <div className="flex justify-center items-center">
            <div className="grid lg:grid-rows-2 lg:grid-flow-col gap-10 align-items-center w-full">
              <CardAdmin />
              <CardAdmin />
              <CardAdmin />
              <CardAdmin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
