import React from 'react'
import "./Banner.css"
import time from "../images/others/time.png"
import call from "../images/others/call.png"
import location from "../images/others/location.png"

export default function Banner() {
    return (
        <section className="banner-section">
            <div className="container">
                <div className="header-info">

                    <div className="info-box col-md-3">
                        <div className="icon-box no-border">
                            <img src={time} />
                        </div>
                        <div className="text-box">
							<p className="highlighted">Mon - Sat 9.00 - 18.00</p>
							<p>Sunday Closed</p>
						</div>
                    </div>

                    <div className="info-box col-md-3">
						<div className="icon-box">
							<img src={call} alt="" />
						</div>
						<div className="text-box">
							<p className="highlighted">Call Us:</p>
							<p className="phone-number">(123) 456 7890</p>
						</div>
					</div>

                    <div className="info-box search-box-wrapper col-md-3">
						<div className="icon-box">
							<img src={location} alt="" />
						</div>
						<div className="text-box">
							<p className="highlighted">A 41 Ganesh Nagar Pandav Nagar <br />
								New Delhi</p>
						</div>
					</div>
                </div>
            </div>
            
        </section>
    )
}
