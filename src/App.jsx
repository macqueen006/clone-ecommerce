import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Section from "./components/Section";
import TrendingProduct from "./components/TrendingProduct";
import processingMachine from "./assets/small/processing_machine.jpg";
import Button from "./components/Button";
import ProductTile from "./components/ProductTile";
import CNCMachine from './assets/small/CNC-Machining-Center.jpg';
import ConcreteBlockMachine from './assets/small/Concrete-Block-Machine.jpg';
import GlassReactor from './assets/small/Glass-Reactor.jpg';
import CNCMachineTools from './assets/small/CNC-Machine-Tools.jpg';
import CNCMachineService from './assets/small/CNC-Machining-Service.jpg';
import Excavators from './assets/small/Excavators.webp';
import FarmTractor from './assets/small/Farm-Tractor.webp';
import ChinaMachinery from './assets/small/China-Machinery.webp';

function App() {
  return (
    <div className="">
      <Layout className="bg-slate-200">
        <Hero />
        <TrendingProduct />

        <Section customStyle="mt-s flex">
          <div className="relative w-[300px] overflow-hidden">
            <a href="#" className="block w-full h-full p-m">
              <div className="absolute top-0 bottom-0 right-0 left-0"
              style={{ backgroundImage: `url(${processingMachine})` }}
              ></div>

              <div className="relative">
                <div className="mb-s text-u-sm font-semibold">
                  Manufacturing & Processing Machinery
                </div>
                <div className="">
                  <Button buttonText="Source Now" />
                </div>
              </div>
            </a>
          </div>

          <div className="flex flex-wrap border border-slate-100 flex-1">
            {/* Product Item */}
            <ProductTile item text="CNC Machine Center" image={CNCMachine} />
            <ProductTile item text="Concrete Block Machine" image={ConcreteBlockMachine} />
            <ProductTile item text="Glass Reactor" image={GlassReactor} />
            <ProductTile item text="CNC Machine Tools" image={CNCMachineTools} />
            <ProductTile item text="CNC Machine Service" image={CNCMachineService} />
            <ProductTile item text="Excavators" image={Excavators} />
            <ProductTile item text="Farm Tractor" image={FarmTractor} />
            <ProductTile item text="China Machinery" image={ChinaMachinery} />
          </div>
        </Section>
      </Layout>
    </div>
  );
}

export default App;
