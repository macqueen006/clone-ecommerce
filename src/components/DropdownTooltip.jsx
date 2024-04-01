const DropdownTooltip = ({ children, className }) => {
  return (
    <div className={`${className || ''} px-[15px] text-[14px]`}>
      <div className="wrapper">
        <div className="relative inline-block group">{children}</div>
      </div>
    </div>
  );
};

export default DropdownTooltip;
