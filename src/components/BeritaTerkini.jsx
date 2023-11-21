import ImageNews from "../assets/img/ImageNews.png";

const BeritaTerkini = (props) => {
  const { className } = props;
  return (
    <div
      className={`card w-fit sm:max-w-[400px] bg-white shadow-xl ${className}`}
    >
      <figure className="flex flex-col gap-3 px-6 pt-6">
        <img src={ImageNews} alt="News" className="rounded-xl" />
        <p className="text-left w-full">6 November 2023</p>
      </figure>
      <div className="card-body items-center text-left text-black p-6">
        <h2 className="card-title text-left w-full font-bold md:text-xl text-lg">
          Peralihan Musim di Wilayah Bojonegoro, Masyrakat Diminta Waspada Badai
          Petir
        </h2>
      </div>
    </div>
  );
};

export default BeritaTerkini;
