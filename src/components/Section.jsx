

const Section = ({ className, id, customStyle, children }) => {
  return (
    <section id={id} >
      <div
        className={`${
          className || ""
        } relative z-10 px-s mx-auto max-w-[1440px] min-w-[728px]`}
      >
        <div
          className={`bg-white ${
            customStyle || "mt-s py-s px-m"
          } border border-slate-300`}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
