const Section = (
 { className,
  id,
  customPaddings,
  children
}) => {
  return (
    <section className={`relative max-w-[1440px] mx-auto px-s min-w-[728px] ${className || ""} ${customPaddings || ""}`} id={id}>
      <div className="mt-s px-m py-2 border border-slate-200">
      {children}
      </div>
    </section>
  );
};

export default Section;
