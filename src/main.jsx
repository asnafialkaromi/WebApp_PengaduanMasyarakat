import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/Login.jsx";
import RegisterPage from "./pages/Register.jsx";
import BeritaPage from "./pages/Berita.jsx";
import Faq from "./pages/Faq.jsx";
import Laporan from "./pages/Laporan.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Lapuser from "./pages/LaporanKu.jsx";
import Petugas from "./pages/Petugas.jsx";
import Pengaduan from "./pages/Pengaduan.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/berita",
    element: <BeritaPage />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/laporan",
    element: <Laporan />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/lapuser",
    element: <Lapuser />,
  },
  {
    path: "/petugas",
    element: <Petugas />,
  },
  {
    path: "/pengaduan",
    element: <Pengaduan />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
