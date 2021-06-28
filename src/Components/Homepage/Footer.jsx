import React, { Component} from 'react';
import logo from "../../Style/Images/ORBITALMOON-removebg-preview.png";
import "../../Style/Scss/Footer.scss";
import Container from '@material-ui/core/Container';
class Footer extends Component {
render() {
return (
<Container className="footer-container" maxWidth="xl">
    <img src={logo} alt="ORBITALMOON" className="logo" />
    <p className="orbits">
        Created by an orbits for orbits around the world
    </p>
    <p className="arr">© 2021 Ashuran2201.  All rights reserved.</p>
</Container>
)
}
}
export default Footer;