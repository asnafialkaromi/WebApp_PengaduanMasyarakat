import React from "react";
import Gambar1 from "../assets/img/ImageNews.png"

const CardDiterima = () => {
  return (
    <div role="tabpanel" className="tab-content flex flex-col mt-5">
      <div className="flex flex-col">
        <div className="card w-[356px] h-[377px] bg-base-100 shadow-xl">
          <div className="badge bg-green-400 text-white ml-11 mt-6 mb-3">
            Diterima
          </div>
          <figure className="flex flex-col ">
            <img
              className="w-[270px] h-[214] rounded-xl"
              src={Gambar1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Nama</h2>
            <p>Alamat</p>
            <p>Isi Laporan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDiterima;
