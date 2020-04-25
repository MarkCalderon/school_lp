import React from 'react'

class StaffContent extends React.Component {

	render() {
		return (
			<main className="other">
				<div id="test"></div>
				<div className="inner">
					<section className="kv">
						<div className="inner">
							<div className="kv__container">
								<div className="image" 
								style={{backgroundImage: "url('http://www.smsarjanais.edu.bn/wp-content/uploads/2018/09/smsis-staff.jpg')"}}></div>
								<h1>Teachers and Staff</h1>
							</div>
						</div>
					</section>

					<section className="staff with__image">
						<div className="inner">
							<div className="title">
								<h2>Leadership Department</h2>
							</div>
							<figure>
								<img src="http://www.smsarjanais.edu.bn/wp-content/uploads/2018/09/smsis-admin.jpg" alt="cis" />
							</figure>
						</div>
					</section>

					<section className="staff with__image">
						<div className="inner">
							<div className="title">
								<h2>Preschool Department</h2>
							</div>
							<figure>
								<img src="http://www.smsarjanais.edu.bn/wp-content/uploads/2018/09/smsis-preschool.jpg" alt="cambridge" />
							</figure>
						</div>
					</section>

					<section className="staff with__image">
						<div className="inner">
							<div className="title">
								<h2>Primary Department</h2>
							</div>
							<figure>
								<img src="http://www.smsarjanais.edu.bn/wp-content/uploads/2018/09/smsis-primary.jpg" alt="cambridge" />
							</figure>
						</div>
					</section>
				</div>
			</main>
		)
	}
}

export default StaffContent