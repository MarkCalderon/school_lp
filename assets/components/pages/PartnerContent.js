import React from 'react'

class PartnerContent extends React.Component {
	
	componentDidMount() {
		window.scrollTo(0,0)
	}
	
	render() {
		return (
			<main className="other">
				<div id="test"></div>
				<div className="inner">
					<section className="kv">
						<div className="inner">
							<div className="kv__container">
								<div className="image" 
								style={{backgroundImage: "url('http://www.smsarjanais.edu.bn/wp-content/uploads/2018/08/SMSIS-SEG-croppped2.jpg')"}}></div>
								<h1>PARTNERSHIP</h1>
							</div>
						</div>
					</section>

					<section className="partner with__image">
						<div className="inner">
							<figure>
								<img src="/assets/img/partner/cis-member.jpg" alt="cis" />
							</figure>
							<div className="content">
								<p>In August 2016, Seri Mulia Sarjana International School underwent the Council of International Schools (CIS) Preparatory Evaluation.  The Preparatory Evaluation lasted for 4 days by two CIS Representatives, including a CIS School Support and Evaluation Officer.  The Preparatory Evaluation resulted to success which made Seri Mulia Sarjana International School receive its Accreditation Candidate status. The visit was to ascertain the school’s readiness to undertake the Self-Study.  The Self-Study process is the most important part of the whole evaluation and accreditation cycle, both in terms of time and effort and in the value to be derived.</p>
								<p>Our school has identified and drawn improvement schemes to address some recommendations and observations that need further enhancement.  Independent surveys on School Performance are sent to the members of the school community in order to measure and evaluate the current standing of the school.  The independent surveys are also used to collect feedbacks from parents, teachers, staff, students and members of the board, which will be used in the ongoing continuous school improvement process.</p>
							</div>
						</div>
					</section>

					<section className="partner with__image">
						<div className="inner">
							<figure>
								<img src="/assets/img/partner/cambridge-primary2.png" alt="cambridge" />
							</figure>
							<div className="content">
								<p>Seri Mulia Sarjana School is the only Cambridge Primary School in Brunei that offers Cambridge Primary curriculum from  Ages 5 – 11 (Stage 1 – 6). The school is a registered Cambridge International School by CAIE and serves as a Test Centre in Brunei for Cambridge Primary Checkpoint and Cambridge ICT Starters certification. Moreovder, SMSIS is the only school in Brunei that provides Cambridge Progression Test, a comprehensive diagnostic assessments for English, Maths and Science (compulsory assessment at the end of each stage: Year 3-6 ).</p>
								<p>As a Cambridge Primary School, SMSIS’ key strengths are  Assessments, International Curriculum and Recognition, Global Community, Teaching and Learning. See Cambridge public website for more info.</p>
							</div>
						</div>
					</section>

				</div>
			</main>
		)
	}
}

export default PartnerContent