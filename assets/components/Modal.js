import React from 'react'

function Modal() {
	return (
		<div id="modal">
			<div className="inner">
				<div className="request" id="#request">
					<div id="close"></div>
					<div className="inner">
						<h4 className="title">FORMS</h4>
						<div className="list">
							<a href="#" target="_blank" className="item">
								<span>NEW/RENEWAL<br/>STUDENT</span>
							</a>

							<a href="#" target="_blank" className="item">
								<span>LEAVE/MEDICAL</span>
							</a>

							<a href="#" target="_blank" className="item">
								<span>STUDENT PASS</span>
							</a>

							<a href="#" target="_blank" className="item">
								<span>STUDENT ID</span>
							</a>

							<a href="#" target="_blank" className="item">
								<span>BOOK LIST</span>
							</a>

							<a href="#" target="_blank" className="item">
								<span>CCA</span>
							</a>

							<a href="#" target="_blank" className="item">
								<span>EXTRA CLASS</span>
							</a>

							<a href="#" target="_blank" className="item">
								<span>BIRTHDAY<br/>ACTIVITIES</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal