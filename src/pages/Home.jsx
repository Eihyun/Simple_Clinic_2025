// React, hook
import React, { useState } from 'react';
import { Link } from "react-router";

// css
import './Home.css';

// components
import PrimaryBtn from '../assets/components/PrimaryBtn';
import Testimonial from '../assets/components/Testimonial';
import Map from '../assets/components/Map';
import Form from '../assets/components/Form';

// icons
import ChiroIcon from '../assets/images/icon-chiro.svg';
import RmtIcon from '../assets/images/icon-rmt.svg';
import PhysioIcon from '../assets/images/icon-physio.svg';
import KinesioIcon from '../assets/images/icon-kinesio.svg';
import AcupunIcon from '../assets/images/icon-acupun.svg';
import PilatesIcon from '../assets/images/icon-pilates.svg';
import IcbcIcon from '../assets/images/icon-icbc.svg';

import { 
    RiAwardFill, 
    RiCalendarCheckFill,
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
            <section className="h-services-section">
                <div className="h-services-container container flex">
                    <h2 className="h-services-title">
                        Our Services
                    </h2>
                    <div className="h-services-icons flex">
                        <div className="h-services flex">
                            <div className="h-service">
                                <img src={ChiroIcon} />
                                <p className="icon-label">Chiropractic</p>
                            </div>
                            <div className="h-service">
                                <img src={RmtIcon} />
                                <p className="icon-label">Registered Massage Therapy</p>
                            </div>
                            <div className="h-service">
                                <img src={PhysioIcon} />
                                <p className="icon-label">Physiotherapy</p>
                            </div>
                            <div className="h-service">
                                <img src={KinesioIcon} />
                                <p className="icon-label">Kinesiology</p>
                            </div>
                            <div className="h-service">
                                <img src={AcupunIcon} />
                                <p className="icon-label">Acupuncture</p>
                            </div>
                            <div className="h-service">
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

            {/* UVP */}
            <section className="uvp-section">
                <div className="uvp-container container flex">
                    <div className="uvp flex">
                        <RiAwardFill 
                            size={60}
                            className="uvp-icon"
                        />
                        <h3>Certified Practitioners</h3>
                        <p>Our team of experienced and certified healthcare professionals is dedicated to your well-being. We offer a range of therapeutic services tailored to support recovery, relieve pain, and help you feel your best with care that’s personalized to your needs.</p>
                    </div>
                    <div className="uvp flex">
                        <RiCalendarCheckFill
                            size={60}
                            className="uvp-icon"
                        />
                        <h3>Walk-In or Online Booking</h3>
                        <p>Whether you prefer to walk in or schedule online, booking your appointment is quick and simple with our hassle-free system. Plus, we often have same-day availability for your convenience.</p>
                    </div>
                    <div className="uvp flex">
                        <RiMoneyDollarCircleLine
                            size={60}
                            className="uvp-icon"
                        />
                        <h3>Seamless Direct Billing</h3>
                        <p>We make payment easy. Most of our practitioners offer direct billing to ICBC and private insurance providers, so you can focus on your recovery without worrying about paperwork.</p>
                    </div>
                    <div className="uvp flex">
                        <img src={IcbcIcon} className="uvp-icon icbc" />
                        <h3>Comprehensive ICBC Services</h3>
                        <p>In our clinic, we offer a range of ICBC-covered services, including massage therapy, physiotherapy, active rehab, and acupuncture, ensuring your comprehensive care.</p>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            {/* <section className="testimonial-section">
                <div className="test-container container flex">
                    <h2>Our Patient Said</h2>
                    <Testimonial />
                </div>
            </section> */}

            {/* Contact Us */}
            <section className="h-contact-section">
                <div className="h-contact-container container flex">
                    <div className="h-contact-title flex">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="h-contact">
                        <Map />
                        <Form />
                    </div>
                </div>
            </section>
        </>
    )

}

export default Home;