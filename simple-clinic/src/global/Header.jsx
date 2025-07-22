import { Link } from "react-router-dom";

import Navigation from '../assets/components/Navigation';
import NavMobile from '../assets/components/NavMobile';
import Logo from '../assets/images/Logo_v1.png';
import useMediaQuery from '../hooks/useMediaQuery';

import "./Header.css";

function Header() {
    const isDesktop = useMediaQuery("(min-width: 1440px)");

    return (
        <header className="container">
            <div className="header flex">

                {/* Logo */}
                <Link to="/" className="header-logo flex">
                    <img src={Logo} alt="Simple Clinic Logo" className="logo" />
                    <span>Simple Clinic</span>
                </Link>

                <div className="navbar flex">
                    {isDesktop ? <Navigation /> : <NavMobile />}
                    {/* <Navigation /> */}
                </div>
            </div>
        </header>
    );
}

export default Header;
