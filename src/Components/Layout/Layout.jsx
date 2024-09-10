import  Navbar  from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import  Footer  from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer> 
    </>
  );
};
export default Layout;
