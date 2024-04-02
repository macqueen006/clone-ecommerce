import { IoIosArrowForward } from "react-icons/io";

const CategoryLink = ({ id, className, text, hyperLink }) => {
  return !hyperLink ? (
    <li
      key={id}
      className={`${
        className || ""
      } transition-all hover:bg-slate-200 group py-3xs hover:text-red duration-200 ease-out -mr-s -ml-2xs pr-s pl-2xs`}
    >
      <a href="" className="block text-[14px] transition-colors duration-150 whitespace-nowrap">
        <span className="text-slate-600 py-3xs group-hover:text-red-500">{text}</span>
      </a>
    </li>
  ) : (
    <li
      key={id}
      className={`${
        className || ""
      } transition-all duration-200 hover:bg-slate-200 group ease-out -mr-s -ml-2xs pr-s pl-2xs`}
    >
      <a href="" className="block text-[14px] transition-colors duration-150 py-3xs whitespace-nowrap">
        <span className="text-blue-600 group-hover:text-red-500 py-3xs">
          {text}
          <IoIosArrowForward className="inline-block" />
        </span>
      </a>
    </li>
  );
};

export default CategoryLink;
