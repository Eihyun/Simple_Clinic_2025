import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

import PrimaryBtn from './PrimaryBtn';
import './Navigation.css';
import Dropdown from '../images/dropdown.svg';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsOpen(false);
    }, [location]);
    
    return (
        <div className="nav-container">
            <nav className="navigation" role="navigation">
                <ul className="nav flex">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li className="nav-services">
                        <button className="dropdown-menu flex"
                            onClick={toggleDropdown}
                        >
                            <span>Our Services</span>
                            <img src={Dropdown} alt="Dropdown icon" 
                            className={`dropdown-icon ${isOpen ? "rotate" : ""}`} 
                            />
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
                    <PrimaryBtn />
                </ul>
            </nav>
        </div> 
    )
}

export default Navigation;