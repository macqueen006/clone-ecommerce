import logo from "../assets/logo/logo-china.png";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { BsCamera } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import DropdownTooltip from "./DropdownTooltip";
import NavHoverLink from "./NavHoverLink";
import Tooltip from "./Tooltip";
import { FaRegUser } from "react-icons/fa6";
import { BsEnvelope } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import TopNavigation from "./TopNavigation";

const Header = ({ className }) => {
  return (
    <>
      <header className={`${className} px-s pt-s w-full`}>
        <nav className="flex items-start max-w-[1440px] mx-auto space-x-s">
          <div className="shrink-0 mr-[50px]">
            <div className="flex items-center">
              <a
                href="home.html"
                className="inline-block w-[218px] h-[42px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${logo})` }}
              ></a>
            </div>
          </div>
          {/* middle nav */}
          <div className="flex-1 flex items-start min-w-0">
            <div className="grow min-w-0">
              <div className="mx-auto">
                <div className="mb-s border-2 bg-white border-red-500 rounded-3xl">
                  <form>
                    {/* layout-wrap */}
                    <div className="flex items-center justify-between h-[37px]">
                      {/* select */}
                      <div className="relative h-full border-r border-slate-300">
                        <div className="relative h-full">
                          <div className="relative pr-2xs pl-s pb-[2px] text--1 cursor-pointer h-full inline-flex items-center">
                            Products
                            <IoIosArrowDown className="ml-3xs font-thin transition-all duration-100 ease inline-block text-decoration-none" />
                          </div>
                          {/* search dropdown */}
                          <div className="rounded-lg hidden shadow-md bg-white text-gray-700 text-base leading-relaxed whitespace-normal outline-none transition-all duration-300 z-50 absolute top-full left-0 min-w-full w-[132px] ">
                            <dl className="pb-[5px] text-[14px]">
                              <dd className="px-2.5 py-[5px] hover:bg-slate-100">
                                Products
                              </dd>
                              <dd className="px-2.5 py-[5px] hover:bg-slate-100">
                                Suppliers
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      {/* input */}
                      <div className="flex-1 h-full text-[14px]">
                        <div className="relative h-full pb-0.5">
                          <input
                            className="pr-l pl-2xs text-slate-500 w-full placeholder:text-slate-400 h-full bg-transparent overflow-hidden text-ellipsis align-middle focus:ring-0 border-0"
                            placeholder="Enter a keyword to search products"
                          />
                          <BsCamera className="absolute right-[15px] top-[9px] cursor-pointer text-[20px] inline-block hover:text-red-500" />
                        </div>
                      </div>
                      {/* Button */}
                      <div className="bg-red-500 h-full shrink-0 rounded-r-3xl my-[-2px] mr-[-2px]">
                        <button className="inline-flex w-[70px] h-full border-0 items-center justify-center cursor-pointer ">
                          <FiSearch className="text-[20px] inline-block text-decoration-none text-white" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* second nav */}
            <div className="shrink-0 flex items-center mx-[-15px]">
              {/* link 1 */}
              <DropdownTooltip className="ml-[50px]">
                <NavHoverLink
                  buttonText="Post My RFQ"
                  className="group-hover:text-red-700 text-red-500"
                >
                  <TbTargetArrow className="relative text-[23px] inline-block no-underline group-hover:text-red-700 text-red-500" />
                </NavHoverLink>
                <Tooltip className="min-w-[385px]">
                  Tell us what you need and try the easy way to get quotes!
                </Tooltip>
              </DropdownTooltip>
              {/* link 2 */}
              <DropdownTooltip>
                <NavHoverLink
                  buttonText="Sign in/ Join"
                  className="group-hover:text-red-500"
                >
                  <FaRegUser className="relative text-[23px] inline-block no-underline group-hover:text-red-500" />
                </NavHoverLink>
                <Tooltip className="min-w-[385px]"></Tooltip>
              </DropdownTooltip>
              {/* link 3 */}
              <DropdownTooltip>
                <NavHoverLink
                  buttonText="Messages"
                  className="group-hover:text-red-500"
                >
                  <BsEnvelope className="relative text-[23px] inline-block no-underline group-hover:text-red-500" />
                </NavHoverLink>
                <Tooltip className="min-w-[385px]">
                  Tell us what you need and try the easy way to get quotes!
                </Tooltip>
              </DropdownTooltip>
              {/* link 4 */}
              <DropdownTooltip>
                <NavHoverLink
                  buttonText="Inquiry Basket"
                  className="group-hover:text-red-500"
                >
                  <BsCart2 className="relative text-[23px] inline-block no-underline group-hover:text-red-500" />
                </NavHoverLink>
              </DropdownTooltip>
            </div>
          </div>
        </nav>
        <TopNavigation />
      </header>
    </>
  );
};

export default Header;
