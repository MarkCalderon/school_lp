import React from 'react'

class VisionContent extends React.Component {
	
	componentDidMount() {
		window.scrollTo(0,0)
		document.getElementById('sp__menu__list').classList.remove('is__active')
		document.getElementById('sp__menu').classList.remove('is__active')
	}
	
	render() {
		return (
			<main className="other">
				<div id="test"></div>
				<div className="inner">
					<section className="kv">
						<div className="inner">
							<div className="kv__container">
								<div className="image" style=
								{{ backgroundImage: "url('/assets/img/mission/mission_img-01.jpg')" }}></div>
								<h1>VISION AND MISSION</h1>
							</div>
						</div>
					</section>

					<section className="mission">
						<div className="inner">
							<div className="content">
								<p><strong>VISION</strong></p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida, turpis ut ultrices sagittis, tellus mauris aliquam orci, ut aliquet lorem purus quis est. Aenean ut lorem nec neque condimentum sodales in sed libero. Nam varius vestibulum viverra. Aenean tempor, mauris eu vulputate imperdiet, nulla quam fermentum felis, et pretium leo ipsum a est. Quisque rutrum metus cursus sem feugiat, eget ornare augue venenatis. Donec arcu nulla, venenatis id mi at, fermentum vulputate tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis turpis quam. Nunc rhoncus tortor in viverra placerat.</p>
								<p><strong>MISSION</strong></p>
								<p>Nam risus erat, bibendum a aliquet vitae, lobortis elementum urna. Pellentesque vitae tortor elit. Donec pulvinar tempus odio, sed pellentesque odio condimentum vel. Maecenas nec ante eu purus aliquet finibus ac at ante. Nulla bibendum mollis enim eget commodo. Duis consectetur nisl pulvinar tempus congue. Praesent at leo eget lorem facilisis aliquam. Maecenas blandit orci sed pretium pretium. Ut a bibendum lectus. Donec vestibulum sem id quam eleifend, sed porttitor nisi facilisis. Curabitur finibus eleifend ex non rhoncus.</p>
							</div>
						</div>
					</section>

				</div>
			</main>
		)
	}
}

export default VisionContent