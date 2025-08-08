import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

import './NavMobile.css';
import PrimaryBtn from './PrimaryBtn';

import Dropdown from '../images/dropdown.svg';
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
        if (active) {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
        if (scrollBarWidth > 0) {
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        }
        } else {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        }
        return () => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        };
    }, [active]);


    return (
        <div className={`nav-mob-container ${active ? 'active' : ''}`}>
            <button onClick={toggleMenu} aria-label={active ? "Close menu" : "Open menu"}>
                <img src={active ? CloseIcon : HamburgerIcon} alt="Hamburger menu icon" />
            </button>

            {active && (
                <nav className="navigation-mob" role="navigation">
                    <ul className="nav-mob flex">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li>
                            <button className="dropdown-menu-mob flex" onClick={toggleDropdown}>
                                <span>Our Services</span>
                                <img 
                                    src={Dropdown} 
                                    alt="Mobile menu dropdown icon" 
                                    className={`dropdown-icon ${isOpen ? "rotate" : ""}`} 
                                />
                            </button>
                            {isOpen && (
                                <ul className="sub-menu-mob flex">
                                    <li><Link to="/physiotherapy">Physiotherapy</Link></li>
                                    <li><Link to="/rmt">Registered massage therapy</Link></li>
                                    <li><Link to="/chiropractic">Chiropractic</Link></li>
                                    <li><Link to="/kinesiology">Kinesiology</Link></li>
                                    <li><Link to="/acupuncture">Acupuncture</Link></li>
                                    <li><Link to="/pilates">Pilates</Link></li>
                                </ul>
                            )}
                        </li>
                    <PrimaryBtn />
                    </ul>
                </nav>
            )}
        </div>
    );
}

export default NavMobile;
