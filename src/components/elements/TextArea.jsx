const TextArea = (props) => {
  const { placeholder } = props;
  return (
    <textarea
      className="textarea rounded-md bg-base-200 border  h-[100px] border-slate-400  focus:outline-blue-300"
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;
