import React from "react";

const Accordion = () => {
  return (
    <div className="flex flex-col bg-base-200 h-[100vh] w-screen items-center justify-center">
      <div className="flex flex-row gap-6">
        <div>
          <h2 className="text-2xl font-bold text-dark items-start pb-5">
            Pertanyaan Umum
          </h2>
            <div className="flex flex-col gap-5 w-[750px]">
            <div className="collapse collapse-arrow bg-white ">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              Pertanyaan
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Pertanyaan
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Pertanyaan
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
            </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-dark items-start pb-5 text-shadow-lg">Masih Belum Menemukan Jawaban</h2>
          <div className="flex flex-col gap-6">
          <input type="text" placeholder="Nama" className="input w-full rounded-full bg-base-200 border border-black" />
          <input type="text" placeholder="Email" className="input w-full rounded-full bg-base-200 border border-black" />
          <input type="text" placeholder="Subjek" className="input w-full rounded-full bg-base-200 border border-black" />
          <textarea className="textarea rounded-md bg-base-200 border border-black h-[100px]" placeholder="Isi Pertanyaan di sini"></textarea>
          <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 font-semibold rounded-full text-sm px-4 py-2 text-center w-full py-3"
            >
              Kirim Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
