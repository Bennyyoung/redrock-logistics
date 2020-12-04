import React from 'react'

export default function Contact() {
    return (
        <section className="contact-section">
            <div className="container">
                <div className="col-md-8">
                    <form id="contact-form">
                        <h2>Send us a message</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <input name="name" id="name" type="text" placeholder="Name" />
							</div>
                                <div className="col-md-6">
                                    <input name="mail" id="mail" type="text" placeholder="Email" />
							</div>
                                </div>
                                <textarea name="comment" id="comment" placeholder="Message"></textarea>
                                <input type="submit" id="submit_contact" value="Send Message" />
                                    <div id="msg" className="message"></div>
					</form>
                </div>
                            <div className="col-md-4">
                                <div className="contact-info">
                                    <h2>Contact Info</h2>
                                    <p>You can contact or visit us in our office from Monday to Friday from 8:00 - 17:00</p>
                                    <ul className="information-list">
                                        <li><i className="fa fa-map-marker"></i><span>A 41 Pandav Nagar, New Delhi, India, 110005</span></li>
                                        <li><i className="fa fa-phone"></i><span>+91 4000-5000</span><span>+91 4500-4000</span></li>
                                        <li><i className="fa fa-envelope-o"></i><a mailto="info@RedRockng.com">info@RedRockng.com</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>  
		</section>
    )
}
