const Button = ({ name, classes }) => {
  return (
    <button
      className={`duration-500 px-[36px] h-[55px] text-white border-solid border-white border-[1px] rounded-full uppercase font-bold text-[22px] leading-[1] bg-transparent cursor-pointer transition-colors hover:bg-white hover:text-[#000] ${
        classes ? classes : ""
      }`}
    >
      {name}
    </button>
  );
};

export default Button;
