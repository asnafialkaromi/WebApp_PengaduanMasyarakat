import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ImageLogin from "../assets/img/ImageLogin.png";
import InputText from "../components/elements/InputText";
import Button from "../components/elements/Button";
import { CreateUser, reset } from "../features/authSlice";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("user");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [msg, setMsg] = useState("");
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/login");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(
      CreateUser({
        name,
        email,
        password,
        noTelp,
        password,
        confPassword,
        role,
      })
    );
  };

  return (
    <>
      <div className="flex flex-row h-screen">
        <div className="h-full w-1/2 hidden lg:block">
          <img src={ImageLogin} alt="" className="h-full w-full object-fit" />
        </div>
        <div className="bg-gradient-to-b from-[#003F9A] to-[#2871CC] lg:w-1/2 h-full w-full flex flex-col items-center justify-center gap-6 py-10">
          <h1 className="text-4xl font-bold text-white text-center">
            Layanan Online <br /> Website Pengaduan Masyarakat
          </h1>
          <form
            onSubmit={Auth}
            className="lg:w-3/4 w-[80%] h-fit py-6 px-14 bg-white  rounded-[20px]"
          >
            <div className="flex flex-col items-center justify-center gap-6">
              <h2 className="text-3xl font-bold pb-3 text-black">Register</h2>
              {!isError || (
                <div role="alert" className="alert alert-warning rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  <span>{message}</span>
                </div>
              )}
              <InputText
                type="text"
                placeholder="Nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <InputText
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputText
                type="text"
                placeholder="No. Hp"
                value={noTelp}
                onChange={(e) => setNoTelp(e.target.value)}
              />
              <InputText
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputText
                type="password"
                placeholder="Confirm Password"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
              />
              <Button type="submit" className="w-full">
                Register
              </Button>
              <p className="text-sm text-slate-600">
                Sudah punya akun?{" "}
                <Link to="/login" className="text-blue-700 font-bold">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
