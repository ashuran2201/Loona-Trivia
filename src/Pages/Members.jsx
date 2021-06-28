import React, { Component} from 'react';
import MemberList from '../Components/Members/MemberList';
import Menus from "../Components/Homepage/Menus"
import Footer from "../Components/Homepage/Footer"

class Members extends Component {
render() {
return (
<div className="App" id="outer-container">
    <Menus pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <div id="page-wrap">
        <MemberList />
        <Footer />
    </div>
</div>
);
}
}

export default Members;