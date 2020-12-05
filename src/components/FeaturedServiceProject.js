import React from 'react'
import "./FeaturedServiceProject.css"

export default function FeaturedServiceProject() {
    return (
        <>
            {/* <!-- Feature Services projects -->
		<!-- Send a quote
			================================================== --> */}
            <section class="quote-section">
                <div class="container">
                    <div class="col-md-6 col-xs-12 content">
                        <div class="titles">
                            <h2>We do care about your cargo!</h2>
                        </div>

                        <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam
                        nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu
                        in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
						himenaeos.</p>

                        <p>Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque
                        elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed
                        fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in
						orci enim.</p>

                        <a href="#" class="button-one">View Details</a>

                    </div>
                    <div class="col-md-5 col-xs-12 col-md-offset-1">

                        <form id="contact-form">
                            <div class="titles">
                                <h2>request a quote</h2>
                                <p>* for detailed quote use extended version</p>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <input name="location" id="location" placeholder="Location" type="text" />
                                </div>
                                <div class="col-md-6">
                                    <input name="destination" id="destination" placeholder="To Destination" type="text" />
                                </div>
                                <div class="col-md-6">
                                    <input name="person" id="person" placeholder="Person / Cargo" type="text" />
                                </div>
                                <div class="col-md-6">
                                    <input name="mail" id="mail" placeholder="Email or Number" type="text" />
                                </div>
                            </div>
                            <textarea name="comment" id="comment" placeholder="Message"></textarea>
                            <input id="submit_contact" value="Submit Now" type="submit" />
                            <div id="msg" class="message"></div>
                        </form>

                    </div>
                </div>
            </section>

            {/* <!-- Feature Services projects --> */}
        </>
    )
}
