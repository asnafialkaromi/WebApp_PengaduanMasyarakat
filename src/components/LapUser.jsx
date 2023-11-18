import React from "react";
import Button from "./elements/Button";

const Lapuser = () => {
  return (
    <div className="flex flex-col bg-base-200 md:h-[100vh] h-fit w-screen items-center justify-center dark:bg-slate-100">
      <div className="flex md:flex-row flex-col gap-20 text-black xl:w-[1024px] w-full px-6 py-3 md:items-start items-center">
        <h2 className="text-2xl font-bold text-dark pb-3">Buat Pengaduan</h2>
      </div>

      <div className="flex flex-col w-[986px] h-fit bg-white shadow-xl rounded-lg p-6 justify-center items-center">

        <div className="flex flex-col gap-3">
        <p className="pb-1 ml-3">Isi Laporan : </p>
          <input
            type="text"
            placeholder="Nama"
            className="input w-[895px] rounded-full bg-white dark:bg-transparent border border-slate-400 dark:border-slate-400 focus:outline-blue-300 text-black"
          />
          <input
            type="text"
            placeholder="Email"
            className="input w-[895px] rounded-full bg-white dark:bg-transparent border border-slate-400 dark:border-slate-400 focus:outline-blue-300 text-black"
          />
          <input
            type="text"
            placeholder="No Telp"
            className="input w-[895px] rounded-full bg-white dark:bg-transparent border border-slate-400 dark:border-slate-400 focus:outline-blue-300 text-black"
          />
          <textarea
            className="textarea w-[895px] h-[140px] rounded-2xl bg-white dark:bg-transparent border border-slate-400 dark:border-slate-400 focus:outline-blue-300 text-black"
            placeholder="Isi pengaduan disini"
          ></textarea>
          <input
            type="text"
            placeholder="Alamat"
            className="input w-[895px] rounded-full bg-white dark:bg-transparent border border-slate-400 dark:border-slate-400 focus:outline-blue-300 text-black"
          />
          <label htmlFor="fileInput" className="file-input-label">
            <input
              type="file"
              id="fileInput"
              className="file-input file-input-bordered file:bg-blue-700 w-[895px]"
            />
          </label>

          <Button type="submit" className="w-[150px]">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Lapuser;
