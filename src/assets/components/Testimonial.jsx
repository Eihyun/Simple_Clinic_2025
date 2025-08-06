import React, { Component } from "react";
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonial.css';

import ProfileImg from '../images/test-placeholder.png';

// Custom Slide
function Slide(props) {
    const { index, name, ...otherProps } = props;
    return (
        <div {...otherProps}>
            <h3>{index}</h3>
            <div className="slide-profile flex">
                <img src={ProfileImg} alt="" />
                <div>
                    <p>Rifki Abdurachman {name}c</p>
                    <p>A year ago</p>
                </div>
            </div>
            <div></div>
            <div>
                <p>Had a great experience with Justin! He is extremely professional and knowledgeable in his field...</p>
            </div>
        </div>
    );
}

// Custom Arrow
function PrevArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            style={{...style, display: "block"}}
            onClick={onClick}
        >
            <svg width="15" height="28" viewBox="0 0 15 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 1L2 14L14 27" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </div>
    );
}

function NextArrow(props) {
    const { style, onClick } = props;
    return (
        <div
            style={{...style, display: "block"}}
            onClick={onClick}
        >
            <svg width="15" height="28" viewBox="0 0 15 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L13 14L1 27" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </div>
    );
}

function Testimonial() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2,
                    SlidesToScroll: 2,
                }
            },
            {
                breakpoint: 834,
                settings: {
                    slidesToShow: 1,
                    SlidesToScroll: 1,
                }
            },
        ],
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return(
        <>
            <Slider {...settings} className="slider flex">
                <Slide index={1} name={"Christine"}/>
                <Slide index={2} />
                <Slide index={3} />
                <Slide index={4} />
            </Slider>
        </>

    )
}

export default Testimonial;
