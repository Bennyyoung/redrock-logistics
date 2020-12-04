import React from 'react'
import four from "../images/others/4.jpg"
import one from "../images/others/1.jpg"
import "./About.css"

export default function About() {
    return (
        <>
            <section className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="project-title title">
                                <h2 className="box-header">Who we are</h2>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <img src={four} alt="" />
                        </div>
                        <div className="col-md-6">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section">
                <div className="container">
                    <div className="row">
                        <div className="project-title title">
                            <h2 className="box-header">Our Team Members</h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>

                        <div className="col-md-3">
                            <div className="team-box">
                                <div className="team-inner">
                                    <img src={one} alt="" className="img-circle" />
                                    <div className="mask"></div>
                                    <ul className="team-social-list">
                                        <li><a href="#"><i className="fa fa-envelope"></i></a></li>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                                <h6>Douglas Gilbert</h6>
                                <div className="subtext">Supervisor</div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="team-box">
                                <div className="team-inner">
                                    <img src={one} alt="" className="img-circle" />
                                    <div className="mask"></div>
                                    <ul className="team-social-list">
                                        <li><a href="#"><i className="fa fa-envelope"></i></a></li>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                                <h6>Douglas Gilbert</h6>
                                <div className="subtext">Supervisor</div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="team-box">
                                <div className="team-inner">
                                    <img src={one} alt="" className="img-circle" />
                                    <div className="mask"></div>
                                    <ul className="team-social-list">
                                        <li><a href="#"><i className="fa fa-envelope"></i></a></li>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                                <h6>Douglas Gilbert</h6>
                                <div className="subtext">Supervisor</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
