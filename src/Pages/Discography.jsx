import React, { Component} from 'react';
import DiscoDetails from '../Components/Discography/Disco-Detail';
import Menus from "../Components/Homepage/Menus"
import Footer from "../Components/Homepage/Footer"

class Discography extends Component {
render() {
return (
<div className="App" id="outer-container">
    <Menus pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <div id="page-wrap">
        <DiscoDetails />
        <Footer />
    </div>
</div>
);
}
}

export default Discography;