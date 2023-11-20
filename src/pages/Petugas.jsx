import React from "react";
import NavBarAdmin from "../components/elements/NavBarAdmin";
import SideBar from "../components/elements/SideBar";

const Petugas = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-base-200 items-center ">
        <NavBarAdmin>Petugas</NavBarAdmin>

        <div className="overflow-x-auto rounded-xl w-[1150px] mt-11">
          <table className="table ">
            {/* head */}
            <thead className="">
              <tr className="bg-blue-700 text-white ">
                <th>NO</th>
                <th>NAMA</th>
                <th>NO TELP</th>
                <th>LEVEL</th>
                <th>AKSI</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="bg-white">
                <th>1</th>
                <td>Indra Rahma Darmawan</td>
                <td>12561236163</td>
                <td>Admin</td>
                <td><button className="btn btn-ghost btn-xs text-red-600">Hapus</button></td>
              </tr>
              <tr className="bg-white">
                <th>2</th>
                <td>Indra Rahma Darmawan</td>
                <td>12561236163</td>
                <td>Admin</td>
                <td><button className="btn btn-ghost btn-xs text-red-600">Hapus</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center"></div>
      {/* Page content here */}

      <SideBar />
    </div>
  );
};

export default Petugas;
