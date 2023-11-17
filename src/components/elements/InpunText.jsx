import React from "react";

const InpunText = (props) => {
  const { type, placeholder } = props;
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className="input w-full rounded-full bg-base-200 dark:bg-transparent border border-slate-400 dark:border-slate-400 focus:outline-blue-300 text-black"
      />
    </>
  );
};

export default InpunText;
