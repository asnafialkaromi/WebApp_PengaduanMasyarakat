const Button = (props) => {
  const { children, className, type = "button" } = props;
  return (
    <button
      type={type}
      className={`btn btn-block text-sm text-white font-bold rounded-full bg-blue-700 hover:bg-blue-800 py-3 border-none ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
