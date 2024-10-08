import { useState } from "react";
import { NavLink } from "react-router-dom";

import VisitorCount from "../VisitorCount/VisitorCount.jsx";
import SearchIcon from "../icons/SearchIcon.jsx";
import XIcon from "../icons/XIcon.jsx";
import UserIcon from "../icons/UserIcon.jsx";
import CartIcon from "../icons/CartIcon.jsx";
import Logo from "../icons/Logo.jsx";

import "./navbar.scss";
import HamburgerIcon from "../icons/HamburgerIcon.jsx";

const Navbar = () => {
    // State to track whether the mobile navigation is open or not
    const [isNavOpen, setIsNavOpen] = useState(false);

    // Function to toggle the state of the mobile navigation
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen); // Toggle the navigation state
        console.log(isNavOpen); // Log the current state to the console
    };

    return (
        <header className="primary-header | py-3">
            <div className="wrapper">
                <div className="flex align-items-center justify-content-between">
                    <div className="logo">
                        <NavLink to="/">
                            <Logo />
                        </NavLink>
                        <VisitorCount />
                    </div>

                    {/* Primary navigation menu */}
                    <nav className="primary-navigation">
                        <ul
                            className="flex align-items-center gap-6"
                            role={"list"}
                        >
                            <li>
                                <NavLink to="/" className="nav-link">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop" className="nav-link">
                                    Shop
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/services" className="nav-link">
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="nav-link">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    {/* Secondary navigation with user and cart icons */}
                    <nav className="secondary-navigation">
                        <div className="secondary-utilities flex align-items-center gap-2">
                            <div className="cart flex">
                                <CartIcon />
                            </div>
                            <div className="user flex">
                                <UserIcon />
                            </div>
                        </div>
                        <div onClick={toggleNav} className="flex">
                            {!isNavOpen ? <HamburgerIcon /> : <XIcon />}
                        </div>
                    </nav>

                    {/* Mobile navigation menu, displayed only when isNavOpen is true */}
                    {isNavOpen && (
                        <nav className="mobile-navigation">
                            <ul className="" role={"list"}>
                                <li>
                                    <NavLink to="/" className="nav-link">
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/shop" className="nav-link">
                                        Shop
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/services" className="nav-link">
                                        Services
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className="nav-link">
                                        Contact
                                    </NavLink>
                                </li>
                                <li className="search">
                                    <SearchIcon />
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Search..."
                                    />
                                </li>
                            </ul>
                        </nav>
                    )}

                    {/* Utilities section with search, cart, and user icons */}
                    <div className="utilities flex align-items-center gap-4">
                        <div className="search">
                            <SearchIcon />
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Search..."
                            />
                        </div>
                        <div className="cart flex">
                            <CartIcon />
                        </div>
                        <div className="user flex">
                            <UserIcon />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
