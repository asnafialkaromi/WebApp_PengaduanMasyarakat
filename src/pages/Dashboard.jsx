import NavBarAdmin from "../components/elements/NavBarAdmin";
import SideBar from "../components/elements/SideBar";
import DataShow from "../components/elements/DataShow";
import LaporanCard from "../components/elements/LaporanCard";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <NavBarAdmin>Dashboard</NavBarAdmin>
        <div className="grid xl:grid-rows-1 xl:grid-cols-4 sm:grid-rows-2 sm:grid-cols-2 xl:w-full sm:w-[600px] gap-4 p-6">
          <DataShow />
          <DataShow />
          <DataShow />
          <DataShow />
        </div>
        <h2 className="text-3xl font-bold">Laporan Pengaduan Terbaru</h2>
        <div className="grid grid-cols-2 w-full h-fit gap-4 p-6">
          <LaporanCard />
          <LaporanCard />
          <LaporanCard />
          <LaporanCard />
          <LaporanCard />
          <LaporanCard />
          <LaporanCard />
          <LaporanCard />
        </div>
      </div>
      <SideBar />
    </div>
  );
};

export default Dashboard;
