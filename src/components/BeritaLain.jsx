import ImageNews from "../assets/img/ImageNews.png";

const BeritaLain = () => {
  return (
    <div className="md:w-full w-[300px] bg-white shadow-xl rounded-lg p-6">
      <h2 className="font-bold md:text-lg text-sm text-left text-black pb-1">
        Peralihan Musim di Wilayah Bojonegoro, Masyarakat Diminta Waspada Badai
        Petir
      </h2>
      <p className="pb-3 md:text-base text-xs">6 November 2023</p>
      <div className="flex flex-col md:flex-row gap-3 justify-center">
        <img
          src={ImageNews}
          alt="news"
          className="rounded-lg md:w-[288px] w-[250px] h-auto"
        />
        <p className="text-black md:text-base text-sm font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          autem molestias! Eveniet neque obcaecati voluptatem inventore cum
          molestiae expedita illo soluta accusantium quibusdam, autem
          repellendus corporis praesentium minus optio nihil tempore aperiam?
          Consectetur quaerat accusamus sit possimus reiciendis! Doloribus
          quidem quam explicabo quo voluptates aliquam saepe facere architecto
          laboriosam porro quibusdam iste inventore repellat tenetur quia
          debitis ad aliquid, corrupti deserunt culpa adipisci maxime
          cupiditate. Dolores tenetur harum beatae. Quas enim sequi minima optio
        </p>
      </div>
    </div>
  );
};

export default BeritaLain;
