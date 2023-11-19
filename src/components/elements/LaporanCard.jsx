import ImageNews from "../../assets/img/ImageNews.png";

const LaporanCard = () => {
  return (
    <div className="card md:flex-row xl:w-fit bg-white shadow-xl w-fit h-fit flex-col md:p-4 p-5 md:justify-start md:items-center gap-4">
      <div className="w-[280px] h-[187px]">
        <img
          src={ImageNews}
          alt="Laporan"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="card-body md:max-w-[300px] max-w-[280px] md:w-fit w-full md:h-fit p-0 text-left text-black">
        <h2 className="card-title text-left w-full">12 September 2023</h2>
        <p className="text-left w-fit">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam libero
          deserunt, fuga odit est magni eum perspiciatis numquam cum facilis
        </p>
      </div>
    </div>
  );
};

export default LaporanCard;
