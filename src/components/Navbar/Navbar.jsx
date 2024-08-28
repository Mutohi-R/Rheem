import { Link } from "react-router-dom";

import SearchIcon from "../icons/SearchIcon.jsx";
import UserIcon from "../icons/UserIcon.jsx";
import CartIcon from "../icons/CartIcon.jsx";
import Logo from "../icons/Logo.jsx";

import "./navbar.css";
import HamburgerIcon from "../icons/HamburgerIcon.jsx";

const Navbar = () => {
    return (
        <header className="py-3">
            <div className="wrapper">
                <div className="flex align-items-center justify-content-between">
                    <div className="logo">
                        <Link to="/"><Logo/></Link>
                    </div>

                    <nav className="primary-navigation">
                        <ul className="flex align-items-center gap-6" role={"list"}>
                            <li>
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li>
                                <Link to="/shop" className="nav-link">Shop</Link>
                            </li>
                            <li>
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li>
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </nav>

                    <nav className="secondary-navigation">
                        <div className="secondary-utilities flex align-items-center gap-2">
                            {/* <div className="cart flex">
                                <CartIcon/>
                            </div> */}
                            <div className="user flex">
                                <UserIcon/>
                            </div>
                        </div>
                        <HamburgerIcon />
                    </nav>

                    <nav className="mobile-navigation">
                        <ul className="flex align-items-center gap-6" role={"list"}>
                            <li>
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li>
                                <Link to="/shop" className="nav-link">Shop</Link>
                            </li>
                            <li>
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li>
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="utilities flex align-items-center gap-4">
                        <div className="search">
                            <SearchIcon/>
                            <input type="text" name="" id="" placeholder="Search..."/>
                        </div>
                        <div className="cart flex">
                            <CartIcon/>
                        </div>
                        <div className="user flex">
                            <UserIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;