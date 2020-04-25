import React from "react"
import { Link, Route, Switch } from 'react-router-dom'

class Header extends React.Component {

    render() {
	    return (
	        <header>
		        <div className="inner">
		        	<div className="logo">
		        		<figure>
		        			<img src="/assets/img/logo.png" alt="school logo" />
		        		</figure>
		        		<span>SERI MULIA SARJANA<br/>INTERNATIONAL SCHOOL</span>
		        	</div>
		        	<ul className="list link">
		        		<li className="link__item no__menu">
		        			<Link to="/">
			        			<button><span>Home</span></button>
		        			</Link>
		        		</li>
		        		<li data-menu="#menu02" className="link__item">
		        			<button><span>About</span></button>
		        			<div id="#menu02" className="menu__container">
		        				<div className="inner__menu">
		        					<p><span>OUR SCHOOL ⬤</span></p>
		        					<ul className="inner__list">
		        						<Link to="/about/">
			        						<li><button>History</button></li>
		        						</Link>
		        						<Link to="/about/principal/">
			        						<li><button>Message from the Principal</button></li>
		        						</Link>
		        						<Link to="/about/mission/">
			        						<li><button>Vision and Mission</button></li>
		        						</Link>
		        						<Link to="/about/partner/">
			        						<li><button>Partners</button></li>
		        						</Link>
		        						<Link to="/about/staff/">
			        						<li><button>Staff</button></li>
		        						</Link>
		        					</ul>
		        					<p><span>EDUCATION ⬤</span></p>
		        					<ul className="inner__list">
		        						<Link to="/education">
			        						<li><button>LEARNING PATH</button></li>
		        						</Link>
		        						<li><button>STUDENT EMPOWERMENT</button></li>
		        						<li><button>STUDENT SUPPORT</button></li>
		        					</ul>					
		        				</div>
		        			</div>
		        		</li>
		        		<Switch>
							<Route path="/" exact>
								<li data-scroll="#news" className="link__item no__menu">
									<button><span>NEWS</span></button>
								</li>
							</Route>
							<Route path="*">
		    					<Link to="/">
		    						<li className="link__item no__menu">
		    							<button><span>NEWS</span></button>
		    						</li>
		    					</Link>
							</Route>
						</Switch>
		        		<li data-menu="#menu03" className="link__item">
		        			<button><span>Inquiry</span></button>
		        			<div id="#menu03" className="menu__container">
		        				<div className="inner__menu">
		        					<p><span>SCHOOL SERVICE ⬤</span></p>
		        					<ul className="inner__list">
		        						<li><a target="_blank" href="http://www.smsarjanais.edu.bn/wp-content/uploads/2020/02/2020-Academic-Calendar-for-parents.pdf">SCHOOL CALENDAR</a></li>
		        						<li><button href="#">NEW/RENEWAL STUDENT ID</button></li>
		        					</ul>
		        					<p><span>DOWNLOADABLE FORMS ⬤</span></p>
		        					<ul className="inner__list">
		        						<li><a target="_blank" href="http://www.smsarjanais.edu.bn/wp-content/uploads/2018/08/SMSIS-Enrollment-Form.pdf">NEW/RENEWAL STUDENT APPLICATION</a></li>
		        						<li><a target="_blank" href="http://www.smsarjanais.edu.bn/wp-content/uploads/2018/08/Expression-of-Interest-Form.pdf">EXPRESSION OF INTEREST</a></li>
		        						<li><a target="_blank" href="http://www.smsarjanais.edu.bn/wp-content/uploads/2018/07/noticeofwithdrawal.pdf">WITHDRAWAL NOTICE</a></li>
		        					</ul>
		        					<p><span>OTHERS ⬤</span></p>
		        					<ul className="inner__list">
		        						<li><button href="#">FREQUENTLY ASKED QUESTIONS</button></li>
		        						<li><button href="#">CAREER</button></li>
		        					</ul>					
		        				</div>
		        			</div>
		        		</li>
		        	</ul>
		        </div>
	        </header>
	    )
    }
}

export default Header