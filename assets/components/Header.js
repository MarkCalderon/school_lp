import React from "react"
import { Link, Route, Switch } from 'react-router-dom'

class Header extends React.Component {

	menu() {
		document.getElementById('sp__menu').addEventListener('click', function() {
			this.classList.toggle('is__active');
			document.getElementById('sp__menu__list').classList.toggle('is__active')
		});
	}

	componentDidMount() {
		this.menu()
	}

    render() {
	    return (
	        <header>
		        <div className="inner">
		        	<div className="logo">
		        		<figure>
		        			<img src="/assets/img/logo.png" alt="school logo" />
		        		</figure>
		        		<span>PLACE SCHOOLER</span>
		        	</div>
		        	<ul className="list link">
		        		<li className="link__item no__menu">
			        		<Switch>
			        			<Route path="/" exact>
									<button data-scroll="#top"><span>Home</span></button>
								</Route>
			        			<Route path="*">
				        			<Link to="/">
										<button><span>Home</span></button>
									</Link>
								</Route>
							</Switch>
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
		        					</ul>
		        					<p><span>EDUCATION ⬤</span></p>
		        					<ul className="inner__list">
		        						<Link to="/education">
			        						<li><button>LEARNING PATH</button></li>
		        						</Link>
		        						<Link to="/education/nuture">
			        						<li><button>STUDENT EMPOWERMENT</button></li>
		        						</Link>
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
		        					<p><span>CATALOGS ⬤</span></p>
		        					<ul className="inner__list">
		        						<li><a target="_blank" href="#">SCHOOL CALENDAR</a></li>
		        						<li><a target="_blank" href="#">STUDENT ID</a></li>
		        						<li><a target="_blank" href="#">GATE PASS</a></li>
		        					</ul>
		        					<p><span>DOWNLOADABLE FORMS ⬤</span></p>
		        					<ul className="inner__list">
		        						<li><a target="_blank" href="#">NEW/RENEWAL STUDENT APPLICATION</a></li>
		        						<li><a target="_blank" href="#">MEDICAL LEAVE/VACATION</a></li>
		        						<li><a target="_blank" href="#">WITHDRAWAL NOTICE</a></li>
		        					</ul>
		        				</div>
		        			</div>
		        		</li>
		        	</ul>
		        	<div id="sp__menu" className="menu">
		        		<div className="line"></div>
		        		<div className="line"></div>
		        		<div className="line"></div>
		        	</div>
		        	<ul id="sp__menu__list" className="list link__sp">
		        		<Switch>
		        			<Route path="/" exact>
								<li data-scroll="#top"><span>Home</span></li>
							</Route>
		        			<Route path="*">
			        			<Link to="/">
									<li><span>Home</span></li>
								</Link>
							</Route>
						</Switch>
							<li data-spmenu="#menu02sp">
								<span>About</span>
								<ul id="#menu02sp" className="inner__list">
	        						<Link to="/about/">
		        						<li><button>History</button></li>
	        						</Link>
	        						<Link to="/about/principal/">
		        						<li><button>Message from the Principal</button></li>
	        						</Link>
	        						<Link to="/about/mission/">
		        						<li><button>Vision and Mission</button></li>
	        						</Link>
	        						<Link to="/education">
		        						<li><button>LEARNING PATH</button></li>
	        						</Link>
	        						<Link to="/education/nuture">
		        						<li><button>STUDENT EMPOWERMENT</button></li>
	        						</Link>
								</ul>
							</li>
			        		<Switch>
								<Route path="/" exact>
									<li data-scroll="#news" className="link__item no__menu">
										<span>NEWS</span>
									</li>
								</Route>
								<Route path="*">
			    					<Link to="/">
			    						<li className="link__item no__menu">
			    							<span>NEWS</span>
			    						</li>
			    					</Link>
								</Route>
							</Switch>
						<li data-spmenu="#menu03sp">
							<span>Inquiry</span>
							<ul id="#menu03sp" className="inner__list">
        						<li><a target="_blank" href="#">SCHOOL CALENDAR</a></li>
        						<li><a target="_blank" href="#">STUDENT ID</a></li>
        						<li><a target="_blank" href="#">GATE PASS</a></li>
        						<li><a target="_blank" href="#">NEW/RENEWAL STUDENT APPLICATION</a></li>
        						<li><a target="_blank" href="#">MEDICAL LEAVE/VACATION</a></li>
        						<li><a target="_blank" href="#">WITHDRAWAL NOTICE</a></li>
							</ul>
						</li>
		        	</ul>
		        </div>
	        </header>
	    )
    }
}

export default Header