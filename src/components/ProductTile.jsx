const ProductTile = ({ image, text, id, item }) => {
  return item ? (
    <div
      key={id}
      className="relative border border-slate-100 border-l-0 border-t-0 w-[25%]"
    >
      <div className="relative block pt-[29px] px-m pb-xs group">
        <div className="text-u-base leading-6 h-[48px] overflow-hidden z-2 text-wrap group-hover:text-red-500 text-slate-600 transition-colors ease-in-out delay-150">
          {text}
        </div>
        <div className="text-right -mt-6">
          <div className="w-[120px] h-[120px] inline-block overflow-hidden">
            <div className="relative w-full text-center pt-[100%] overflow-hidden ">
              <img
                src={image}
                className="max-w-full max-h-full transition-transform ease-in-out delay-150 absolute top-0 right-0 bottom-0 left-0 group-hover:scale-105"
                alt={image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="px-2xs mb-s w-[16.6%]" key={id}>
      <a href="#" className="block w-full h-full group">
        <div className="relative max-w-[180px] mx-auto mb-2xs">
          <div className="text-center w-full relative overflow-hidden pt-[100%]">
            <img
              src={image}
              className="group-hover:scale-105 transition-transform delay-150 ease-in-out max-w-full max-h-full absolute top-0 left-0 bottom-0 right-0"
              alt={image}
            />
          </div>
        </div>
        <div className="block text-center text-[14px] capitalize transition-colors delay-150 ease-in-out group-hover:text-red-500">{text}</div>
      </a>
    </div>
  );
};

export default ProductTile;
