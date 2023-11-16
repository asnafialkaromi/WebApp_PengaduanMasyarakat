import React from "react";
import AdminControl from "../assets/img/admin-contol.png";

const CardAdmin = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl w-sm h-sm">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">User Control</h2>
        </div>
        <figure>
          <img className="h-32 w-46 pb-8 object-cover" src={AdminControl} alt="Shoes" />
        </figure>
      </div>
    </div>
  );
};

export default CardAdmin;
