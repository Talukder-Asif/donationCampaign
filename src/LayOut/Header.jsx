import { Link, NavLink } from "react-router-dom";
import"./header.css"

const Header = () => {
    return (
        <div className="sticky top-0 md:relative z-50">
            <div className=" md:navbar md:absolute bg-[#ffffff61]">
        <div className="flex-1">
            <Link to={"/"}>
            <img className="w-40 mx-auto md:mx-0 my-3" src="https://i.ibb.co/ZSBYL9k/Logo.png"></img>
            </Link>
        </div>
        <div className="flex-none text-center md:text-right">
            <ul className="text-lg font-bold menu-horizontal md:px-1">
            <li className="ml-2 md:ml-5 lg:ml-10"><NavLink to={"/"}>Home</NavLink></li>
            <li className="ml-2 md:ml-5 lg:ml-10"><NavLink to={'/donate'}>Donation</NavLink></li>
            <li className="ml-2 md:ml-5 lg:ml-10"><NavLink to={'/statistics'}>Statistics</NavLink></li>
            </ul>
        </div>
        </div>
        </div>
    );
};

export default Header;