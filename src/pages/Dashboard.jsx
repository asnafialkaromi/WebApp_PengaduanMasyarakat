import { useState, useEffect } from "react";
import axios from "axios";
import NavBarAdmin from "../components/elements/NavBarAdmin";
import SideBar from "../components/elements/SideBar";
import DataShow from "../components/elements/DataShow";
import CardPengaduanAdmin from "../components/elements/CardPengaduanAdmin";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMe } from "../features/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

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
    if (user && user.role !== "admin") {
      navigate("/");
    }
  }, [isError, navigate]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center bg-slate-200">
        {/* Page content here */}
        <NavBarAdmin>Dashboard</NavBarAdmin>
        <div className="w-full h-full p-6 flex flex-col gap-6">
          <div className="grid xl:grid-rows-1 xl:grid-cols-4 sm:grid-rows-2 sm:grid-cols-2 xl:w-full sm:w-[600px] gap-4">
            <DataShow />
            <DataShow />
            <DataShow />
            <DataShow />
          </div>
          <div className="bg-white flex flex-col w-full h-fit p-6 rounded-xl gap-4">
            <h2 className="text-3xl font-bold">Pengaduan Terbaru</h2>
            <div className="flex flex-col w-full h-fit gap-4 place-items-center">
              {reports.map((report) => (
                <CardPengaduanAdmin
                  key={report.id}
                  image={report.url}
                  nama={report.name}
                  tanggal={formatDate(report.createdAt)}
                  alamat={report.alamat}
                  laporan={report.pengaduan}
                  badgetitle={report.status}
                  id={report.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <SideBar />
    </div>
  );
};

export default Dashboard;
