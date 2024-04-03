import Section from "./Section";
import ProductTile from "./ProductTile";
import  golfCart  from "../assets/small/Electric-Golf-Cart1697273791000.jpg";
import  childrenGifts  from "../assets/small/Children-s-Gifts.jpg";
import  conveyorBelt  from "../assets/small/Conveyor-Belt.jpg";
import  EvCharging  from "../assets/small/EV-Charging-Station.jpg";
import  forkLift  from "../assets/small/Forklift-Truck.jpg";
import  laborSupplies  from "../assets/small/Labour-Supplies.jpg";
import  ledLighting  from "../assets/small/LED-Outdoor-Lighting.jpg";
import  officeSuppliers  from "../assets/small/Office-Supplies.jpg";
import  paintCoating  from "../assets/small/Paint-Coating.jpg";
import  plasticMachinery  from "../assets/small/Plastic-Machinery.jpg";
import  powerEnergy  from "../assets/small/Power-Energy.jpg";
import  Switch from "../assets/small/Switch.jpg";

const TrendingProduct = () => {
  return (
    <Section>
          <h3 className="mb-s text-u-sm font-semibold">
            Selected Trending Products
          </h3>
          <div className="flex flex-wrap -mx-2xs">
            {/* rows */}
            <ProductTile image={golfCart} text="electric golf cart" />
            <ProductTile image={ledLighting} text="LED outdoor Lighting" />
            <ProductTile image={laborSupplies} text="labor suppliers" />
            <ProductTile image={Switch} text="switch" />
            <ProductTile image={powerEnergy} text="power & energy" />
            <ProductTile image={paintCoating} text="paint & coating" />
            <ProductTile image={EvCharging} text="EV charging station" />
            <ProductTile image={officeSuppliers} text="Office Suppliers" />
            <ProductTile image={conveyorBelt} text="Conveyor Belt" />
            <ProductTile image={plasticMachinery} text="Plastic machinery" />
            <ProductTile image={childrenGifts} text="children gifts" />
            <ProductTile image={forkLift} text="forklift trucks" />
          </div>
        </Section>
  )
}

export default TrendingProduct
