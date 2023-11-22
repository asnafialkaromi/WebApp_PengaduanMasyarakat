import Accordion from "../elements/Accordion";

const PertanyaanUmum = () => {
  return (
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
  );
};

export default PertanyaanUmum;
