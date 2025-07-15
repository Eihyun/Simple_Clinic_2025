// React, hook
import React, { useState } from 'react';
import { Link } from "react-router";

import './Home.css';
import PrimaryBtn from '../assets/components/PrimaryBtn';

function Home() {


    return(
        <>
            <section>
                <div className="home-container container">
                    <div className="hero">
                        <h1 className='placeholder'>
                            Simple Paths to Effective Wellness
                        </h1>
                        <p>We offers straightforward paths to effective wellness through clear and achievable health strategies.</p>
                        <PrimaryBtn />
                    </div>
                </div>
            </section>
        </>
    )

}

export default Home;