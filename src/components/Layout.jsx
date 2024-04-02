import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, className }) => {
  return (
    <div className={`${className || ''}`}>
      <Header className="bg-white" />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
