import CheckIcon from "../../assets/icons/Check.svg";
import Button from "../../components/elements/Button";
import ImagePengaduan from "../../assets/img/ImagePengaduan.png";
const CardPengaduanAdmin = (props) => {
  const { badgecolor, badgetitle, btndisplay } = props;
  return (
    <div className="flex flex-row w-full h-fit bg-white border p-6 rounded-xl gap-8">
      <div className="bg-slate-200 rounded-lg w-[300px] h-[169px] flex-none ">
        <img
          src={ImagePengaduan}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-full flex flex-col items-end justify-between">
        <div className="w-full">
          <div className="flex flex-row w-full justify-between items-center">
            <div className="flex flex-row">
              <p className="text-xl font-bold">Nama Pelapor</p>
              <span
                className={`badge badge-neutral ${badgecolor} border-none text-white badge-sm ml-3`}
              >
                {badgetitle}
              </span>
            </div>
            <p className="text-sm text-slate-400">12 September 2023</p>
          </div>
          <p className="text-lg font-semibold">Alamat</p>
          <p className="text-sm font-regular">Isi laporan</p>
        </div>
        <Button className={`w-fit btn-sm items-center ${btndisplay}`}>
          Terima
          <img src={CheckIcon} alt="" srcset="" />
        </Button>
      </div>
    </div>
  );
};

export default CardPengaduanAdmin;
