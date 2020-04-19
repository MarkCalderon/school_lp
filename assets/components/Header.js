import React from "react"
import { Link } from 'react-router-dom'

class Header extends React.Component {

    render() {
	    return (
	        <header>
		        <div className="inner">
		        	<div className="logo">
		        		<figure>
		        			<img src="./assets/img/logo.png" alt="school logo" />
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
		        						<Link to="/about">
			        						<li><button>Message from the Principal</button></li>
		        						</Link>
		        						<Link to="/mission">
			        						<li><button href="./about/mission/">Vision and Mission</button></li>
		        						</Link>
		        						<Link to="/history">
			        						<li><button href="./about/history/">History</button></li>
		        						</Link>
		        						<li><button href="./about/credentials/">Accreditation</button></li>
		        						<li><button href="./about/partners/">Partners</button></li>
		        						<li><button href="./about/staff/">Staff</button></li>
		        					</ul>
		        					<p><span>EDUCATION ⬤</span></p>
		        					<ul className="inner__list">
		        						<li><button href="#">LEARNING PATH</button></li>
		        						<li><button href="#">STUDENT SUPPORT UNIT</button></li>
		        						<li><button href="#">LEADERSHIP PROGRAM</button></li>
		        						<li><button href="#">FACILITIES</button></li>
		        					</ul>
		        					<ul className="inner__list">
		        						<li><button href="#">SPECIAL NEEDS</button></li>
		        						<li><button href="#">CHILD PROTECTION ACT</button></li>
		        					</ul>					
		        				</div>
		        			</div>
		        		</li>
		        		<li data-scroll="#news" className="link__item no__menu">
		        			<button><span>NEWS</span></button>
		        		</li>
		        		<li data-menu="#menu03" className="link__item">
		        			<button><span>Inquiry</span></button>
		        			<div id="#menu03" className="menu__container">
		        				<div className="inner__menu">
		        					<p><span>SCHOOL SERVICE ⬤</span></p>
		        					<ul className="inner__list">
		        						<li><button href="./">SCHOOL CALENDAR</button></li>
		        						<li><button href="#">NEW/RENEWAL STUDENT ID</button></li>
		        					</ul>
		        					<p><span>FORMS ⬤</span></p>
		        					<ul className="inner__list">
		        						<li><button href="./">NEW/RENEWAL STUDENT APPLICATION</button></li>
		        						<li><button href="#">STUDENT PASS</button></li>
		        						<li><button href="#">LEAVE/MEDICAL LEAVE CERTIFICATE</button></li>
		        						<li><button href="#">INQUIRY/SUGGESTION/FEEDBACK</button></li>
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