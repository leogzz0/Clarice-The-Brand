import React from 'react';
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='top'>
                <div className='item'>
                    <h1>Categories</h1>
                    <span>Shop</span>
                    <span>Collection</span>
                    <span>Editorial</span>
                    <span>Brand</span>
                    <span>Contact</span>
                </div>
                <div className='item'>
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className='item'>
                    <h1>About</h1>
                    <span>
                        Clarice The Brand stands for all those fashionistas out there who are willing to step up their looks. 
                        We help you elevate your style and become the most confident version of yourself through your shoes so that you can be your true, most fashion self. 
                        As Marylin Monroe once said, “Give a woman the right shoes and she can conquer the world” and we couldn’t agree more! 
                    </span>
                </div>
                <div className='item'>
                    <h1>Contact</h1>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor. 
                    </span>
                </div>
            </div>
            <div className='bottom'>
                <div className='left'>
                    <span className='logo'>Clarice The Brand</span>
                    <span className='copyright'>
                        © Copyright 2023. All Rights Reserved
                    </span>
                </div>
                <div className='right'>
                    <img src='/img/payments.png' alt='' />
                </div>
            </div>
        </div>
    );
};

export default Footer