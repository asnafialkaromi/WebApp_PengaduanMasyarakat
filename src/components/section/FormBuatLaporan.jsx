import React from "react";
import Button from "../elements/Button";
import InputText from "../elements/InputText";
import TextArea from "../elements/TextArea";

const FormBuatLaporan = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-200">
      <div className="flex flex-col gap-3 xl:max-w-[1000px] w-full h-fit p-4">
        <h2 className="text-4xl font-bold text-black text-left pb-3">
          Buat Pengaduan
        </h2>
        <div className="flex flex-col gap-3 bg-white w-full h-fit shadow-xl rounded-lg p-6">
          <p className="text-left w-full">Isi Laporan : </p>
          <InputText type="text" placeholder="Nama" />
          <InputText type="text" placeholder="Email" />
          <InputText type="text" placeholder="No. Telp" />
          <InputText type="text" placeholder="Alamat" />
          <TextArea
            placeholder="Isi Pengaduan Anda Disini"
            className="text-md"
          />
          <label htmlFor="fileInput" className="file-input-label w-full">
            <input
              type="file"
              id="fileInput"
              className="file-input file-input-bordered file:bg-blue-700 w-full rounded-full bg-slate-50"
            />
          </label>
          <Button type="submit" className="w-fit px-10">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormBuatLaporan;
