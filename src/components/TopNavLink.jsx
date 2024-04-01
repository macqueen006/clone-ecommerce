import { IoIosArrowDown } from "react-icons/io";

const TopNavLink = ({text, dropdown}) => {
  return dropdown ? (
    <span className="mr-m flex-[0_0_auto]">
      <div className="relative">
        <div className="relative inline-block">
          <span>
            {text}{" "}
            <IoIosArrowDown className="inline-block align-middle text-[16px] ml-[3px] -mt-0.5 whitespace-nowrap transition-all duration-150 group-hover:text-red-50" />
          </span>
        </div>
      </div>
    </span>
  ) : (
    <div className="flex-[0_0_auto] whitespace-nowrap py-2xs pr-m">
    <div className="relative inline-block">
      <span>
        <a
          href="#"
          className="transition-all duration-150 ease-out"
        >
          {text}
        </a>
      </span>
    </div>
    
  </div>
  );
};

export default TopNavLink;
