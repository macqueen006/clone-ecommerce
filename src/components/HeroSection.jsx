import bkgPic from "../assets/bkgPic.webp";
import campaign from "../assets/campaignLink.webp";

const HeroSection = ({id, className, customStyle, children}) => {
  return (
    <main className="relative" id={id}>
    <div className="absolute left-0 top-0 w-full overflow-hidden z-0">
      <img src={bkgPic} alt="campaign" />
    </div>
    <div className="-mb-s relative z-10 px-s mx-auto max-w-[1440px] min-w-[728px]">
      <a href="#">
        <img src={campaign} alt="campaign" />
      </a>
    </div>
    <div
      className={`${
        className || ""
      } relative z-10 px-s mx-auto max-w-[1440px] min-w-[728px]`}
    >
      <div
        className={`bg-white ${
          customStyle || "py-s mt-s px-m"
        }  border border-slate-300`}
      >
        {children}
      </div>
    </div>
  </main>
  )
}

export default HeroSection
