import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Common
import Header from "./../components/Header"
import Footer from "./../components/Footer"
import Modal from "./../components/Modal"
import './Common.js'

// Specific Pages
import TopContent from "./../components/pages/TopContent"
import AboutContent from "./../components/pages/AboutContent"

class App extends React.Component {

    render() {
        return(
        	<Router>
            	<Header />

            	<Switch>
            		<Route path="/" exact component={TopContent}/>
            		<Route path="/about" component={AboutContent}/>
            	</Switch>

            	<Modal />
    	        <Footer />

        	</Router>
        )
    }
}

export default App