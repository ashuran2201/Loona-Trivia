import React, { Component} from 'react';
import MemberDetail from '../Components/Members/MemberDetail';
import Menus from "../Components/Homepage/Menus"
import Footer from "../Components/Homepage/Footer"

class MemberDetails extends Component {
render() {
return (
<div className="App" id="outer-container">
    <Menus pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <div id="page-wrap">
        <MemberDetail />
        <Footer />
    </div>
</div>
);
}
}

export default MemberDetails;