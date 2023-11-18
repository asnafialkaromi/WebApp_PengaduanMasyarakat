import React from "react";
import AdminControl from "../assets/img/admin-control.png";

const CardAdmin = () => {
  return (
    <div>
      <div className="card w-fit bg-slate-100 shadow-xl w-sm h-fit flex-row px-10 py-4 justify-center items-center">
        <img className="h-fit w-fit" src={AdminControl} alt="Shoes" />
        <div className="card-body text-left text-black">
          <h2 className="text-2xl font-bold">User Control</h2>
          <p className="">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardAdmin;
