const Tooltip = ({ children, className }) => {
  return (
    <div className={`pt-[10px] absolute ${className || ''} z-40 right-0 top-full hidden`} >
      <span className="right-[34.1333px] top-[4px] border-t-0 border-b-white absolute border-6 border-transparent"></span>
      <div className="inline-block w-full p-xs rounded-[5px] shadow-lg bg-white text-[14px] ">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default Tooltip;
