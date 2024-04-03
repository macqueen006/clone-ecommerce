const Button = ({ buttonText }) => {
  return (
    <div className="h-[30px] px-s rounded-[3px] bg-red-500 border border-red-500 text-white cursor-pointer text-center inline-block align-middle text-[14px] leading-7">
      {buttonText}
    </div>
  );
};

export default Button;
