import IconSidebar from "../assets/img/user-control.png";
import Button from "../components/elements/Button";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-start justify-center h-screen bg-white">
        {/* Page content here */}
        <div className="w-full h-[80px] p-2 flex flex-row items-center justify-between text-black">
          <label
            htmlFor="my-drawer-2"
            className="btn drawer-button p-2 min-h-full bg-transparent border-none lg:hidden"
          >
            <svg
              className="w-7 h-fit p-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </label>
          <div className="flex flex-row w-full p-2 items-center justify-between">
            <h1 className="text-4xl font-bold">Dasboard</h1>
            <p>Username</p>
          </div>
        </div>
        <div className="w-full h-full bg-slate-100 p-6">Test</div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex flex-col gap-2 p-4 w-80 min-h-full bg-blue-700 text-white justify-between">
          {/* Sidebar content here */}
          <div className="flex flex-col gap-6">
            <div className="w-full h-fit flex flex-row items-center justify-between">
              <h2 className="w-fit text-2xl font-extrabold">
                Pengaduan <br /> Masyarakat
              </h2>
              <label
                htmlFor="my-drawer-2"
                className="btn drawer-button w-fit h-fit bg-transparent border-none lg:hidden"
              >
                <svg
                  className="w-7 h-fit p-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </label>
            </div>
            <div className="w-full h-full flex flex-col gap-4">
              <p className="text-lg font-semibold">Fitur Admin</p>
              <div className="flex flex-col gap-2">
                <a href="" className="flex flex-row items-center gap-4">
                  <img src={IconSidebar} alt="icon" className="w-8 h-8" />
                  Dashboard
                </a>
                <a href="" className="flex flex-row items-center gap-4">
                  <img src={IconSidebar} alt="icon" className="w-8 h-8" />
                  Pengaduan
                </a>
                <a href="" className="flex flex-row items-center gap-4">
                  <img src={IconSidebar} alt="icon" className="w-8 h-8" />
                  Petugas
                </a>
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full h-fit focus:bg-blue-700 justify-start"
          >
            <img src={IconSidebar} alt="icon" className="w-8 h-8" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
