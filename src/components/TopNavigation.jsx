import { TfiMenuAlt } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import TopNavLink from "./TopNavLink";

const TopNavigation = () => {
  return (
    <div className="relative px-s -mx-s border-t border-slate-200 text-[14px]">
      <div className="max-w-[1440px] mx-auto justify-between flex items-center">
        <div className="flex-1 flex items-center">
          <span className="flex-grow-0 flex-shrink-0 flex-auto h-auto mr-0">
            <div className="-ml-2xs">
              <div className="relative">
                <div className="py-2xs pl-xs pr-s whitespace-nowrap group">
                  <a
                    className="transition-colors duration-150 ease-out whitespace-nowrap group-hover:text-red-500"
                    href="#"
                  >
                    <TfiMenuAlt className="inline-block align-middle text-[16px] mr-[3px] -mt-0.5 whitespace-nowrap group-hover:text-red-500" />
                    All Categories
                    <IoIosArrowDown className="inline-block align-middle text-[16px] ml-[3px] -mt-0.5 whitespace-nowrap transition-all duration-150 group-hover:text-red-500 " />
                  </a>
                </div>
                {/* content */}
                <div className="" style={{ display: "none" }}>
                  <div className="">{/* Category items */}</div>
                  <div className="">{/* Additional category items */}</div>
                </div>
                {/* end content */}
              </div>
            </div>
          </span>
          <span className="flex-shrink-0 flex-auto h-auto mr-[25px] -ml-[5px] mt-px text-slate-300">
            |
          </span>
          <span className="business-item custom-business flex-auto w-full min-w-0 last:-mr-px">
            <div className="flex">
              <div className="flex-[0_0_auto] flex ">
                <TopNavLink text="Secured trading service" />
                {/* first link */}
                <TopNavLink text="Video channel" />
                {/* second */}
                <TopNavLink text="Top-ranking Products" />
                {/* third */}
              </div>
            </div>
          </span>
        </div>
        {/* Left */}

        <div className="flex pl-2xl -mr-[3px] text-[14px]">
          <TopNavLink dropdown text="Supplier" />
          <TopNavLink dropdown text="Buyer" />
          <TopNavLink dropdown text="Help" />
          <TopNavLink dropdown text="Apps" />
          <TopNavLink dropdown text="English" />
        </div>
        {/* right */}
      </div>
    </div>
  );
};

export default TopNavigation;
