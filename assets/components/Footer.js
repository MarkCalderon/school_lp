import React from "react"
import Iframe from 'react-iframe'

function Footer() {
    return (
        <footer>
            <div id="scrollUp" data-scroll="#top" ></div>
        	<div className="inner">
        		<section className="map">
        			<div className="inner">
                        <Iframe 
                            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15445.402176483574!2d121.03735389724753!3d14.579090482246334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c835c77b9b79%3A0xdc4947c8b9d237f8!2sMandaluyong%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1587890240511!5m2!1sen!2sph"
                            className="map__api"
                        />
        			</div>
        		</section>

        		<section className="copyright">
        			<div className="inner">
        				<small>&copy; 2020 UI Design and Development by MARK CALDERON | Images used on this website are from <a target="_blank" href="https://unsplash.com/license"> UNSPLASHED.COM</a>, With compliance with the Unsplash License <br/> Logo from <a target="_blank" href="https://logoipsum.com/">https://logoipsum.com/</a></small>
        			</div>
        		</section>
        	</div>
        </footer>
    )
}

export default Footer