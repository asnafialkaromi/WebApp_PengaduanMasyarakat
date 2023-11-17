import { Link } from "react-router-dom";
import ImageLogin from "../assets/img/ImageLogin.png";

const RegisterPage = () => {
  return (
    <>
      <div className="flex flex-row ">
        <div className="h-screen w-1/2 hidden lg:block">
          <img src={ImageLogin} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="bg-gradient-to-b from-[#003F9A] to-[#2871CC] lg:w-1/2 h-screen w-full flex flex-col items-center justify-center gap-8 py-14">
          <h1 className="text-4xl font-bold text-white text-center">
            Layanan Online <br /> Website Pengaduan Masyarakat
          </h1>
          <div className="lg:w-3/4 w-[80%] h-fit py-4 bg-white flex flex-col items-center justify-center gap-6 rounded-[20px]">
            <h2 className="text-3xl font-bold pb-3 text-black">Register</h2>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] block w-3/4 p-4 focus:outline-blue-700"
              placeholder="Nama"
            />
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] block w-3/4 p-4 focus:outline-blue-700"
              placeholder="Username"
            />
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] block w-3/4 p-4 focus:outline-blue-700"
              placeholder="No. Hp"
            />
            <input
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] block w-3/4 p-4 focus:outline-blue-700"
              placeholder="Password"
            />
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none rounded-[20px] text-lg font-bold p-3 text-center me-2 mb-2 w-3/4"
            >
              Daftar
            </button>
            <p className="text-sm text-slate-600">
              Sudah punya akun?{" "}
              <Link to="/login" className="text-blue-700 font-bold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
