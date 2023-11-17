import React from "react";
import InpunText from "./elements/InpunText";
import TextArea from "./elements/TextArea";
import Button from "./elements/Button";

const Accordion = () => {
  return (
    <div className="flex flex-col bg-base-200 md:h-[100vh] h-fit w-screen items-center justify-center pt-20 dark:bg-slate-100">
      <div className="flex md:flex-row flex-col gap-20 text-black xl:w-[1280px] w-full px-6 py-3 md:items-start items-center">
        <div className="w-[80%]">
          <h2 className="text-2xl font-bold text-dark pb-5">Pertanyaan Umum</h2>
          <div className="flex flex-col gap-5 w-[100%]">
            <div className="collapse collapse-arrow bg-white">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Pertanyaan ?
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-white">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Pertanyaan ?
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-white">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Pertanyaan ?
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-[50%] w-[80%]">
          <h2 className="text-2xl font-bold text-dark items-start pb-5 text-shadow-lg">
            Masih Belum Menemukan Jawaban ?
          </h2>
          <div className="flex flex-col gap-6 dark:bg-transparent">
            <InpunText type="text" placeholder="Nama" />
            <InpunText type="text" placeholder="Email" />
            <InpunText type="text" placeholder="Subjek" />
            <TextArea placeholder="Isi Pertanyaan Anda disini" />
            <Button type="submit" className="w-full">
              Kirim
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
