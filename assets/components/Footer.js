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
                            url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31801.874932456492!2d114.900478!3d4.900395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x941d23f6496dbd1e!2sSeri%20Mulia%20Sarjana%20International%20School!5e0!3m2!1sen!2sbn!4v1586584012360!5m2!1sen!2sbn"
                            className="map__api"
                        />
        			</div>
        		</section>

        		<section className="copyright">
        			<div className="inner">
        				<small>&copy; 2020 UI Design by MARK CALDERON | Images used on this website are from <a target="_blank" href="https://unsplash.com/license"> UNSPLASHED.COM</a>, With compliance with the Unsplash License <br/> Logo from <a target="_blank" href="https://logoipsum.com/">https://logoipsum.com/</a></small>
        			</div>
        		</section>
        	</div>
        </footer>
    )
}

export default Footer