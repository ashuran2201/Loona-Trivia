import React, { Component} from 'react';
import Idalso from '../Components/Loonaverse/Idalso';
import Menus from "../Components/Homepage/Menus"
import Footer from "../Components/Homepage/Footer"

class Loonaverse extends Component {
render() {
return (
<div className="App" id="outer-container">
    <Menus pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <div id="page-wrap">
        <Idalso />
        <Footer />
    </div>
</div>
);
}
}

export default Loonaverse;