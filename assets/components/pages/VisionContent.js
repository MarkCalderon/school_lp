import React from 'react'

class VisionContent extends React.Component {

	render() {
		return (
			<main className="other">
				<div id="test"></div>
				<div className="inner">
					<section className="kv">
						<div className="inner">
							<div className="kv__container">
								<div className="image" style=
								{{ backgroundImage: "url('http://www.smsarjanais.edu.bn/wp-content/uploads/2018/08/MVE-1.jpg')" }}></div>
								<h1>VISION AND MISSION</h1>
							</div>
						</div>
					</section>

					<section className="mission">
						<div className="inner">
							<div className="content">
								<p><strong>VISION</strong></p>
								<p>Seri Mulia Sarjana International School shall be at the forefront in providing quality international education in Brunei Darussalam. We envision a community of learners involving students, parents, teachers, and staff that are engaged, together aspiring for excellence in an environment that is positive and nurturing.</p>
								<p><strong>MISSION</strong></p>
								<p>Seri Mulia Sarjana International School aims to provide quality international education accessible to many. We are committed to the development of the whole child; encouraging excellence in all areas by delivering a curriculum that is strong academically and enriched with arts and sports. We do this in an environment that values each child as an individual and espousing global citizenship and social awareness throughout the school community.</p>
							</div>
						</div>
					</section>

				</div>
			</main>
		)
	}
}

export default VisionContent