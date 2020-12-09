import React from 'react'
import { Link } from "react-router-dom"
import logo from "../images/logo.jpg"


export default function DashboardNavbar() {
    return (
        <>
            <div className="container">
                <header className="clearfix">
                    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                        <div className="container">
                            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <Link to="/" className="navbar-brand"><img src={logo} alt="Sonic Logistics" width="120px" height="120px" /></Link>
                            </div>

                            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-right">
                                    <li><Link to="/create-shipment" className="active">CREATE SHIPMENT</Link></li>
                                    <li><Link to="/view-shipment" className="active">VIEW SHIPMENT</Link></li>
                                    <li><Link to="/" className="active">Home</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>   
        </>
    )
}
