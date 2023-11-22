import CardOtherNews from "../elements/CardOtherNews";
const OtherNews = () => {
  return (
    <div className="flex flex-col gap-5 px-4 max-w-[1280px] justify-center">
      <h2 className="text-xl font-bold text-white bg-blue-700 w-fit px-6 py-3 rounded-full shadow-xl">
        Berita Lain
      </h2>
      <div className="grid md:grid-cols-1 sm:grid-cols-2 sm:w-fit sm:h-fit gap-5">
        <CardOtherNews />
        <CardOtherNews />
        <CardOtherNews />
        <CardOtherNews />
        <CardOtherNews />
      </div>
    </div>
  );
};

export default OtherNews;
