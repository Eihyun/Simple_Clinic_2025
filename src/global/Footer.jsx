import { Link } from "react-router-dom";

import "./Footer.css";
import PrimaryBtn from '../assets/components/PrimaryBtn';

import Logo from '../assets/images/Logo_v1.png';

function Footer() {

    return (
        <>
            <footer className="container">
                <div className="footer-container flex">
                    <div className="footer flex">
                    {/* Info */}
                    <div className="footer-col flex">
                        <div className="footer-logo flex">
                            <img src={Logo} alt="Simple Clinic Logo" className="logo" />
                            <span>Simple Clinic</span>
                        </div>
                        <p>604-336-7773</p>
                        <p>info@simpleclinic.ca</p>
                        <p>3833 Ruper Street,<br /> Vancouver, BC, V5R 2G7</p>
                    </div>

                    {/* Explore */}
                    <div className="footer-col flex">
                        <p className="icon-label">Explore</p>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Quick Search */}
                    <div className="footer-col flex">
                        <p className="icon-label">Our Services</p>
                        <ul>
                            <li><Link to="/physiotherapy">Physiotherapy</Link></li>
                            <li><Link to="/rmt">Registered massage therapy</Link></li>
                            <li><Link to="/chiropractic">Chiropractic</Link></li>
                            <li><Link to="/kinesiology">Kinesiology</Link></li>
                            <li><Link to="/acupucture">Acupucture</Link></li>
                            <li><Link to="/pilates">Pilates</Link></li>
                        </ul>
                    </div>

                    {/* Booking */}
                    <div className="footer-col flex">
                        <p className="icon-label">Book Your Appointment Today!</p>
                        <p>Monday - Saturday: 9:00-13:00</p>
                        <p>Sunday: Closed</p>
                        <PrimaryBtn />
                    </div>
                </div>
                <hr style={{ border: "1px solid black", width: "100%", marginBottom: "2rem" }} />
                <p>Copyright @ 2025 Simple Clinic | All rights reserved.</p>
                </div>
            </footer>
        </>
    );

}

export default Footer;