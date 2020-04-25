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
import VisionContent from "./../components/pages/VisionContent"
import HistoryContent from "./../components/pages/HistoryContent"
import PartnerContent from "./../components/pages/PartnerContent"
import StaffContent from "./../components/pages/StaffContent"
import LearningContent from "./../components/pages/LearningContent"
import NutureContent from "./../components/pages/NutureContent"

class App extends React.Component {
    render() {
        return (
            <Router>
                <Header />

                <Switch>
                    <Route path="/" exact component={TopContent}/>
                    <Route path="/about" exact component={HistoryContent}/>
                    <Route path="/about/principal" component={AboutContent}/>
                    <Route path="/about/mission" component={VisionContent}/>
                    <Route path="/about/partner" component={PartnerContent}/>
                    <Route path="/about/staff" component={StaffContent}/>
                    <Route path="/education" exact component={LearningContent}/>\
                    <Route path="/education/nuture" component={NutureContent}/>
                    <Route path="*" component={TopContent}/>
                </Switch>

                <Modal />
                <Footer />

            </Router>
        )
    }
}

export default App