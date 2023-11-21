import React from "react";
import InpunText from "./elements/InpunText";
import TextArea from "./elements/TextArea";
import Button from "./elements/Button";
import Accordion from "./elements/Accordion";

const QuestionAnswer = () => {
  return (
    <div className="flex flex-col md:h-[100vh] h-fit w-screen items-center justify-center pt-20 bg-slate-100">
      <div className="flex md:flex-row flex-col md:gap-20 gap-10 text-black xl:w-[1280px] w-full px-6 py-3 md:items-start items-center">
        <div className="w-[80%]">
          <h2 className="lg:text-2xl text-xl font-bold text-dark pb-5">
            Pertanyaan Umum
          </h2>
          <div className="flex flex-col gap-5 w-[100%]">
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
          </div>
        </div>
        <div className="md:w-[50%] w-[80%]">
          <h2 className="lg:text-2xl text-xl font-bold text-black items-start pb-5">
            Masih Belum Menemukan Jawaban ?
          </h2>
          <div className="flex flex-col gap-6 ">
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

export default QuestionAnswer;
