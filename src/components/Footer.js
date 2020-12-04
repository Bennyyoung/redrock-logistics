import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

export default function Footer() {
    return (
        <footer>
            <div className="up-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footer-widget">
                                <h2>About Us</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna.</p>
                                <ul className="social-links social-links_mod-a list-inline">
                                    <li><a href="https://twitter.com/"><i
                                        className="icons fa fa-twitter"></i></a></li>
                                    <li><a href="https://www.facebook.com/"><i
                                        className="icons fa fa-facebook"></i></a></li>
                                    <li><a href="https://www.linkedin.com/"><i
                                        className="icons fa fa-linkedin"></i></a></li>
                                    <li><a href="https://www.google.com/"><i
                                        className="icons fa fa-google-plus"></i></a></li>
                                    <li><a href="https://www.instagram.com/"><i
                                        className="icons fa fa-instagram"></i></a></li>
                                </ul>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-widget">
                                <h2>Our Services</h2>
                                <ul className="link-list">
                                    <li><Link to="/ocean">Ocean Freight</Link></li>
                                    <li><Link to="/logistics">Logistics</Link></li>
                                    <li><Link to="/air">Air Freight</Link></li>
                                    <li><Link to="/cargo">Cargo Express</Link></li>
                                    <li><Link to="/warehousing">Warehousing</Link></li>
                                    <li><Link to="/brokerage">Custom Brokerage</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-widget">
                                <h2>Quick Links</h2>
                                <ul className="link-list">
                                    <li><Link to="/" href="#">Home</Link></li>
                                    <li><Link to="/services" href="#">Our Services</Link></li>
                                    <li><Link to="/about" href="#">About Us</Link></li>
                                    <li><Link to="/news" href="#">News</Link></li>
                                    <li><Link to="/contact" href="#">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-widget info-widget">
                                <h2>Info</h2>
                                <p className="first-par">You can contact or visit us during working time.</p>
                                <p><span>Tel: </span> +234 814300 3142</p>
                                <p><span>Email: </span> info@RedRockng.com</p>
                                <p><span>Working Hours: </span> 8:00 a.m - 17:00 a.m</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" copyright">
                <div className="container ">
                    <div className="pull-left">
                        <p className="">
                            &copy; Copyright "express" 2016. All rights reserved.
						</p>
                    </div>
                </div>
            </div>


        </footer>
    )
}
