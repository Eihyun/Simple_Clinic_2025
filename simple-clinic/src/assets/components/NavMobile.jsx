import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

import './NavMobile.css';
import Dropdown from '../images/Vector 3.svg';
import HamburgerIcon from '../images/ham-menu.svg';
import CloseIcon from '../images/close.svg';

function NavMobile() {
    const [active, setActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setActive(!active);
    const toggleDropdown = () => setIsOpen(!isOpen);

    // Close mobile menu when route changes
    useEffect(() => {
        setActive(false);
        setIsOpen(false); // close dropdown too
    }, [location]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        document.body.style.overflow = active ? 'hidden' : 'auto';
    }, [active]);

    return (
        <div className={`nav-container ${active ? 'active' : ''}`}>
            <button onClick={toggleMenu} aria-label={active ? "Close menu" : "Open Menu"}>
                <img src={active ? CloseIcon : HamburgerIcon} alt="Hamburger menu icon" />
            </button>

            {active && (
                <nav className="navigation" role="navigation">
                    <ul className="nav flex">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li>
                            <button className="dropdown-menu flex" onClick={toggleDropdown}>
                                <span>Our Services</span>
                                <img src={Dropdown} alt="Dropdown menu icon" />
                            </button>
                            {isOpen && (
                                <ul className="sub-menu flex">
                                    <li><Link to="/physiotherapy">Physiotherapy</Link></li>
                                    <li><Link to="/rmt">Registered Massage Therapy</Link></li>
                                    <li><Link to="/chiropractic">Chiropractic</Link></li>
                                    <li><Link to="/kinesiology">Kinesiology</Link></li>
                                    <li><Link to="/acupuncture">Acupuncture</Link></li>
                                    <li><Link to="/pilates">Pilates</Link></li>
                                </ul>
                            )}
                        </li>
                        <li><Link to="/location">Location</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                </nav>
            )}
        </div>
    );
}

export default NavMobile;
