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
		document.getElementById('sp__menu__list').classList.remove('is__active')
		document.getElementById('sp__menu').classList.remove('is__active')
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
								style={{backgroundImage: "url('/assets/img/education/nuture_img-01.jpg')"}}></div>
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
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam fringilla ligula in semper. Nulla massa dui, euismod ut ex ac, sodales luctus nibh. Aliquam euismod efficitur pellentesque. Morbi mauris ex, consequat et est in, elementum rhoncus sem. Integer auctor justo fermentum molestie tincidunt. Ut tincidunt massa vitae orci finibus, at sollicitudin risus vestibulum. Nunc a nisl quis felis tincidunt maximus. Sed diam leo, rhoncus eu ante vitae, ultrices feugiat justo. Phasellus pulvinar maximus odio, ac malesuada dui convallis vitae. Nullam molestie aliquam dignissim. Nunc quis lectus id lacus interdum ultrices a vel tortor. Aliquam erat volutpat. Donec ullamcorper ante diam, pulvinar molestie est euismod quis.</p>
													</div>
												</div>

												<div className="swiper-slide">
													<div className="title">
														<h3>Student Council</h3>
													</div>
													<div className="content">
														<p>Pellentesque lacinia pharetra lectus vel aliquet. Proin non eros id sapien laoreet congue id vitae ligula. Nullam suscipit, purus et congue accumsan, augue ligula vestibulum enim, vel lobortis eros lorem quis purus. Nunc eu nunc sollicitudin, ultricies felis ac, lacinia augue. Nunc lectus nisi, posuere eu ex id, faucibus interdum orci. Quisque ullamcorper nec magna in pellentesque. Etiam luctus quis urna nec bibendum. Pellentesque eu pellentesque nisl. Duis a nisi vitae enim tincidunt efficitur id quis ante. Donec eget neque porttitor erat viverra mollis. Proin mattis dui quam, ac ultrices felis gravida eget. Nunc ac volutpat metus, id viverra nunc. Maecenas scelerisque tortor ut ultricies ullamcorper. Sed id imperdiet justo. Suspendisse sagittis sit amet arcu a scelerisque. Integer velit metus, tincidunt quis lacus vitae, consectetur semper risus.</p>
													</div>
												</div>

												<div className="swiper-slide">
													<div className="title">
														<h3>Junior Librarians</h3>
													</div>
													<div className="content">
														<p>Morbi aliquet feugiat enim eu lobortis. Maecenas ut malesuada elit. Nunc in ex augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam pellentesque lorem ac lacus lacinia, sed egestas est mattis. Donec eget dolor et turpis eleifend porttitor. Aliquam vitae sodales velit. Praesent vel imperdiet ipsum, vitae auctor urna. Duis quis magna ut diam luctus auctor. Etiam scelerisque ut velit dictum mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
													</div>
												</div>

												<div className="swiper-slide">
													<div className="title">
														<h3>Peer Counsellors</h3>
													</div>
													<div className="content">
														<p>Nulla blandit nibh sit amet tempor tempor. Nullam ac nisi erat. Phasellus quis velit in diam congue laoreet. Cras imperdiet tellus eget fringilla dapibus. Praesent tellus metus, tincidunt sed magna ut, vestibulum interdum ante. Quisque sapien justo, faucibus eget nisi in, iaculis aliquam neque. Nunc tempor neque sed nulla volutpat tincidunt. Praesent ultricies rhoncus cursus.</p>
													</div>
												</div>

												<div className="swiper-slide">
													<div className="title">
														<h3>Student-Led Conferences (SLCs)</h3>
													</div>
													<div className="content">
														<p>Mauris tristique tempor quam vel posuere. Duis quis dolor ipsum. Etiam vestibulum tincidunt dolor, vitae dapibus erat tincidunt a. Nam semper est hendrerit felis egestas, nec rhoncus risus porta. Vivamus gravida, leo sed elementum faucibus, dolor lectus egestas augue, sed viverra purus orci et eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin placerat, elit eget aliquet condimentum, mauris nisl pretium lectus, sit amet convallis orci mauris id ante. Fusce interdum euismod magna, sed pellentesque leo lacinia in. Proin at quam arcu. Nulla ornare tempus enim, a hendrerit diam luctus vitae. Vestibulum bibendum sapien vel quam imperdiet condimentum. Suspendisse potenti. Aliquam erat volutpat. Quisque rutrum nisi ac lorem convallis, elementum facilisis arcu placerat. Fusce eget libero scelerisque, gravida eros vitae, faucibus libero. Sed imperdiet augue at massa porttitor, quis interdum nisi tempus.</p>
													</div>
												</div>

												<div className="swiper-slide">
													<div className="title">
														<h3>Modern Foreign Language</h3>
													</div>
													<div className="content">
														<p>Integer id mauris ut magna dignissim posuere. Sed at leo quis tortor suscipit laoreet a eu ante. Suspendisse commodo at metus sit amet ultrices. Nulla eu hendrerit sem, quis efficitur risus. Cras sit amet lacus sit amet libero interdum tincidunt. Fusce sodales fringilla ligula, non commodo dolor blandit id. Duis vel fermentum ante. Cras sed lectus turpis. Aenean eleifend dapibus risus, id congue augue. Phasellus ultricies congue lacus, ac tincidunt odio varius a.</p>
														<p>Morbi aliquet feugiat enim eu lobortis. Maecenas ut malesuada elit. Nunc in ex augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam pellentesque lorem ac lacus lacinia, sed egestas est mattis. Donec eget dolor et turpis eleifend porttitor. Aliquam vitae sodales velit. Praesent vel imperdiet ipsum, vitae auctor urna. Duis quis magna ut diam luctus auctor. Etiam scelerisque ut velit dictum mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
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