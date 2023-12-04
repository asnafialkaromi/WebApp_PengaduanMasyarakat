import { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../components/elements/SideBar";
import NavBarAdmin from "../components/elements/NavBarAdmin";
import CardPengaduanAdmin from "../components/elements/CardPengaduanAdmin";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import AOS from "aos";
import "aos/dist/aos.css";

const Pengaduan = () => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  const [acceptedReports, setAcceptedReports] = useState([]);
  const [pendingReports, setPendingReports] = useState([]);

  useEffect(() => {
    getReports();
  }, []);

  const getReports = async () => {
    try {
      const response = await axios.get("http://localhost:5000/report");
      const allReports = response.data;

      // Separate reports based on status
      const acceptedReports = allReports.filter(
        (report) => report.status === "Diterima"
      );
      const pendingReports = allReports.filter(
        (report) => report.status === "Tertunda"
      );

      setAcceptedReports(acceptedReports);
      setPendingReports(pendingReports);
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

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-slate-200 items-center " > 
        {/* Page content here */}
        <NavBarAdmin>Pengaduan</NavBarAdmin>
        <div
          role="tablist"
          className="tabs tabs-bordered w-full h-fit items-start p-4"
          data-aos="fade-down" data-aos-duration="2000"
        >
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-2xl font-semibold"
            aria-label="Diterima"
            defaultChecked
          />
          <div role="tabpanel" className="tab-content p-4 w-full h-full">
            <div className="flex flex-row w-full flex-wrap gap-4 xl:justify-center justify-center">
              {acceptedReports.map((report) => (
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

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-2xl font-semibold"
            aria-label="Tertunda"
          />
          <div role="tabpanel" className="tab-content p-4 w-full h-full r">
            <div className="flex flex-row w-full flex-wrap gap-4 xl:justify-center justify-cente">
              {pendingReports.map((report) => (
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

export default Pengaduan;
