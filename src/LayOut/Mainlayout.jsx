import { Outlet } from "react-router-dom";
import Header from "./Header";

const Mainlayout = () => {
    return (
        <div className=" px-3 m-auto container lg:px-5">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;