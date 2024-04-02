import { SiContentful } from "react-icons/si";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaPinterestSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = ({ className }) => {
  return (
    <footer
      className={`${
        className || ""
      } mx-auto px-s max-w-[1440px] w-auto min-w-[768px] mt-s text-[14px] `}
    >
      <div className="py-xs px-s text-slate-700 border-b border-slate-300 -mb-2xs flex items-center">
        <div className="flex-1 flex justify-end">
          <span className="mr-2xs">Free App:</span>
          <a
            href="#"
            className=" bg-slate-600 text-white mr-2xs inline-block rounded-[3px] px-2xs text-center text-[14px]"
          >
            App Store
          </a>
          <a
            href="#"
            className=" bg-green-600 text-white mr-2xs inline-block rounded-[3px] px-2xs text-center text-[14px]"
          >
            Google Play
          </a>
        </div>

        <div className="text-center flex-1">
          <span className="mr-3xs text-center">
            Trade Messenger <SiContentful className="inline-block" />
          </span>
        </div>

        <div className=" flex flex-1">
          <span className="mr-2xs">Follow Us:</span>
          <a href="#" className="inline-block mr-3xs hover:text-blue-700 transition-colors delay-150 ease-in-out">
            <FaSquareFacebook className="text-2xl" />
          </a>
          <a href="#" className="inline-block mr-3xs hover:text-slate-900 transition-colors delay-150 ease-in-out">
            <FaXTwitter className="text-2xl" />
          </a>
          <a href="#" className="inline-block mr-3xs hover:text-pink-500 transition-colors delay-150 ease-in-out">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="#" className="inline-block mr-3xs hover:text-red-500 transition-colors delay-150 ease-in-out">
            <IoLogoYoutube className="text-2xl" />
          </a>
          <a href="#" className="inline-block mr-3xs hover:text-red-700 transition-colors delay-150 ease-in-out">
            <FaPinterestSquare className="text-2xl" />
          </a>
          <a href="#" className="inline-block mr-3xs hover:text-blue-700 transition-colors delay-150 ease-in-out">
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
      <div className="pt-m pb-l text-center">
        <div className="text-center mb-s text-slate-600">
          <div className="mb-2xs text-center text-u-xs">
            <a href="#" className="whitespace-nowrap hover:text-red-500 transition-colors delay-100 ease-in-out">
              Hot Products
            </a>
            <span className="inline-block mx-2xs mt-[3px] border-l border-slate-500 h-[12px]"></span>
            <a href="#" className="whitespace-nowrap hover:text-red-500 transition-colors delay-100 ease-in-out">
              China Products
            </a>
            <span className="inline-block mx-2xs mt-[3px] border-l border-slate-500 h-[12px]"></span>
            <a href="#" className="whitespace-nowrap hover:text-red-500 transition-colors delay-100 ease-in-out">
              China Manufacturers/Suppliers
            </a>
            <span className="inline-block mx-2xs mt-[3px] border-l border-slate-500 h-[12px]"></span>
            <a href="#" className="whitespace-nowrap hover:text-red-500 transition-colors delay-100 ease-in-out">
              Wholesale Products
            </a>
            <span className="inline-block mx-2xs mt-[3px] border-l border-slate-500 h-[12px]"></span>
            <a href="#" className="whitespace-nowrap hover:text-red-500 transition-colors delay-100 ease-in-out">
              Wholesale Price
            </a>
            <span className="inline-block mx-2xs mt-[3px] border-l border-slate-500 h-[12px]"></span>
            <a href="#" className="whitespace-nowrap hover:text-red-500 transition-colors delay-100 ease-in-out">
              Continent Channel
            </a>
            <span className="inline-block mx-2xs mt-[3px] border-l border-slate-500 h-[12px]"></span>
            <a href="#" className="whitespace-nowrap hover:text-red-500 transition-colors delay-100 ease-in-out">
              Product Index
            </a>
          </div>
          {/* second row */}
          <div className="mb-3xs text-u-xs text-center">
            <span className="mr-2xs">Focus Technology:</span>
            <a href="#" className="whitespace-nowrap hover:text-red-500 transition-colors delay-100 ease-in-out">
              made-in-china.com
            </a>
            <span className="inline-block mx-2xs mt-[3px] border-l border-slate-500 h-[12px]"></span>
            <a href="#" className="whitespace-nowrap hover:text-red-500 transition-colors delay-100 ease-in-out">
              m.Made-in-China.com
            </a>
            <span className="inline-block mx-2xs mt-[3px] border-l border-slate-500 h-[12px]"></span>
            <a href="#" className="whitespace-nowrap hover:text-red-500 transition-colors delay-100 ease-in-out">
              cn.Made-in-China.com
            </a>
          </div>
        </div>
        {/* third row */}
        <div className="mb-s text-slate-600 text-u-xs">
          <div className="text-center">
            Copyright © 1998-2024 {" "}
            <a href="#" className="whitespace-nowrap hover:text-red-500 transition-colors delay-100 ease-in-out">
              Focus Technology Co., Ltd.
            </a>
            All Rights Reserved
            <span className="inline-block mx-2xs mt-[3px] border-l border-slate-500 h-[12px]"></span>

            <a href="#" className="whitespace-nowrap hover:text-red-500 transition-colors delay-100 ease-in-out">
              User Agreement
            </a>
            <span className="inline-block mx-2xs mt-[3px] border-l border-slate-500 h-[12px]"></span>
            <a href="#" className="whitespace-nowrap hover:text-red-500 transition-colors delay-100 ease-in-out">
              Declaration
            </a>
            <span className="inline-block mx-2xs mt-[3px] border-l border-slate-500 h-[12px]"></span>
            <a href="#" className="whitespace-nowrap hover:text-red-500 transition-colors delay-100 ease-in-out">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
