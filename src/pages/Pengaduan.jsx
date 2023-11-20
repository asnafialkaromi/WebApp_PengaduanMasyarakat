import React from "react";
import SideBar from "../components/elements/SideBar";
import NavBarAdmin from "../components/elements/NavBarAdmin";
import CardTertunda from "../components/CardTertunda";
import CardDiterima from "../components/CardDiterima";

const Pengaduan = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-base-200 items-center ">
        <NavBarAdmin>Pengaduan</NavBarAdmin>

        <div className="flex flex-row bg-base-200 mt-6 ml-11">
          <div role="tablist" className="tabs tabs-bordered">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab "
              aria-label="Diterima"
            />
            <div role="tabpanel" className="tab-content p-10">
              <div
                role="tabpanel"
                className="tab-content flex flex-row mt-5 gap-5"
              >
                <CardDiterima />
                <CardDiterima />
                <CardDiterima />
              </div>
              <div
                role="tabpanel"
                className="tab-content flex flex-row mt-5 gap-5"
              >
                <CardDiterima />
                <CardDiterima />
                <CardDiterima />
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Tertunda"
              checked
            />

            <div role="tabpanel" className="tab-content p-10">
              <div
                role="tabpanel"
                className="tab-content flex flex-row mt-5 gap-5"
              >
                <CardTertunda />
                <CardTertunda />
                <CardTertunda />
              </div>
              <div
                role="tabpanel"
                className="tab-content flex flex-row mt-5 gap-5"
              >
                <CardTertunda />
                <CardTertunda />
                <CardTertunda />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center"></div>
      {/* Page content here */}

      <SideBar />
    </div>
  );
};

export default Pengaduan;
