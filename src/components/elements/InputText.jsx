import React from "react";

const InputText = (props) => {
  const { type, placeholder } = props;
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="input w-full rounded-full bg-slate-50 border border-slate-400  focus:outline-blue-300 text-black"
      />
    </>
  );
};

export default InputText;
