import React from 'react'
import "./Footer.css"

export default function Footer() {
    return (
        <footer>
			<div class="up-footer">
				<div class="container">
					<div class="row">
						<div class="col-md-3">
							<div class="footer-widget">
								<h2>About Us</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna.</p>
								<ul class="social-links social-links_mod-a list-inline">
									<li><a target="_blank" href="https://twitter.com/"><i
												class="icons fa fa-twitter"></i></a></li>
									<li><a target="_blank" href="https://www.facebook.com/"><i
												class="icons fa fa-facebook"></i></a></li>
									<li><a target="_blank" href="https://www.linkedin.com/"><i
												class="icons fa fa-linkedin"></i></a></li>
									<li><a target="_blank" href="https://www.google.com/"><i
												class="icons fa fa-google-plus"></i></a></li>
									<li><a target="_blank" href="https://www.instagram.com/"><i
												class="icons fa fa-instagram"></i></a></li>
								</ul>

							</div>
						</div>
						<div class="col-md-3">
							<div class="footer-widget">
								<h2>Our Services</h2>
								<ul class="link-list">
									<li><a href="#">Ocean Freight</a></li>
									<li><a href="#">Logistics</a></li>
									<li><a href="#">Air Freight</a></li>
									<li><a href="#">Cargo Express</a></li>
									<li><a href="#">Warehousing</a></li>
									<li><a href="#">Custom Brokerage</a></li>
								</ul>
							</div>
						</div>
						<div class="col-md-3">
							<div class="footer-widget">
								<h2>Quick Links</h2>
								<ul class="link-list">
									<li><a href="#">Home</a></li>
									<li><a href="#">Our Services</a></li>
									<li><a href="#">About Us</a></li>
									<li><a href="#">News</a></li>
									<li><a href="#">Contact Us</a></li>
								</ul>
							</div>
						</div>
						<div class="col-md-3">
							<div class="footer-widget info-widget">
								<h2>Info</h2>
								<p class="first-par">You can contact or visit us during working time.</p>
								<p><span>Tel: </span> 1234 - 5678 - 9012</p>
								<p><span>Email: </span> support@express.com</p>
								<p><span>Working Hours: </span> 8:00 a.m - 17:00 a.m</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class=" copyright">
				<div class="container ">
					<div class="pull-left">
						<p class="">
							&copy; Copyright "express" 2016. All rights reserved.
						</p>
					</div>
					<div class="pull-right">
						<p class="">
							Created By : Deepak Chandra
						</p>
					</div>
				</div>
			</div>


		</footer>
    )
}
