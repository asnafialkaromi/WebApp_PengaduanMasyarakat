import React from "react";


const CardFeature = (props) => {
  const {Img, Title, desc} = props;
  return (
    <div>
      <div className="card md:w-fit sm:max-w-xl bg-slate-100 shadow-xl w-sm h-fit sm:flex-row px-10 py-4 justify-center items-center">
        <img className="h-fit w-fit" src={Img} alt="Shoes" />
        <div className="card-body sm:text-left text-center text-black">
          <h2 className="text-2xl font-bold">{Title}</h2>
          <p className="">
           {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardFeature;
