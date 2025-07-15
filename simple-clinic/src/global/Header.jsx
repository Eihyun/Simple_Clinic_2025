import { Link } from "react-router";

import Navigation from '../assets/components/Navigation';
import PrimaryBtn from '../assets/components/PrimaryBtn';
import Logo from '../assets/images/Logo_v1.png';

import "./Header.css";

function Header() {

    return(
        <>
        <header className="container">
            <div className="flex header">

                {/* Logo */}
                <Link to="/" className="header-logo flex">
                    <img src={Logo} alt="" className="logo" />
                    <span>Simple Clinic</span>
                </Link>

                <div className="navbar flex">
                    <Navigation />
                    <PrimaryBtn />
                </div>
            </div>
        </header>

        </>
    );
}

export default Header;