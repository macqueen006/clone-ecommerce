import Hero from "./components/Hero";
import Layout from "./components/Layout";
import ProductItemCategory from "./components/ProductItemCategory";
import TrendingProduct from "./components/TrendingProduct";
import ProductTile from "./components/ProductTile";
import processingMachine from "./assets/small/processing_machine.jpg";
import CNCMachine from "./assets/small/CNC-Machining-Center.jpg";
import ConcreteBlockMachine from "./assets/small/Concrete-Block-Machine.jpg";
import GlassReactor from "./assets/small/Glass-Reactor.jpg";
import CNCMachineTools from "./assets/small/CNC-Machine-Tools.jpg";
import CNCMachineService from "./assets/small/CNC-Machining-Service.jpg";
import Excavators from "./assets/small/Excavators.webp";
import FarmTractor from "./assets/small/Farm-Tractor.webp";
import ChinaMachinery from "./assets/small/China-Machinery.webp";

import Industry from "./assets/small/Industry.webp";
import AirCompressor from "./assets/small/Air-Compressor.jpg";
import GeneratorSet from "./assets/small/Generator-Set.jpg";
import ScrewCompressor from "./assets/small/Screw-Compressor.jpg";
import Boiler from "./assets/small/Boiler.webp";
import WindTurbine from "./assets/small/Wind-Turbine.webp";
import FloorScrubber from "./assets/small/Floor-Scrubber.webp";
import Reducer from "./assets/small/Reducer.webp";
import OxygenGenerator from "./assets/small/Oxygen-Generator.webp";

import Furniture from "./assets/small/Furniture.webp";
import BedRoomBed from "./assets/small/Bedroom-Bed.jpg";
import Gazedo from "./assets/small/Gazebo.jpg";
import SupermarketShelf from "./assets/small/Supermarket-Shelf.webp";
import OfficeChair from "./assets/small/Office-Chair.webp";
import HotelFurniture from "./assets/small/Hotel-Furniture.webp";
import BarberChair from "./assets/small/Barber-Chair.webp";
import DrawerSlide from "./assets/small/Drawer-Slide.webp";
import BedroomFurniture from "./assets/small/Bedroom-Furniture.webp";
import Section from "./components/Section";

import EasySourcing from "./assets/banner/easy-sourcing.jpg";
import { IoIosArrowForward } from "react-icons/io";
import Button from "./components/Button";

