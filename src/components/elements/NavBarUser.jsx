import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../features/authSlice";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b-2">
      <div className="max-w-screen-xl h-[80px] flex flex-wrap items-center justify-between mx-auto p-4 ">
        <Link to="/" className="flex items-center space-x-3 text-black">
          <span className="self-center text-lg font-bold whitespace-nowrap">
            Pengaduan <br /> Masyarakat
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 sm:gap-2 justify-center items-center">
          {isSuccess ? (
            <>
              <Link to="/riwayat-laporan">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 font-semibold rounded-full text-sm px-4 py-2 text-center w-28"
                >
                  Laporanku
                </button>
              </Link>
              <button
                type="button"
                className="text-blue-700 hover:bg-blue-700 hover:text-white ring-blue-700 font-semibold rounded-full text-sm px-4 py-2 text-center outline outline-2 outline-offset-0 outline-blue-700 w-28 hidden sm:block"
                onClick={onLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 font-semibold rounded-full text-sm px-4 py-2 text-center w-28"
                >
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button
                  type="button"
                  className="text-blue-700 hover:bg-blue-700 hover:text-white ring-blue-700 font-semibold rounded-full text-sm px-4 py-2 text-center outline outline-2 outline-offset-0 outline-blue-700 w-28 hidden sm:block"
                >
                  Register
                </button>
              </Link>
            </>
          )}

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-4 md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ml-6"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/berita"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ml-6"
              >
                Berita
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ml-6"
              >
                FAQ
              </Link>
            </li>
            <Link to="/register">
              <button
                type="button"
                className="text-blue-700 hover:bg-blue-700 hover:text-white ring-blue-700 font-semibold rounded-full text-sm px-4 py-2 text-center outline outline-2 outline-offset-0 outline-blue-700 w-28 block sm:hidden"
              >
                Register
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
