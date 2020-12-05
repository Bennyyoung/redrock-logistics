import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"
import logo from "../images/logo.jpg"

export default class Navbar extends Component {
    state = {
        isOpen: false
    };

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
            <div className="container">
                <header className="clearfix">
                    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">


                        <div className="top-line">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>
                                            <span><i className="fa fa-phone"></i>+234 814300 3142</span>
                                            <span><i className="fa fa-envelope-o"></i>info@RedRockng.comName</span>
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="social-icons">
                                            <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a className="rss" href="#"><i className="fa fa-rss"></i></a></li>
                                            <li><a className="google" href="#"><i className="fa fa-google-plus"></i></a></li>
                                            <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                                            <li><a className="pinterest" href="#"><i className="fa fa-pinterest"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="container">
                            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                            <div className="navbar-header">
                                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <Link to="/" className="navbar-brand"><img src={logo} alt="Sonic Logistics" Width="120px" Height="120px"/></Link>
                            </div>

                            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-right">
                                    <li><Link to="/" className="active">Home</Link>
                                    </li>

                                    <li className="drop"><Link to="/about">About</Link>
                                        <ul className="dropdown">
                                            <li><Link to="/pricing">Pricing</Link></li>
                                            <li><Link to="/team">Team</Link></li>
                                            <li><a href="404-error.html">Error 404 Page</a></li>
                                        </ul>
                                    </li>
                                    <li className="drop"><Link to="/services">Our Services</Link>
                                        <ul className="dropdown">
                                            <li><Link to="/ocean">Ocean Freight</Link></li>
                                            <li><Link to="/logistics">Logistics</Link></li>
                                            <li><Link to="/air">Air Freight</Link></li>
                                            <li><Link to="/cargo">Cargo Express</Link></li>
                                            <li><Link to="/warehousing">Warehousing</Link></li>
                                            <li><Link to="/brokerage">Custom Brokerage</Link></li>
                                        </ul>
                                    </li>
                                    <li className="drop"><Link to="/gallery">Gallery</Link>
                                        <ul className="dropdown">
                                            <li><a href="gallery-2col.html">Gallery 2 Colums</a></li>
                                            <li><a href="gallery-3col.html">Gallery 3 Colums</a></li>
                                            <li><a href="gallery.html">Gallery 4 Colums</a></li>
                                        </ul>
                                    </li>
                                    <li className="drop"><Link to="/blog">Blog</Link>
                                        <ul className="dropdown">
                                            <li><a href="blog.html">Blog Default</a></li>
                                            <li><a href="blog-3col.html">Blog 3 Colums</a></li>
                                            <li><a href="blog-2col.html">Blog 2 Colums</a></li>
                                            <li><a href="single-post.html">Single Post</a></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/contact" href="contact.html">Contact</Link></li>
                                    <li className="search drop"><a href="#" className="open-search"><i className="fa fa-search"></i></a>
                                        <form className="form-search">
                                            <input type="search" placeholder="Search:" />
                                            <button type="submit">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}