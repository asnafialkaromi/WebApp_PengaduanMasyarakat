const TextArea = (props) => {
  const { className, value, onChange, placeholder } = props;
  return (
    <textarea
      className={`textarea rounded-xl bg-slate-50 border w-full h-[100px] border-slate-400  focus:outline-blue-300 ${className}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;
