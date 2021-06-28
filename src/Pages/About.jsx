import React, { Component} from 'react';
import AboutLoona from '../Components/About/AboutLoona';
import Menus from "../Components/Homepage/Menus"
import Footer from "../Components/Homepage/Footer"

class About extends Component {
render() {
return (
<div className="App" id="outer-container">
    <Menus pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <div id="page-wrap">
        <AboutLoona />
        <Footer />
    </div>
</div>
);
}
}

export default About;