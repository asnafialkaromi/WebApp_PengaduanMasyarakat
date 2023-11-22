import CardLatestNews from "../elements/CardLatestNews";
const LatestNews = () => {
  return (
    <div className="flex flex-col gap-5 px-4 xl:w-[1280px] w-fit justify-center">
      <h1 className="text-3xl font-bold text-white bg-blue-700 w-fit px-6 py-3 rounded-full shadow-xl">
        Berita Terkini
      </h1>
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        <CardLatestNews />
        <CardLatestNews className="hidden sm:block" />
        <CardLatestNews className="hidden xl:block" />
      </div>
    </div>
  );
};

export default LatestNews;
