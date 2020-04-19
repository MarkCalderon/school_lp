import React from 'react'

class AboutContent extends React.Component {

	render() {
		return(
			<main className="other">
				<div id="test"></div>
				<div className="inner">
					<section className="kv">
						<div className="inner">
							<div className="kv__container">
								<h1>MESSAGE FROM THE PRINCIPAL</h1>
							</div>
						</div>
					</section>

					<section className="message">
						<div className="inner">
							<figure>
								<div className="image" style ={ { backgroundImage: "url('http://www.smsarjanais.edu.bn/wp-content/uploads/2018/08/wchong.jpg')" } }></div>
							</figure>

							<div className="content">
								<p>Since the school’s foundation in 1998, the mission of the school has been focusing on providing holistic education to its students with the vision of being at the forefront in providing quality international education in Brunei Darussalam.</p>
								<p>Seri Mulia Sarjana International School (SMSIS) is known for providing quality Early Years and Primary education foundation to its students preparing them for their Secondary years no matter where they go and which school they wish to enrol to.</p>
								<p>As you browse through our website you will be acquainted with our rich curriculum bundled with broad co-curricular programmes aimed at developing well-rounded students.  At SMSIS, we prepare our students to be 21st century learners with these attributes; innovative, confident, responsible, reflective and engaged. While achieving excellence in academics is the key, it is just as important to be good in co-curricular and extra-curricular activities. Likewise, we hope for our students to be global citizens who are broad-minded and inclined to embrace and appreciate cultural diversity. The 20 nationalities at SMSIS open up opportunities for our students and the entire school community to explore and value cultural differences and similarities of which this experience will extend well beyond the students’ knowledge.</p>
								<p>As stated in our vision statement “….we envision a community of learners involving students, parents, teachers and staff that are engaged”, we warmly encourage parents to be part of our happy and vibrant community by joining our SMSIS Parent-Teacher Association.  As a community, we work towards the spirit of providing education for all our students. We trust that the school and the students will benefit from your support with the diverse expertise and experience from the community.</p>
								<p>SMSIS is a forward-thinking school, the dynamic team of teachers and staff are always on the go by being innovative, creative and reflective in delivering quality learning inside and outside the classrooms.</p>
								<p>Do come, visit us and see for yourself what makes Seri Mulia Sarjana International School unique and at the same time, feel the warmth and happy atmosphere of the school.</p>
								<p>Best Regards,</p>
								<p><strong>Ms Chong Wee Meng</strong><small>Principal</small></p>
							</div>
						</div>
					</section>

				</div>
			</main>
		)
	}
}

export default AboutContent