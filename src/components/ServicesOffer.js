import React from 'react'
import one from "../upload/others/1.jpg"
import two from "../upload/others/2.jpg"
import three from "../upload/others/3.jpg"
import four from "../upload/others/4.jpg"
import five from "../upload/others/5.jpg"

export default function ServicesOffer() {
    return (
        <>
            {/* <!-- services-offer */}
            {/* ================================================== --> */}
            <section className="services-offer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="services-post">
                                <img src={one} alt="" />
                                <div className="services-content">
                                    <h2><a href="services-single.html">Air Freight Forwarding</a></h2>
                                    {/* <h6>Best Choice of Options from Sonic Logistics' Global Network</h6> */}
                                    <p>International freight forwarding is often a balancing act between time, cost and environmental concerns. That’s one of the reasons companies choose Yusen Logistics for cost effective, smooth delivery of their cargo. Like them, you can be confident that our strategic alliances around the globe give you the flexibility to choose from a range of air and ocean freight service options. Seamlessly tailored to your precise needs, complete with end-to-end visibility.</p>
                                    <ul className="serv-links">
                                        <li><a href="#">Think together</a></li>
                                        <li><a href="#">Lead Time Based Services</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="services-post">
                                <img src={two} alt="" />
                                <div className="services-content">
                                    <h2><a href="services-single.html">Ocean Freight</a></h2>
                                    <p>By leveraging our strong and long-term carrier relationships, Sonic Logistics offers you flexible, reliable and secure ocean freight solutions. Customers value our expertise in international ocean freight forwarding across a global network that spans forty-six countries and regions. They value the ability to link with other services such as air freight forwarding, multimodal transport, cross-border services, or customs house brokerage..</p>
                                    <ul className="serv-links">
                                        <li><a href="#">Full Container Load (FCL)</a></li>
                                        <li><a href="#">Less-than Container Load (LCL)</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="services-post">
                                <img src={three} alt="" />
                                <div className="services-content">
                                    <h2><a href="services-single.html">Road & Rail Transport</a></h2>
                                    <p>Sonic Logistics offers both unmatched dependability and flexibility with our customized over-the-road trucking solutions. We have access to the equipment and capacity you need, no matter how exceptional your shipment is. Our professionals match your freight with the right vehicle and the right route, with the ability to restructure resources if conditions change. We drive the process from end-to-end while providing a custom solution to meet your needs.</p>
                                    <ul className="serv-links">
                                        <li><a href="#">Flexible, non-asset based solutions</a></li>
                                        <li><a href="#">Dry van, LTL, refrigerated, flatbed, TOFC</a></li>
                                        <li style={{ color: 'grey' }}><a href="#">See more</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="services-post">
                                <img src={four} alt="" />
                                <div className="services-content">
                                    <h2><a href="services-single.html">Customs House Brokerage</a></h2>
                                    {/* <h6>Best Choice of Options from Sonic Logistics' Global Network</h6> */}
                                    <p>The intricacies of a global supply chain are compounded by the need for fast customs clearance and security compliance. That's why it's more important than ever to partner with a company that has the international reach, the experience, and the communications network necessary to expedite clearance.
                                    At Sonic Logistics, we understand these challenges and deliver customized solutions that ensure your transactions are timely, compliant and confidential. And by combining our Air Freight Forwarding , Origin Cargo Management , Ocean Freight Forwarding or even Cross-Border Transportation into with our Customs House Brokerage service, we will be able to build the best possible solution tailored to your needs.
                                    While different companies specialize in different areas of customs brokerage, our professionals’ hands-on expertise spans the whole breadth of importing and exporting. Your one-stop shop for a stress-free import/export program.
                                    </p>
                                    <ul className="serv-links">
                                        <li><a href="#">Lead Time Based Services</a></li>
                                        <li><a href="#">Complex border crossings made seamless</a></li>
                                        <li><a href="#">See more</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="services-post">
                                <img src={five} alt="" />
                                <div className="services-content">
                                    <h2><a href="services-single.html">Warehousing</a></h2>
                                    <p>Whether you are planning to build a comprehensive international supply chain, or simply needing to manage a seasonal inventory upsurge, we can help. We have more than two million square meters of strategically sited storage distribution centers and consolidation centers, designed to support a wide range of different industries.
                                    The value of the service we offer goes beyond inventory management and beyond supply chain visibility. Strategic location means our warehouses and distribution centers are near to major ports or hub operations. They are part of a carefully planned network that can best meet our customers’ cross-border transport needs, their just-in-time manufacturing requirements, their final mile delivery, their after sales logistics or their reverse logistics.
                                    We provide bonded and highly specialized warehousing as part of an integrated clean room or temperature controlled supply chain. And, of course, a whole range of value added services for manufacturers and retailers.
                                    </p>
                                    <ul className="serv-links">
                                        <li><a href="#">Distribution Centers</a></li>
                                        <li><a href="#">Vendor Managed Inventory</a></li>
                                        <li><a href="#">See more</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End services-offer section --> */}
        </>
    )
}
