import Section from "./Section";
import bkgPic from "../assets/bkgPic.webp";
import campaign from "../assets/campaignLink.webp";

const Hero = () => {
  return (
    <Section>
      {/* campaign background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-0">
          <img src={bkgPic} alt="campaign" />
      </div>
      {/* campaign overlay */}
      <div className="z-10 relative -mb-s mx-auto max-w-[1440px] min-w-[728px] px-s">
        <div className="block">
          <a href="#">
            <img src={campaign} alt="campaign" />
          </a>
        </div>
      </div>
          {/* Main content */}
          <div className="relative -mb-s mx-auto max-w-[1440px] min-w-[728px] px-s">
              ff
          </div>
          
    </Section>
  );
};

export default Hero;
