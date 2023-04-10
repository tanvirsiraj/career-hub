import React from 'react';
import './Hero.css';
import { Container } from 'react-bootstrap';

const Hero = () => {
    return (
        <Container>
            <div className=' d-md-flex flex-md-row align-items-center mt-5'>
                <div >
                    <h1 className='hero-title'>One Step <br /> Closer To Your <br /><span>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='primary-btn'>Get Started</button>
                </div>
                <div>
                    <img className='img-fluid' src="/public/heroImg/P3OLGJ1 copy 1.png" alt="" />

                </div>
            </div>
        </Container>
    );
};

export default Hero;