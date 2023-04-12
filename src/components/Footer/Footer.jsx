import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container  '>
            <div className='d-md-flex justify-content-between'>
                <div className="logo-area ">
                    <h3>Porfessional Advancement</h3>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img src="/public/icon/Group 9969.png" alt="" />
                </div>
                <div className="company-product-support d-md-flex justify-content-between ">
                    <div className="company me-5">
                        <h4>Company</h4>
                        <p>About Us</p>
                        <p>Work</p>
                        <p>Latest News</p>
                        <p>Careers</p>
                    </div>
                    <div className="product me-5">
                        <h4>Product</h4>
                        <p>Prototype</p>
                        <p>Plans $ Pricing</p>
                        <p>Customers</p>
                        <p>Integrations</p>
                    </div>
                    <div className="support">
                        <h4>Support</h4>

                        <p>Help Desk</p>
                        <p>Sales</p>
                        <p>Become a Partner</p>
                        <p>Developers</p>
                    </div>
                </div>
                <div className="contact">
                    <h4>Contact</h4>

                    <p>524 Broadway , NYC</p>
                    <p>+1 777 - 978 - 5570</p>
                </div>
            </div>
            <div className="footer-inside">

            </div>
            <div className='d-md-flex justify-content-between text-center'>
                <p>@2023 CareerHub. All Rights Reserved</p>
                <p>Powered by CareerHub</p>
            </div>
        </div>
    );
};

export default Footer;