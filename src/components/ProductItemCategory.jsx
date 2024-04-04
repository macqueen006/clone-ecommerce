
import Section from "./Section";
import Button from "./Button";


const ProductItemCategory = ({backgroundImage, headingText, children }) => {
  return (
    <Section customStyle="mt-s flex">
          <div className="relative w-[300px] overflow-hidden">
            <a href="#" className="block w-full h-full p-m">
              <div className="absolute top-0 bottom-0 right-0 left-0"
              style={{ backgroundImage: `url(${backgroundImage || ""})` }}
              ></div>

              <div className="relative">
                <div className="mb-s text-u-sm font-semibold">
                  {headingText || ""}
                </div>
                <div className="">
                  <Button buttonText="Source Now" />
                </div>
              </div>
            </a>
          </div>

          <div className="flex flex-wrap border border-slate-100 flex-1">
            {/* Product Item */}
            {children}
          </div>
        </Section>
  )
}

export default ProductItemCategory