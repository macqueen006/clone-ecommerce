import { TfiMenuAlt } from "react-icons/tfi";
import CategoryLink from "./CategoryLink";
import slider1 from "../assets/slider/slider2.jpg";
import expo from "../assets/small/smart-expo.png";
import star from "../assets/small/Star-Suppliers.webp";
import trading from "../assets/small/Secured-Trading-Service.webp";
import { HeroTabLinks } from "./HeroTabLinks";
import grinding from "../assets/small/grinding.webp";
import lathe from "../assets/small/lathe.webp";
import machine from "../assets/small/machine.webp";
import scanner from "../assets/small/scanner.webp";
import robot from "../assets/small/robot.webp";
import { HeroAsideLink } from "./HeroAsideLink";
import { TbTargetArrow } from "react-icons/tb";
import HeroSection from "./HeroSection";

const Hero = () => {
  return (
    <HeroSection>
      <div className="flex h-auto">
        {/* First */}
        <div className="flex-auto basis-1/4">
          <div className="relative pr-s">
            <a href="#">
              <span className="text-0">
                <TfiMenuAlt className="inline-block font-extralight mr-[5px] -mt-[3px]" />
                <strong>Categories</strong>
              </span>
            </a>
            <ul className="pt-[15px]">
              <CategoryLink
                text="Manufacturing & Processing Machinery"
                id="Manufacturing & Processing Machinery"
              />
              <CategoryLink
                text="Consumer Electronics"
                id="Consumer Electronics"
              />
              <CategoryLink
                text="Industrial Equipment & Components"
                id="Industrial Equipment & Components"
              />
              <CategoryLink
                text="Electrical Electronics"
                id="Electrical Electronics"
              />
              <CategoryLink
                text="Construction and Decoration"
                id="Construction and Decoration"
              />
              <CategoryLink
                text="Light Industry & Daily Use"
                id="Light Industry & Daily Use"
              />
              <CategoryLink
                text="Auto, Motorcycle Parts & Accessories"
                id="Auto, Motorcycle Parts & Accessories"
              />
              <CategoryLink
                text="Apparel & Accessories"
                id="Apparel & Accessories"
              />
              <CategoryLink text="Lights & Lighting" id="Lights & Lighting" />
              <CategoryLink
                text="Sporting Goods & Recreation"
                id="Sporting Goods & Recreation"
              />
              <CategoryLink text="Transportation" id="Transportation" />
              <CategoryLink text="Arts & Crafts" id="Arts & Crafts" />
              <CategoryLink text="Health & Medicine" id="Health & Medicine" />
              <CategoryLink
                text="Packaging and Printing"
                id="Packaging and Printing"
              />
              <CategoryLink text="Computer Products" id="Computer Products" />
              <CategoryLink
                hyperLink
                text="More Categories"
                id="More Categories"
              />
            </ul>
          </div>
        </div>
        {/* second */}
        <div className="flex-auto basis-3/4 flex flex-col min-h-full">
          <div className="relative overflow-hidden bg-white basis-3/4 h-full">
            <a
              href=""
              className="min-h-full min-w-full bg-cover bg-center inline-block align-top relative bg-no-repeat"
              style={{ backgroundImage: `url(${slider1})` }}
            ></a>
            {/* Slider */}
          </div>
          <div className="mt-2xs basis-1/4">
            <ul className="flex justify-between gap-3xs">
              <HeroTabLinks
                firstChild
                src={expo}
                headingText="smart expo"
                bodyText="Reliable China Suppliers, Recommended at World's Famous Trade Shows."
              />
              <HeroTabLinks src={trading} bodyText="Secured Trading Service" />
              <HeroTabLinks src={star} bodyText="Star Suppliers" />
            </ul>
            {/* spotlight wr[ap] */}
          </div>
        </div>
        {/* third */}
        <div className="flex-auto basis-1/4 relative">
          <div className="pl-s">
            <div className="mb-2xs">
              <h2 className="font-bold text-slate-900 text-u-sm">
                You May Like
              </h2>
            </div>
            <ul className="max-h-[410px] overflow-hidden">
              <HeroAsideLink
                image={grinding}
                id={grinding}
                mainTitle="Processing Machine"
                subTitle="79,000"
              />
              <HeroAsideLink
                image={robot}
                mainTitle="Robot Arm"
                subTitle="84,000"
              />
              <HeroAsideLink
                image={lathe}
                mainTitle="Packaging Machine"
                subTitle="91,000"
              />
              <HeroAsideLink
                image={scanner}
                mainTitle="Faster"
                subTitle="584,000"
              />
              <HeroAsideLink
                image={machine}
                mainTitle="Efficiency"
                subTitle="113,000"
              />
            </ul>
            <div className="mt-xs">
              <span className="text-slate-500 text-[14px]">No desirable products?</span>
              <a
                href="#"
                className="align-middle h-[36px] px-xs cursor-pointer text-red-500 border border-red-500 rounded-[3px] bg-white mt-3xs w-full text-[14px] flex items-center justify-center hover:text-white hover:bg-red-500 transition-colors delay-100 ease-linear"
              >
                <TbTargetArrow className="inline-block mr-3xs " />
                Post Your Request Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </HeroSection>
  );
};

export default Hero;
