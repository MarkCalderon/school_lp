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
				this.loadSwiper()
			})
		})
	}

	componentDidMount() {
		this.tabSelector()
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
														<p>Early Years Foundation Stage (EYFS) is an international standardised, educational programme designed as a gradual introduction to a life-long learning and formal instruction. EYFS sets standards to ensure that children learn and develop well in a healthy and safe environment as they begin to optimize their potentials. It stimulates learners’ “school readiness” and provides them broad range of knowledge and skills that strongly supports the right foundation for good future progress throughout school and life.</p>
														<p>The programme is taught in a thematic approach where it works around two learning areas; prime and specific. The prime areas (Physical, Social and Emotional Development, Communication and Language and Physical Development) are substantial because they lay the foundations for children’s success in all other areas of learning and of life. Specific areas (Literacy, Mathematics, Knowledge and Understanding the World and Creative Development) provide the range of experiences and opportunities for children to broaden their content knowledge and critical thinking skills.</p>
														<p>Most significantly, EYFS recognizes the value of play as it provides array of avenues for purposeful learning and various opportunities to allow them to connect to their work environments, furthermost to the real world.</p>
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
														<p>Primary classes are running on Cambridge Primary Programme (CPP) since 2013 for English, Mathematics, Science and ICT Starters subjects. This programme is developed by University of Cambridge and designed for young students of Primary levels. Cambridge Primary Programme helps learners to become confident, responsible, reflective, innovative and engaged. In addition to that, CPP provides a solid foundation for later stages of education.</p>
														<p>Cambridge Primary offers integrated assessment. The assessment structure tracks learner progression throughout primary education. The types of assessment within the Cambridge Primary Stages are:</p>
														<ol>
															<li>Cambridge Primary Progression Tests: A series of tests from stages 3 to 6, which is used within the school to monitor progress of individuals and classes of learners.</li>
															<li>Cambridge Primary Checkpoint: An innovative diagnostic testing service designed to help students learn by providing comprehensive feedback on their strengths and weaknesses in the key curriculum areas. Cambridge Primary Checkpoint is generally taken at the end of Stage 6.</li>
															<li>Cambridge ICT Starters: Assess students through a structured scheme of assessment, operating at three levels namely Initial steps, Next steps and On track.</li>
														</ol>
														<p>Each module of syllables contains Assessment Criteria, which must be met to achieve a Pass or Merit, and an Example Assessment Activity.</p>
													</div>
												</div>

												<div className="swiper-slide">
													<div className="title">
														<h3>UK Based Framework</h3>
													</div>
													<div className="content">
														<p>The school adopts the National Curriculum in England for non-core subjects: PSHE, Social Studies, Music, Physical Education and Art and Design.</p>
														<p>The national curriculum provides learners with an introduction to the essential knowledge that they need to be educated citizens. It provides an outline of core knowledge around which teachers can develop exciting and stimulating lessons to promote the development of learners’ knowledge, understanding and skills as part of the wider school curriculum.</p>
													</div>
												</div>

												<div className="swiper-slide">
													<div className="title">
														<h3>Brunei National Curriculum</h3>
													</div>
													<div className="content">
														<p>MIB, Bahasa Melayu and Islamic Religious Knowledge follows the SPN 21 national curriculum. These subjects are COMPULSORY to all local and expatriate Muslim students in the school.</p>
														<p>SPN 21 is the acronym for Sistem Pendidikan Negara Abad Ke-21, The National Education System for the 21st Century which has been approved by the Ministry of Education, Brunei Darussalam. It is broad, balanced, relevant and differentiated, and takes each individual’s strengths and weaknesses into account whilst making provision for progression and continuity.</p>
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