import React from 'react'

class LearningContent extends React.Component {

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
		  		slidesPerView: 3,
		  		watchSlidesVisibility: true,
		  		watchSlidesProgress: true,
			});

		  	galleryName = new Swiper('.sliderWithThumb', {
		  		spaceBetween: 20,
		  		speed: 1500,
			  	autoplay: {
			  		delay: 5000,
			  		disableOnInteraction: true,
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
				this.loadSwiper()
			})
		})
	}

	componentDidMount() {
		this.tabSelector()
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
								style={{backgroundImage: "url('/assets/img/education/education_kv.jpg')"}}></div>
								<h1>EDUCATION</h1>
							</div>
						</div>
					</section>

					<section className="sub-learn">
						<div className="inner">
							<div className="content">
								<div className="button__selector">
									<button className="button is__active" data-tab="#tab01" style={{ backgroundImage: "url('/assets/img/education/education_preschool.jpg')" }}>
										<span>EARLY YEARS CURRICULUM</span>
									</button>
									<button className="button" data-tab="#tab02" style={{ backgroundImage: "url('/assets/img/education/education_primary.jpg')" }}>
										<span>PRIMARY YEARS CURRICULUM</span>
									</button>
								</div>

								<div id="#tab01" className="content__holder is__active">
									<div className="inner">
										<div className="slider">
											<div className="swiper-wrapper">
												<div className="swiper-slide">
													<div className="title">
														<h3>Early Years Foundation Stage</h3>
													</div>
													<div className="content">
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla hendrerit id erat in gravida. Donec eu ipsum ac sem finibus facilisis id in lectus. Fusce congue purus ut nisl auctor, non aliquam nunc accumsan. Morbi finibus lacus at varius rhoncus. Nam posuere, sapien ut egestas ullamcorper, nibh arcu congue urna, vulputate feugiat lacus ligula quis nunc. Nulla rhoncus augue sapien, a lobortis augue tincidunt nec. Nulla tincidunt risus id viverra finibus.</p>
														<p>Quisque interdum sodales faucibus. Mauris ac justo ut velit sodales tristique. Morbi orci libero, laoreet at mi non, luctus blandit libero. Quisque vitae justo vitae ante sollicitudin eleifend. Curabitur tempor augue iaculis felis ullamcorper convallis ut sit amet nunc. Aliquam ullamcorper est eget nisl blandit pretium. Cras euismod pretium vulputate.</p>
														<p>Curabitur nec tempus ipsum, id blandit est. Duis porttitor tellus vel dignissim varius. Curabitur sagittis tristique sapien quis aliquam. Integer erat felis, euismod id nisl in, placerat ultrices dolor. Mauris tempus orci turpis, a tincidunt orci fringilla a. Aenean maximus ornare sapien cursus condimentum. Pellentesque fermentum porttitor dapibus. Integer sed augue pretium, ultricies risus id, auctor odio. Sed aliquet euismod tortor tincidunt feugiat. Maecenas tincidunt nisi risus, non pulvinar arcu accumsan ut. Morbi ut arcu est. Donec ultrices a ipsum et fringilla. Suspendisse ex leo, elementum sit amet turpis at, porta eleifend ante.</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div id="#tab02" className="content__holder">
									<div className="inner">
										<div className="sliderThumb">
											<div className="swiper-wrapper">
												<div className="swiper-slide"><h4>Cambirdge Primary Curriculum (CPC)</h4></div>
												<div className="swiper-slide"><h4>UK Based Framework</h4></div>
												<div className="swiper-slide"><h4>Brunei National Curriculum</h4></div>
											</div>
										</div>
										<div className="sliderWithThumb">
											<div className="swiper-wrapper">
												<div className="swiper-slide">
													<div className="title">
														<h3>Cambridge Primary Curriculum (CPC)</h3>
													</div>
													<div className="content">
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut pharetra magna. Etiam maximus pellentesque varius. Integer volutpat, velit a malesuada suscipit, orci dui condimentum turpis, elementum venenatis nisi dui sed quam. Sed pulvinar, mauris sed laoreet molestie, dolor orci aliquam tellus, ac posuere eros ligula et nisi. Nullam vitae dolor pretium odio ullamcorper euismod sit amet eu velit. Nulla id ante lobortis, mattis orci at, bibendum turpis. Nunc nec facilisis erat. Proin gravida sodales nisi et porttitor. Praesent ac urna maximus, ultrices nibh vel, varius elit. Aenean ullamcorper dui a ligula blandit, non maximus nibh bibendum. Phasellus vitae urna luctus, finibus urna sed, mollis ante. Donec semper ligula ac gravida posuere. Morbi in nisi sit amet arcu molestie bibendum. Donec scelerisque, ipsum dictum malesuada eleifend, erat ligula efficitur purus, sed hendrerit enim justo at magna. Nunc id rhoncus mi. Maecenas id imperdiet sem.</p>
														<ol>
															<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
															<li>Vestibulum interdum nunc ac mauris cursus, at dignissim odio tristique.</li>
															<li>Duis posuere massa eget purus maximus, quis ullamcorper ante elementum.</li>
														</ol>
														<p>Morbi vitae dui id metus interdum venenatis quis eu ante. Morbi facilisis condimentum odio, eget rutrum lectus luctus condimentum. Donec tempus pulvinar nibh, a consectetur ipsum vestibulum sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum vestibulum posuere nunc. Aenean condimentum libero et vestibulum sagittis. Phasellus malesuada, ligula sed vulputate pharetra, leo nunc rhoncus orci, a cursus leo magna et urna. Praesent egestas, nulla quis pharetra elementum, lorem neque dapibus metus, vitae gravida leo augue eu augue. Aliquam hendrerit lorem sed odio sagittis posuere. Mauris et erat sed odio eleifend fermentum vel pulvinar velit. Donec et lectus facilisis ex tincidunt dignissim non id enim.</p>
													</div>
												</div>

												<div className="swiper-slide">
													<div className="title">
														<h3>UK Based Framework</h3>
													</div>
													<div className="content">
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit tortor nec ante tincidunt tincidunt. Vestibulum finibus arcu justo, eget varius urna viverra sit amet. Praesent fringilla ac est sed tincidunt. Sed cursus consectetur nibh, quis consectetur diam placerat at. Curabitur orci lorem, ornare ut posuere ac, faucibus a elit. Quisque vel odio tincidunt, sollicitudin augue ut, suscipit mauris. Nam elementum interdum purus ac luctus. Donec feugiat eu neque pellentesque pellentesque. Etiam blandit luctus nibh in egestas.</p>
														<p>Ut maximus, magna ut faucibus malesuada, nulla quam vestibulum quam, sit amet hendrerit magna sem id massa. In pellentesque mi in velit euismod auctor. Nunc non ultrices arcu. Aliquam sit amet rhoncus felis. Morbi sed tempus elit. Nulla consequat ex non urna auctor, et sodales ipsum tincidunt. In vel mauris nisl. Sed nec pulvinar nisi. Curabitur erat ex, blandit iaculis iaculis sed, porta blandit sem. Morbi ac augue eu est condimentum posuere. Ut pharetra mauris eget enim mollis lobortis.</p>
													</div>
												</div>

												<div className="swiper-slide">
													<div className="title">
														<h3>Brunei National Curriculum</h3>
													</div>
													<div className="content">
														<p>Fusce malesuada neque vitae euismod blandit. Fusce suscipit luctus erat at porttitor. Aliquam efficitur tristique eros, ut vehicula ipsum pellentesque tempor. Nulla convallis ipsum sed nunc dictum, sit amet lobortis leo tempus. Praesent eu consequat libero. Vivamus facilisis, ante nec dignissim facilisis, risus ligula varius felis, a maximus lacus magna at quam. Nullam vel semper felis. Etiam dictum tincidunt metus ut commodo. Curabitur ex diam, eleifend quis justo vitae, scelerisque mollis ex. In nulla nisi, varius vitae mauris id, ultricies tincidunt sem. Morbi placerat orci non turpis luctus, ut ornare sapien lobortis. Aliquam sit amet consequat purus, non sollicitudin diam. Curabitur vitae malesuada enim. In dui sapien, venenatis et volutpat sit amet, convallis in dui.</p>
														<p>In tristique auctor ligula, vitae viverra erat tincidunt a. Pellentesque sollicitudin, enim eu tempor efficitur, lacus nisl facilisis lorem, in ullamcorper urna risus sit amet sem. Sed consectetur aliquam urna, at pulvinar mi accumsan semper. Pellentesque sit amet lectus justo. Quisque condimentum orci ac eros ultrices faucibus. Nulla efficitur quis massa quis ultricies. Aliquam metus leo, lacinia ut accumsan a, tincidunt in sem. Donec sed tempus lacus. Vestibulum rhoncus hendrerit nisl, et lobortis turpis congue non. Phasellus ultrices tincidunt purus nec blandit.</p>
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

export default LearningContent