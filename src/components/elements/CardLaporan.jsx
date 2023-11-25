import ImageNews from "../../assets/img/ImageNews.png";

const CardLaporan = () => {
  return (
    <div className="flex bg-white shadow-xl w-full h-fit flex-row md:p-4 p-5 rounded-2xl gap-4">
      <div className="w-[300px] h-[169px] flex-none">
        <img
          src={ImageNews}
          alt="Laporan"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="w-full h-auto full flex flex-col items-end justify-between">
        <div className="flex flex-col gap-1 w-full">
          <p className="text-xl font-bold bg-blue-700 rounded-full text-white w-fit px-4">
            12 September 2023
          </p>
          <p className="text-xl font-bold">Nama Pelapor</p>
          <p className="text-sm font-regular">Isi laporan</p>
        </div>
        <p>Status</p>
      </div>
    </div>
  );
};

export default CardLaporan;
