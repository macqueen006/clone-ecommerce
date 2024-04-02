export const HeroAsideLink = ({ image, mainTitle, subTitle, id }) => {
  return (
    <li className="h-[60px] py-2xs inline-block" id={id}>
      <a href="#" className="transition-colors delay-150 flex">
        <div className="w-xl h-xl mr-2xs text-center">
          <img
            src={image || ''}
            alt="image"
            className="max-w-full max-h-full align-middle"
          />
        </div>
        <div className="pt-3xs max-w-[150px]">
          <span className="whitespace-nowrap text-ellipsis overflow-hidden text-[14px] block">
            {mainTitle || ''}
          </span>
          <span className="text-xs whitespace-nowrap overflow-hidden block text-slate-500">
            {subTitle || ''}+ Products
          </span>
        </div>
      </a>
    </li>
  );
};
