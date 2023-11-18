import React from "react";
import Navbar from "../components/NavBar";
import Button from "../components/elements/Button";
import LaporanCard from "../components/elements/LaporanCard";

const Laporan = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col dark:bg-slate-200 h-fit pt-[90px] pb-10 items-center gap-6">
        <div className="flex flex-row px-4 max-w-[1280px] w-full h-fit justify-between mt-5">
          <h1 className="text-4xl text-black font-bold ">
            Riwayat Laporan Anda
          </h1>
          <Button type="submit" className="w-fit">
            Tambah Laporan
          </Button>
        </div>
        <div className="xl:grid xl:grid-cols-2 flex flex-col gap-5 px-4 xl:w-[1280px] w-full h-fit items-center justify-center">
          <LaporanCard />
          <LaporanCard />
          <LaporanCard />
          <LaporanCard />
          <LaporanCard />
          <LaporanCard />
        </div>
      </div>
    </>
  );
};

export default Laporan;
