import ImageNews from "../assets/img/ImageNews.png";

const BeritaTerkini = () => {
  return (
    <div className="card w-96 bg-white shadow-xl">
      <figure className="flex flex-col gap-3 px-6 pt-6">
        <img src={ImageNews} alt="News" className="rounded-xl" />
        <p className="text-left w-full">6 November 2023</p>
      </figure>
      <div className="card-body items-center text-left text-black">
        <h2 className="card-title text-left w-full">
          Peralihan Musim di Wilayah Bojonegoro, Masyrakat Diminta Waspada Badai
          Petir
        </h2>
      </div>
    </div>
  );
};

export default BeritaTerkini;
