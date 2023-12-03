import { useState, useEffect } from "react";
import axios from "axios";
import NavBarUser from "../components/elements/NavBarUser";
import Button from "../components/elements/Button";
import CardLaporan from "../components/elements/CardLaporan";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import Footer from "../components/elements/Footer";

const Laporan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  const [reports, setReports] = useState([]);

  useEffect(() => {
    getReports();
  }, []);

  const getReports = async () => {
    try {
      const response = await axios.get("http://localhost:5000/report");
      setReports(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }
  }, [isError, navigate]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  return (
    <>
      <NavBarUser />
      <div className="flex flex-col bg-slate-200 min-h-screen h-fit pt-[90px] pb-10 items-center gap-6">
        <div className="flex flex-row px-4 max-w-[1280px] w-full h-fit justify-between mt-5">
          <h1 className="text-4xl text-black font-bold ">
            Riwayat Laporan Anda
          </h1>
          <Link to="/buat-laporan">
            <Button type="submit" className="btn-md w-fit text-xl">
              Buat Laporan
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-5 px-4 w-full max-w-7xl h-fit items-center justify-center">
          {reports.map((report) => (
            <CardLaporan
              key={report.id}
              image={report.url}
              tanggal={formatDate(report.createdAt)}
              alamat={report.alamat}
              nama={report.name}
              laporan={report.pengaduan}
              status={report.status}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Laporan;
