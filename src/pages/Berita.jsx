import Navbar from "../components/NavBar";
import BeritaTerkini from "../components/BeritaTerkini";
import BeritaLain from "../components/BeritaLain";

const BeritaPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-slate-200 w-screen h-fit pt-[90px] pb-10 items-center gap-6">
        <div className="flex flex-col gap-5 px-4 max-w-[1280px] justify-center">
          <h1 className="text-3xl font-bold text-white bg-blue-700 w-fit px-6 py-3 rounded-full shadow-xl">
            Berita Terkini
          </h1>
          <div className="flex flex-row gap-5">
            <BeritaTerkini />
            <BeritaTerkini />
            <BeritaTerkini />
          </div>
        </div>
        <div className="flex flex-col gap-5 px-4 max-w-[1280px] justify-center">
          <h2 className="text-xl font-bold text-white bg-blue-700 w-fit px-6 py-3 rounded-full shadow-xl">
            Berita Lain
          </h2>
          <BeritaLain />
          <BeritaLain />
          <BeritaLain />
        </div>
      </div>
    </>
  );
};

export default BeritaPage;
