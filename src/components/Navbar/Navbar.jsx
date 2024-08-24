import SearchIcon from "../icons/SearchIcon.jsx";
import UserIcon from "../icons/UserIcon.jsx";
import CartIcon from "../icons/CartIcon.jsx";
import Logo from "../icons/Logo.jsx";

import "./navbar.css";

const Navbar = () => {
    return (
        <header className="py-3">
            <div className="wrapper">
                <div className="flex align-items-center justify-content-between">
                    <div className="logo">
                        <Logo/>
                    </div>

                    <nav className="primary-navigation">
                        <ul className="flex align-items-center gap-6" role={"list"}>
                            <li>
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li>
                                <a className="nav-link" href="#">Shop</a>
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
                        <div className="cart">
                            <CartIcon/>
                        </div>
                        <div className="user">
                            <UserIcon/>
                        </div>
                    </div>
                </div>
                <nav>

                </nav>
            </div>
        </header>
    );
};

export default Navbar;