import React from "react";
import NavBarUser from "../components/elements/NavBarUser";
import Button from "../components/elements/Button";
import CardLaporan from "../components/elements/CardLaporan";
import { Link } from "react-router-dom";

const Laporan = () => {
  return (
    <>
      <NavBarUser />
      <div className="flex flex-col bg-slate-200 min-h-screen h-fit pt-[90px] pb-10 items-center gap-6">
        <div className="flex flex-row px-4 max-w-[1280px] w-full h-fit justify-between mt-5">
          <h1 className="text-4xl text-black font-bold ">
            Riwayat Laporan Anda
          </h1>
          <Link to="/buat-laporan">
            <Button type="submit" className="btn-md w-fit text-xl">
              Buat Laporan
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-5 px-4 w-full max-w-7xl h-fit items-center justify-center">
          <CardLaporan />
          <CardLaporan />
          <CardLaporan />
        </div>
      </div>
    </>
  );
};

export default Laporan;
