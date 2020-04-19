import React from 'react'
import 'swiper/css/swiper.min.css'
import Swiper from "swiper"

class TopContent extends React.Component {

	scrollToVis() {
	    // Get actual position of body element.
	    let bodyRect = document.body.getBoundingClientRect();

	    // Detects for Window size changes.
	    window.addEventListener("resize", function() {
	        bodyRect = document.body.getBoundingClientRect();
	    });

	    // Elements to be scrolled in.
	    let elementsToAnimate = document.querySelectorAll('[data-sv]');
	    let itemList = [];

	    // Register each elements location and detection.
	    for(let i=0; i < elementsToAnimate.length; i++) {
	        let currLocation = elementsToAnimate[i].getBoundingClientRect();
	        let itemLocation = currLocation.top - bodyRect.top;
	        itemList.push([currLocation.top - bodyRect.top, elementsToAnimate[i]]);
	    }

	    // Check registered elements.
	    // console.table(itemList);

	    // Gets current detection line location.
	    window.addEventListener('scroll', function(e){
	        let element = document.getElementById('test');
	        let elemRect = element.getBoundingClientRect();
	        let bodyRect = document.body.getBoundingClientRect();
	        let offset = elemRect.top - bodyRect.top;
	        // console.log('Detection Line is ' + offset + ' vertical pixels from <body>');
	      
	        // If detection line touches per itemList element item.
	        for(let x = 0; x < itemList.length; x++) {
	            if(offset >= itemList[x][0]) {
	                let typeOfAnimation = itemList[x][1].getAttribute('data-sv');
	                itemList[x][1].classList.add(typeOfAnimation);
	            }
	        }
	    });
	}

	onLoadVis() {
		let bodyRect = document.body.getBoundingClientRect();

		let elementsToAnimate = document.querySelectorAll('[data-sv]');
		let itemList = [];

		// Register each elements location and detection.
		for(let i=0; i < elementsToAnimate.length; i++) {
		    let currLocation = elementsToAnimate[i].getBoundingClientRect();
		    let itemLocation = currLocation.top - bodyRect.top;
		    itemList.push([currLocation.top - bodyRect.top, elementsToAnimate[i]]);
		}
		
	    let element = document.getElementById('test');
	    let elemRect = element.getBoundingClientRect();
	    let offset = elemRect.top - bodyRect.top;
	    for(let x = 0; x < itemList.length; x++) {
	        if(itemList[x][0] < offset) {
	            let typeOfAnimation = itemList[x][1].getAttribute('data-sv');
	            itemList[x][1].classList.add(typeOfAnimation);
	        }
	    }
	}

	loadSwiper() {
	  	var swiper = new Swiper('.slider', {
	  		speed: 3000,
		  	autoplay: {
		  		delay: 3000,
		  		disableOnInteraction: false,
		  	},
		  	effect: 'fade',
		  	fadeEffect: {
		  		crossFade: true,
		  	},
		  	touchRatio: 0,
		});
	}

	componentDidMount() {
		this.onLoadVis()
	    this.scrollToVis()
	    this.loadSwiper()
	}
	
	render() {
		return(
			<main className="top">
			    <div id="test"></div>
				<div className="inner">
					<section className="kv" data-sv="fade-in">
						<div className="inner">
							<div className="slider">
								<div className="swiper-wrapper">
									<div className="swiper-slide">
			                            <img src="http://www.smsarjanais.edu.bn/wp-content/uploads/2019/02/Main-Cover-1.jpg" />
									</div>
									<div className="swiper-slide">
			                            <img src="http://www.smsarjanais.edu.bn/wp-content/uploads/2019/02/Main-Cover-2.jpg" />
									</div>
									<div className="swiper-slide">
			                            <img src="http://www.smsarjanais.edu.bn/wp-content/uploads/2019/02/Main-Cover-3.jpg" />
									</div>
									<div className="swiper-slide">
			                            <img src="http://www.smsarjanais.edu.bn/wp-content/uploads/2019/02/Main-Cover-4.jpg" />
									</div>
								</div>
							</div>
							
						</div>
					</section>

					<section className="intro" data-sv="fade-in">
						<div className="inner">
							<div className="title__box">
								<h4>A Truly International Education Embedded with Uniquely Asian Values</h4>
								<p>Seri Mulia Sarjana International School is among the leading private international schools in Brunei Darussalam. We are an international school in a multicultural society that is committed to encouraging Excellence, instilling Global Citizenship, and promoting Social Awareness.</p>
							</div>
						</div>
					</section>

					<section className="learn" data-sv="fade-in">
						<div className="inner">
							<div className="box__content study__content">
								<a href="#">
									<div className="box__content__image" style={{ backgroundImage: "url: ('http://www.smsarjanais.edu.bn/wp-content/uploads/2018/08/Library-3-1.jpg')"}}></div>
									<div className="box__content__link"><span>Study at SMSIS</span></div>
								</a>
							</div>
							<div className="box__content--col__01 tel__content">
								<a data-modal="#request">
									<div className="box__content__image" style={{ backgroundImage: "url: ('http://www.smsarjanais.edu.bn/wp-content/uploads/2018/09/ICT-Lab-SMSIS-5.jpeg')"}}></div>
									<div className="box__content__link"><span>REQUEST FORMS</span></div>
								</a>
							</div>
							<div className="box__content--col__02 email__content">
								<a href="#">
									<div className="box__content__image" style={{ backgroundImage: "url: ('http://www.smsarjanais.edu.bn/wp-content/uploads/2018/09/ICT-Lab-SMSIS-6.jpeg')"}}></div>
									<div className="box__content__link"><span>SEND INQUIRY</span></div>
								</a>
							</div>
						</div>
					</section>

					<section id="#news" className="news" data-sv="fade-in">
						<div className="inner">
							<h4 className="title">NEWS</h4>
							<div className="news__list">
								<a href="" className="news__list__item">
									<span className="date">2020.11.04</span>
									<span className="category highlight">HIGHLIGHT</span>
									<span className="content">Website redesign and launched on 2020!</span>
								</a>
								<a href="" className="news__list__item">
									<span className="date">2020.11.04</span>
									<span className="category education">EDUCATION</span>
									<span className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda recusandae voluptas, reprehenderit fugiat provident. Dicta veritatis eaque quod quidem, quos, rerum ducimus numquam sapiente eum nam enim quo, esse soluta!</span>
								</a>
								<a href="" className="news__list__item">
									<span className="date">2020.11.04</span>
									<span className="category announcement">ANNOUNCEMENT</span>
									<span className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda recusandae voluptas, reprehenderit fugiat provident. Dicta veritatis eaque quod quidem, quos, rerum ducimus numquam sapiente eum nam enim quo, esse soluta!</span>
								</a>
								<a href="" className="news__list__item">
									<span className="date">2020.11.04</span>
									<span className="category service">SERVICE</span>
									<span className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda recusandae voluptas, reprehenderit fugiat provident. Dicta veritatis eaque quod quidem, quos, rerum ducimus numquam sapiente eum nam enim quo, esse soluta!</span>
								</a>
							</div>
						</div>
					</section>
				</div>
			</main>
		)
	}
}

export default TopContent