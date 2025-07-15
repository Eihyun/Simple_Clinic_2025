import { Link } from "react-router";
import { useState } from 'react';

import './Navigation.css';
import Dropdown from '../images/Vector 3.svg';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className="nav-container">
            <nav className="navigation" role="navigation">
                <ul className="nav flex">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li>
                        <button className="dropdown-menu flex"
                            onClick={toggleDropdown}
                        >
                            <span>Our Services</span>
                            <img src={Dropdown} alt="Dropdown menu icon" />
                        </button>
                        
                        {isOpen && (
                            <ul className="sub-menu flex">
                                <li><Link to="/physiotherapy">Physiotherapy</Link></li>
                                <li><Link to="/rmt">Registered massage therapy</Link></li>
                                <li><Link to="/chiropractic">Chiropractic</Link></li>
                                <li><Link to="/kinesiology">Kinesiology</Link></li>
                                <li><Link to="/acupucture">Acupucture</Link></li>
                                <li><Link to="/pilates">Pilates</Link></li>
                        </ul>
                        )}
                    </li>
                    <li><Link to="/location">Location</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                </ul>
            </nav>
        </div> 
    )
}

export default Navigation;