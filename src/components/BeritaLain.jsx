import ImageNews from "../assets/img/ImageNews.png";

const BeritaLain = () => {
  return (
    <div className="w-[1192px] h-fit bg-white shadow-xl rounded-lg p-6">
      <h2 className="font-bold text-xl text-left w-full text-black pb-1">
        Peralihan Musim di Wilayah Bojonegoro, Masyrakat Diminta Waspada Badai
        Petir
      </h2>
      <p className="pb-3">6 November 2023</p>
      <div className="flex flex-row gap-3">
        <img
          src={ImageNews}
          alt="news"
          className="rounded-lg w-[288px] h-[162px]"
        />
        <p className="text-black text-[14px] font-medium">
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