function App() {
  return (
    <div className="">
      <Layout className="bg-slate-200">
        <Hero />
        <TrendingProduct />
        <ProductItemCategory
          backgroundImage={processingMachine}
          headingText="Manufacturing & Processing Machinery"
        >
          <ProductTile item text="CNC Machine Center" image={CNCMachine} />
          <ProductTile
            item
            text="Concrete Block Machine"
            image={ConcreteBlockMachine}
          />
          <ProductTile item text="Glass Reactor" image={GlassReactor} />
          <ProductTile item text="CNC Machine Tools" image={CNCMachineTools} />
          <ProductTile
            item
            text="CNC Machine Service"
            image={CNCMachineService}
          />
          <ProductTile item text="Excavators" image={Excavators} />
          <ProductTile item text="Farm Tractor" image={FarmTractor} />
          <ProductTile item text="China Machinery" image={ChinaMachinery} />
        </ProductItemCategory>
        {/* Second */}
        <ProductItemCategory
          backgroundImage={Industry}
          headingText="Industrial Equipment & Components"
        >
          <ProductTile item text="Air Compressor" image={AirCompressor} />
          <ProductTile item text="Generator Set" image={GeneratorSet} />
          <ProductTile item text="Screw Compressor" image={ScrewCompressor} />
          <ProductTile item text="Boiler" image={Boiler} />
          <ProductTile item text="Wind Turbine" image={WindTurbine} />
          <ProductTile item text="Floor Scrubber" image={FloorScrubber} />
          <ProductTile item text="Reducer" image={Reducer} />
          <ProductTile item text="Oxygen Generator" image={OxygenGenerator} />
        </ProductItemCategory>
        {/* Third */}
        <ProductItemCategory
          backgroundImage={Furniture}
          headingText="Furniture"
        >
          <ProductTile item text="Bedroom Bed" image={BedRoomBed} />
          <ProductTile item text="Gazedo" image={Gazedo} />
          <ProductTile item text="Supermarket Shelf" image={SupermarketShelf} />
          <ProductTile item text="Office Chair" image={OfficeChair} />
          <ProductTile item text="Hotel Furniture" image={HotelFurniture} />
          <ProductTile item text="Baber Chair" image={BarberChair} />
          <ProductTile item text="Drawer Slide" image={DrawerSlide} />
          <ProductTile item text="Bedroom Furniture" image={BedroomFurniture} />
        </ProductItemCategory>
        {/* Form */}
        <Section>
          <div className="absolute w-full h-full m-auto top-0 right-0 bottom-0 left-0">
            <img
              src={EasySourcing}
              alt="easy sourcing"
              className="object-fit w-full h-full"
            />
          </div>
          <div className="relative flex justify-between">
            {/* first */}
            <div className="pt-s pl-m overflow-hidden basis-[35%]">
              <h1 className="text-u-lg font-bold mb-s uppercase">
                easy sourcing
              </h1>
              <div className="text-u-base text-slate-600">
                <p className="mt-xs mb-m">
                  An easy way to post your sourcing requests and get quotes.
                </p>
                <p className="mt-xs">
                  One request, multiple quotes <br /> Verified suppliers
                  matching <br />
                  Quotes comparison and sample request
                </p>
              </div>
              <div className="font-medium text-[14px] mt-l text-slate-900">
                <a
                  href="#"
                  className="capitalize transition-colors delay-100 ease-in-out hover:text-red-500"
                >
                  Learn more <IoIosArrowForward className="inline-block" />
                </a>
              </div>
            </div>
            {/* second */}
            <div className="py-s px-l basis-[45%] bg-white">
              <h2 className="mb-2xs text-u-m">Want to get Quotations?</h2>
              <form className="">
                <div className="mb-xs">
                  <label
                    htmlFor="Username"
                    className="relative block rounded-[3px] border border-slate-200 focus-within:border-blue-800"
                  >
                    <input
                      type="text"
                      id="Username"
                      className="peer border-none bg-transparent placeholder-transparent focus:ring-0"
                      placeholder="Production Name or Keywords"
                    />

                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-slate-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-u-xs peer-focus:top-0 peer-focus:text-xs">
                      Production Name or Keywords
                    </span>
                  </label>
                </div>
                {/* textarea */}
                <div className="mb-xs">
                  <label
                    htmlFor="OrderNotes"
                    className="block text-sm relative rounded-[3px] border border-slate-200 focus-within:border-blue-800"
                  >
                    <textarea
                      id="OrderNotes"
                      className="mt-2 peer w-full font-medium placeholder:text-slate-400 align-top sm:text-sm border-0 focus-within:ring-0"
                      rows="4"
                      placeholder=""
                    ></textarea>
                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-slate-400 transition-all peer-placeholder-shown:top-[15%] peer-placeholder-shown:text-u-xs peer-focus:top-0 peer-focus:text-xs">
                      Product Description
                    </span>
                  </label>
                </div>
                {/* input and select */}
                <div className="mb-xs flex items-center">
                  {/* input */}
                  <div className="mr-2xs">
                    <label
                      htmlFor="Username"
                      className="relative block rounded-[3px] border border-slate-200 focus-within:border-blue-800"
                    >
                      <input
                        type="text"
                        id="Username"
                        className="peer border-none w-[169px] bg-transparent placeholder-transparent focus:ring-0"
                        placeholder="Purchase Quantity"
                      />

                      <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-slate-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-u-xs peer-focus:top-0 peer-focus:text-xs">
                        Purchase Quantity
                      </span>
                    </label>
                  </div>
                  {/* select */}
                  <div className="">
                    <label
                      htmlFor="HeadlineAct"
                      className="block text-u-xs"
                    >
                      <select
                        name="HeadlineAct"
                        id="HeadlineAct"
                        className="w-full rounded-[3px] bg-slate-100 border-gray-300 py-2xs text-gray-900 text-xs"
                      >
                        <option value="">Please select</option>
                        <option value="JM">John Mayer</option>
                        <option value="SRV">Stevie Ray Vaughn</option>
                        <option value="JH">Jimi Hendrix</option>
                        <option value="BBK">B.B King</option>
                        <option value="AK">Albert King</option>
                        <option value="BG">Buddy Guy</option>
                        <option value="EC">Eric Clapton</option>
                      </select>
                    </label>
                  </div>
                </div>
                {/* button */}
                <Button buttonText="Post Your Request Now" className="py-3xs" />
              </form>
            </div>
          </div>
        </Section>
      </Layout>
    </div>
  );
}

export default App;
