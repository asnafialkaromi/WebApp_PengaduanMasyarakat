import { Link } from "react-router-dom";
import ImageLogin from "../assets/img/ImageLogin.png";
import InpunText from "../components/elements/InpunText";
import Button from "../components/elements/Button";

const LoginPage = () => {
  return (
    <>
      <div className="flex flex-row ">
        <div className="h-screen w-1/2 hidden lg:block">
          <img src={ImageLogin} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="bg-gradient-to-b from-[#003F9A] to-[#2871CC] lg:w-1/2 h-screen w-full flex flex-col items-center justify-center gap-8 py-16">
          <h1 className="text-4xl font-bold text-white text-center">
            Layanan Online <br /> Website Pengaduan Masyarakat
          </h1>
          <div className="lg:w-3/4 w-[80%] h-fit py-8 px-14 bg-white flex flex-col items-center justify-center gap-6 rounded-[20px]">
            <h2 className="text-3xl font-bold pb-3 text-black">Login</h2>
            <InpunText type="text" placeholder="Username" />
            <InpunText type="password" placeholder="Password" />
            <Button type="submit" className="w-full">
              Login
            </Button>
            <p className="text-sm text-slate-600">
              Belum punya akun?{" "}
              <Link to="/register" className="text-blue-700 font-bold">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
