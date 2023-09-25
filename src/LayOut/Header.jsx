import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar bg-[#ffffff61]">
        <div className="flex-1">
            <img className="w-40" src="https://i.ibb.co/ZSBYL9k/Logo.png"></img>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={'/donation'}>Donation</NavLink></li>
            <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
            </ul>
        </div>
        </div>
    );
};

export default Header;