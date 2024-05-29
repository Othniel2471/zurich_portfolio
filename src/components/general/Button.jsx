// eslint-disable-next-line react/prop-types
const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center drop-shadow-xl rounded-full bg-[#5B0202] px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-[#8B0000] active:bg-gray-800 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
