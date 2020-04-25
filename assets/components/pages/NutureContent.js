import React from 'react'

class NutureContent extends React.Component {

	constructor() {
		super()
		this.loadSwiper = this.loadSwiper.bind(this)
	}

	loadSwiper() {
		let swiperElements = document.querySelectorAll('.sliderWithThumb');

		swiperElements.forEach(function(item, index) {
			// console.log(item + 'index: ' + index)
			let thumbName = 'thumb' + index
			let galleryName = 'gallery' + index

		  	thumbName = new Swiper('.sliderThumb', {
		  		spaceBetween: 0,
		  		slidesPerView: 6,
		  		watchSlidesVisibility: true,
		  		watchSlidesProgress: true,
			});

		  	galleryName = new Swiper('.sliderWithThumb', {
		  		spaceBetween: 20,
		  		speed: 1500,
			  	autoplay: {
			  		delay: 5000,
			  		disableOnInteraction: false,
			  	},
			  	loop: true,
			  	effect: 'slide',
			  	touchRatio: 0,
			  	thumbs: {
			  		swiper: thumbName,
			  	}
			});


		});

	  	var gallery = new Swiper('.slider', {
	  		speed: 3000,
		  	loop: false,
		  	effect: 'slide',
		  	touchRatio: 0,
		});
	}

	tabSelector() {
		let element = document.querySelectorAll("[data-tab]");

		element.forEach(item => { 
			item.addEventListener('click', event => {

				document.querySelectorAll('[data-tab]').forEach(item => {
					item.classList.remove('is__active');
				})
				item.classList.add('is__active');

				let insideValue = item.getAttribute('data-tab')
				document.querySelectorAll('.content__holder').forEach(item => {
					item.classList.remove('is__active');
				})
				document.getElementById(insideValue).classList.add('is__active')

			})
		})
	}

	componentDidMount() {
		this.tabSelector()
		this.loadSwiper()
		window.scrollTo(0,0)
	}

	render() {
		return(
			<main className="education">
				<div id="test"></div>
				<div className="inner">
					<section className="kv">
						<div className="inner">
							<div className="kv__container">
								<div className="image" 
								style={{backgroundImage: "url('/assets/img/education/education_kv.jpg')"}}></div>
								<h1>STUDENT EMPOWERMENT</h1>
							</div>
						</div>
					</section>

					<section className="sub-learn other">
						<div className="inner">
							<div className="content">
								<div id="#tab01" className="content__holder is__active">
									<div className="inner">
										<div className="sliderThumb">
											<div className="swiper-wrapper">
												<div className="swiper-slide"><h4>Extra Curricular Activities (ECA)</h4></div>
												<div className="swiper-slide"><h4>Student Council</h4></div>
												<div className="swiper-slide"><h4>Junior Librarians</h4></div>
												<div className="swiper-slide"><h4>Peer Counsellors</h4></div>
												<div className="swiper-slide"><h4>Student-Led Conferences (SLCs)</h4></div>
												<div className="swiper-slide"><h4>Modern Foreign Language</h4></div>
											</div>
										</div>
										<div className="sliderWithThumb">
											<div className="swiper-wrapper">
												<div className="swiper-slide">
													<div className="title">
														<h3>Extra Curricular Activities (ECA)</h3>
													</div>
													<div className="content">
														<p>The school offers more ECA programme for Primary students every Saturday that will provide opportunities to all students with different skills. It enriches our students’ time at school while acquiring social skills such as team work and leadership.</p>
													</div>
												</div>

												<div className="swiper-slide">
													<div className="title">
														<h3>Student Council</h3>
													</div>
													<div className="content">
														<p>The voice of the student body is the Student Council who serve as positive role models to their peers. From nomination to voting, Year 3-6 students get a chance to participate in the decision-making process. Elected members of the Student Council undergo leadership training to equip themselves with the right skills in planning and running the school events to improve the student life and foster a close community.</p>
													</div>
												</div>

												<div className="swiper-slide">
													<div className="title">
														<h3>Junior Librarians</h3>
													</div>
													<div className="content">
														<p>Selected upper primary students are given special responsibilities to help run the library during break time. They enthusiastic junior librarians are trained to issue and return books as well as promote reading to fellow students.  Moreover, they find ways to encourage more learners to come to the library.</p>
													</div>
												</div>

												<div className="swiper-slide">
													<div className="title">
														<h3>Peer Counsellors</h3>
													</div>
													<div className="content">
														<p>Youngsters are likely to share concerns with peers than adults at school. Recognising this crucial need, we empower those students who are socially aware and emotionally balanced to be Peer Counsellors. They are taught how to initiate supportive interactions by engaging with their peers through academic tutoring and conflict.</p>
													</div>
												</div>

												<div className="swiper-slide">
													<div className="title">
														<h3>Student-Led Conferences (SLCs)</h3>
													</div>
													<div className="content">
														<p>SLC is a student-led, teacher-facilitated conference designed to provide opportunities for our students to monitor, reflect on their learning progress and take responsibility for their learning by sharing the process with their parents.</p>
													</div>
												</div>

												<div className="swiper-slide">
													<div className="title">
														<h3>Modern Foreign Language</h3>
													</div>
													<div className="content">
														<p>Acquisition of a second language is highly encouraged in our school. Studying Bahasa Melayu, the national language of our host country is integrated into the syllabus from Kindergarten 2 to Year 6. It promotes appreciation and understanding of Bruneian culture.  Learning this language completes the immersive, cultural learning experience of our students. Students take with them a tangible benefit of their time spent in Brunei.</p>
														<p>Apart from Bahasa Melayu, Mandarin is another language that is offered as an elective.</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</main>
		)
	}
}

export default NutureContent