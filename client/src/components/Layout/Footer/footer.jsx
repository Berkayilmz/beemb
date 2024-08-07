import React from 'react'
import './footer.css'
import Policy from '../Policy/policy'

const footer = () => {
    return (
        <>
            <Policy/>
            <footer className="footer">
                <div className="subscribe-row">
                    <div className="container">
                        <div className="footer-row-wrapper">
                            <div className="footer-subscribe-wrapper">
                                <div className="footer-subscribe">
                                    <div className="footer-subscribe-top">
                                        <h3 className="subscribe-title">Get our emails for info on new items, sales and more.</h3>
                                        
                                    </div>
                                    <div className="footer-subscribe-bottom">
                                        <form>
                                            <input type="text" placeholder="Enter your email address." />
                                            <button className="btn">Subscribe</button>
                                        </form>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="footer-contact-wrapper">
                                <div className="footer-contact-top">
                                    <h3 className="contact-title">
                                        Need help? <br />
                                        (+90) 511 111 11 11
                                    </h3>
                                    <p className="contact-desc">We are available 8:00am – 7:00pm</p>
                                </div>
                                <div className="footer-contact-bottom">
                                    <div className="download-app">
                                        <a href="#">
                                            <img src="/img/footer/app-store.png" alt="" />
                                        </a>
                                        <a href="#">
                                            <img src="/img/footer/google-play.png" alt="" />
                                        </a>
                                    </div>
                                    <p className="privacy-text">
                                        <strong>Shopping App:</strong> 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widgets-row">
                    <div className="container">
                        <div className="footer-widgets">
                            <div className="brand-info">
                                <div className="footer-logo">
                                    <a href="index.html" className="logo">BEEMB</a>
                                </div>
                                <div className="footer-desc">
                                    <p> Kaliteli tercih, kaliteli ürün...</p>
                                </div>
                                <div className="footer-contact">
                                    <p>
                                        <a href="tel:555 555 55 55">(+90) 511 11 11</a> – <a
                                            href="mailto:info@example.com">beemb@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                            <div className="widget-nav-menu">
                                <h4>Information</h4>
                                <ul className="menu-list">
                                    <li>
                                        <a href="contact">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                   
                                    
                                </ul>
                            </div>
                            <div className="widget-nav-menu">
                                <h4>Account</h4>
                                <ul className="menu-list">
                                    <li>
                                        <a href="#">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#">My Orders</a>
                                    </li>
                                   
                                    <li>
                                        <a href="#">Account details</a>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div className="widget-nav-menu">
                                <h4>Shop</h4>
                                <ul className="menu-list">
                                    <li>
                                        <a href="#">Summer Collection</a>
                                    </li>
                                    <li>
                                        <a href="#">Bestsellers</a>
                                    </li>
                                    <li>
                                        <a href="#">Discount</a>
                                    </li>
                                    <li>
                                        <a href="#">Latest Products</a>
                                    </li>
                                    <li>
                                        <a href="#">Sale Products</a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="copyright-row">
                    <div className="container">
                        <div className="footer-copyright">
                            <div className="site-copyright">
                                <p>
                                    Copyright 2024 © E-Commerce Theme. All right reserved. Powered by Berkay Yılmaz and Mehmet Emra Arıcan.
                                </p>
                            </div>
                            <a href="#">
                                <img src="/img/footer/cards.png" alt="" />
                            </a>
                            <div className="footer-menu">
                                <ul className="footer-menu-list">
                                    <li className="list-item">
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li className="list-item">
                                        <a href="#">Terms and Conditions</a>
                                    </li>
                                    <li className="list-item">
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default footer