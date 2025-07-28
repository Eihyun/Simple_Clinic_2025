// React, hook
import React, { useState } from 'react';
import { Link } from "react-router";

// css
import './Home.css';

// components
import PrimaryBtn from '../assets/components/PrimaryBtn';

// icons
import ChiroIcon from '../assets/images/icon-chiro.svg';
import RmtIcon from '../assets/images/icon-rmt.svg';
import PhysioIcon from '../assets/images/icon-physio.svg';
import KinesioIcon from '../assets/images/icon-kinesio.svg';
import AcupunIcon from '../assets/images/icon-acupun.svg';
import PilatesIcon from '../assets/images/icon-pilates.svg';

import { 
    RiAwardFill, 
    RiCalendarCheckLine,
    RiMoneyDollarCircleLine
} from '@remixicon/react';

// images
import HeroImage from '../assets/images/hero_image.svg';
import ClinicImage from '../assets/images/clinic-image.png';

function Home() {

    return(
        <>
            {/* Hero */}
            <section className="hero-section">
                <div className="hero-container container flex">
                    <div className="hero flex">
                        <h1 className="hero-title">
                            Simple Paths to Effective Wellness
                        </h1>
                        <p className="hero-text">We offer straightforward paths to effective wellness through clear and achievable health strategies.</p>
                        <PrimaryBtn />
                    </div>

                    <div className="hero-image">
                        <img src={HeroImage} alt="Two hands massaging the back of a person" />
                    </div>
                </div>
            </section>

            {/* Our Services */}
            <section className="services-section">
                <div className="services-container container flex">
                    <h2 className="services-title">
                        Our Services
                    </h2>
                    <div className="services flex">
                        <div className="services-icons flex">

                            <div className="service">
                                <img src={ChiroIcon} />
                                <p className="icon-label">Chiropractic</p>
                            </div>
                            <div className="service">
                                <img src={RmtIcon} />
                                <p className="icon-label">Registered Massage Therapy</p>
                            </div>
                            <div className="service">
                                <img src={PhysioIcon} />
                                <p className="icon-label">Physiotherapy</p>
                            </div>
                            <div className="service">
                                <img src={KinesioIcon} />
                                <p className="icon-label">Kinesiology</p>
                            </div>
                            <div className="service">
                                <img src={AcupunIcon} />
                                <p className="icon-label">Acupuncture</p>
                            </div>
                            <div className="service">
                                <img src={PilatesIcon} />
                                <p className="icon-label">Pilates</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us */}
            <section className="about-section">
                <div className="about-container container flex">
                    <div className="about flex">
                        <h2 className="about-title">
                            Welcome to Simple Clinic
                        </h2>
                        <p className="about-text">
                            We keep things simple — and that’s what makes it work. At Simple Clinic, we offer proven treatments that support your well-being without unnecessary complexity. Our care is direct, effective, and focused on your total health.
                        </p>
                        <PrimaryBtn />
                    </div>

                    <div className="about-image">
                        <img src={ClinicImage} alt="" />
                    </div>
                </div>
            </section>

            <section className="uvp-section">
                <div className="uvp-container container flex">
                    <div className="uvp">
                        <RiAwardFill 
                            size={36}
                            className="uvp-icon"
                        />
                    </div>
                </div>

            </section>
        </>
    )

}

export default Home;