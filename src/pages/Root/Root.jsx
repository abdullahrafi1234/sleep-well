import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ToastContainer, } from 'react-toastify';


const Root = () => {
    return (
        <div className="font-poppins  mx-auto ">
            <div className="max-w-[1480px] mx-auto">
                <Navbar></Navbar>
            </div>
            <div className="max-w-7xl mx-auto">
                <Outlet></Outlet>
            </div>
            <div className="max-w-[1580px] mx-auto">
                <Footer></Footer>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;