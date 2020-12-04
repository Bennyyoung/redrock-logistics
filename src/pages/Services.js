import React from "react"
import { Link } from 'react-router-dom'
import service1 from '../upload/others/service1.jpg'
import service2 from '../upload/others/service2.jpg'
import service3 from '../upload/others/service3.jpg'
import service4 from '../upload/others/service4.jpg'
import service5 from '../upload/others/service5.jpg'
import service6 from '../upload/others/service6.jpg'


export default function Services() {
    return (
        <>
            {/* <!-- page-banner-section 
			================================================== --> */}
            <section className="page-banner-section">
                <div className="container">
                    <div className="row">
                        <div class="col-md-6">
                            <h2>Services</h2>
                        </div>
                        <div className="col-md-6">
                            <ul className="page-depth">
                                <li><Link to href="/express">Express</Link></li>
                                <li><Link to href="services.html">Services</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End page-banner section --> */}

            <section className="services-page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="side-navigation">
                                <ul className="side-navigation-list">
                                    <li><a className="active" href="services.html">Our Services</a></li>
                                    <li><a href="ocean.html">Ocean Freight</a></li>
                                    <li><a href="logistics.html">Logistics</a></li>
                                    <li><a href="air.html">Air Freight</a></li>
                                    <li><a href="cargo.html">Cargo Express</a></li>
                                    <li><a href="warehousing.html">Warehousing</a></li>
                                    <li><a href="brokerage.html">Custom Brokerage</a></li>
                                </ul>
                                <div className="contact-info">
                                    <h2>Contact Info</h2>
                                    <ul className="information-list">
                                        <li><i className="fa fa-map-marker"></i><span>A 41, Pandav Nagar Complex, New Delhi</span></li>
                                        <li><i className="fa fa-phone"></i><span>+1 612-4000-5000</span><span>+1 612-4500-4500</span></li>
                                        <li><i className="fa fa-envelope-o"></i><a mailto="info@RedRockng.com">info@RedRockng.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="services-wrapp">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="services-post">
                                            <img src={service1} alt="" />
                                            <h4>Ocean Freight</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat.</p>
                                            <a className="btn readmore" href="ocean.html">Read More</a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="services-post">
                                            <img src={service2} alt="" />
                                            <h4>Logistics</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat.</p>
                                            <a className="btn readmore" href="logistics.html.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="services-post">
                                            <img src={service3} alt="" />
                                            <h4>Air Freight</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat.</p>
                                            <a className="btn readmore" href="air.html">Read More</a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="services-post">
                                            <img src={service4} alt="" />
                                            <h4>Cargo Express</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat.</p>
                                            <a className="btn readmore" href="cargo.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="services-post">
                                            <img src={service5} alt="" />
                                            <h4>Ware House</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat.</p>
                                            <a className="btn readmore" href="warehousing.html">Read More</a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="services-post">
                                            <img src={service6} alt="" />
                                            <h4>Custom Brokerage</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat.</p>
                                            <a className="btn readmore" href="brokerage.html">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End services-page section --> */}
        </>
    )
}
