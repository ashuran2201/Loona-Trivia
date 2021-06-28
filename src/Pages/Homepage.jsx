import React, { Component} from 'react';
import Content from "../Components/Homepage/Content"
import Menus from "../Components/Homepage/Menus"
import Footer from "../Components/Homepage/Footer"

class Home extends Component {
render() {
return (
<div className="App" id="outer-container">
    <Menus pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <div id="page-wrap">
        <Content />
        <Footer />
    </div>
</div>
);
}
}

export default Home;