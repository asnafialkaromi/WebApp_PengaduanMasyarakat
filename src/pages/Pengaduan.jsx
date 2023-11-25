import React from "react";
import SideBar from "../components/elements/SideBar";
import NavBarAdmin from "../components/elements/NavBarAdmin";
import CardPengaduan from "../components/elements/CardPengaduan";
import CardPengaduanAdmin from "../components/elements/CardPengaduanAdmin";

const Pengaduan = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-slate-200 items-center ">
        {/* Page content here */}
        <NavBarAdmin>Pengaduan</NavBarAdmin>
        <div
          role="tablist"
          className="tabs tabs-bordered w-full h-fit items-start p-4"
        >
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-2xl font-semibold"
            aria-label="Diterima"
            checked
          />
          <div role="tabpanel" className="tab-content p-4 w-full h-full">
            <div className="flex flex-row w-full flex-wrap gap-4 xl:justify-center justify-center">
              <CardPengaduanAdmin
                badgetitle="Diterima"
                badgecolor="bg-green-500"
                btndisplay="hidden"
              />
              <CardPengaduanAdmin
                badgetitle="Diterima"
                badgecolor="bg-green-500"
                btndisplay="hidden"
              />
              <CardPengaduanAdmin
                badgetitle="Diterima"
                badgecolor="bg-green-500"
                btndisplay="hidden"
              />
              <CardPengaduanAdmin
                badgetitle="Diterima"
                badgecolor="bg-green-500"
                btndisplay="hidden"
              />
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
              <CardPengaduanAdmin
                badgetitle="Tertunda"
                badgecolor="bg-red-500"
              />
              <CardPengaduanAdmin
                badgetitle="Tertunda"
                badgecolor="bg-red-500"
              />
              <CardPengaduanAdmin
                badgetitle="Tertunda"
                badgecolor="bg-red-500"
              />
              <CardPengaduanAdmin
                badgetitle="Tertunda"
                badgecolor="bg-red-500"
              />
              <CardPengaduanAdmin
                badgetitle="Tertunda"
                badgecolor="bg-red-500"
              />
            </div>
          </div>
        </div>
      </div>
      <SideBar />
    </div>
  );
};

export default Pengaduan;
