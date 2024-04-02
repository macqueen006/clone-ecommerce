import { FaArrowRightLong } from "react-icons/fa6";

export const HeroTabLinks = ({ firstChild, src, bodyText, headingText }) => {
  return (
    <li
      className={`h-[123px] ${
        firstChild && "basis-2/4"
      } basis-1/4 group hover:transition ease-in-out delay-100`}
    >
      <div className="bg-slate-200 h-full relative overflow-hidden">
        <img
          src={src}
          className={`absolute bottom-0 right-0 translate-y-0 ${
            firstChild && "group-hover:translate-y-full"
          }`}
          height={80}
          alt="expo"
        />
        {firstChild && (
          <span className="absolute top-[20px] left-[20px] h-full uppercase z-2 group-hover:-translate-y-full">
            {headingText}
          </span>
        )}
        <a href="#" className="absolute top-0 left-0 w-full h-full z-40">
          <div className={`py-xs px-s text-[14px] ${firstChild && 'hidden group-hover:block'} hover:transition-all ease-in-out delay-150 z-10`}>
            <div className="mb-[5px]"></div>
            <div> {bodyText}</div>
          </div>
          <div className="hidden group-hover:block absolute bottom-[10px] left-[20px]">
            <FaArrowRightLong />
          </div>
        </a>
      </div>
    </li>
  );
};
