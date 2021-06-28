import React, {Component} from 'react';
import { bubble as Menu } from 'react-burger-menu';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import "../../Style/Scss/Menus.scss";

let RadiumLink = Radium(Link);

class Menus extends Component{
render () {
return (
<div className="menus">
    <Menu>
            <RadiumLink className="menu-item" to={'/'} >
                Home
            </RadiumLink>
            <RadiumLink className="menu-item" to={'/quiz'} >
                Quiz
            </RadiumLink>
            <RadiumLink className="menu-item" to={'/about'}>
                About
            </RadiumLink>
            <RadiumLink className="menu-item" to={'/loonaverse'} >
                LOONAVERSE
            </RadiumLink>
            <RadiumLink className="menu-item" to={'/members'} >
                Members
            </RadiumLink>
            <RadiumLink className="menu-item" to={'/discography'} >
                Discography
            </RadiumLink>
            <RadiumLink className="menu-item" to={'/musicvideo'} >
                Music Video
            </RadiumLink>
            <RadiumLink className="menu-item" to={'/contact'} >
                Contact
            </RadiumLink>
            <div className="sns-icons">
                <RadiumLink className="sns-icon" to={'/'} >
                    <TwitterIcon style={{ fontSize: 50 }} />
                </RadiumLink>
                <RadiumLink className="sns-icon" to={'/'} >
                    <InstagramIcon style={{ fontSize: 50 }} />
                </RadiumLink>
                <RadiumLink className="sns-icon" to={'/'} >
                    <LinkedInIcon style={{ fontSize: 50 }} />
                </RadiumLink>
                <RadiumLink className="sns-icon" to={'/'} >
                    <MailOutlineIcon style={{ fontSize: 50 }} />
                </RadiumLink>
            </div>
    </Menu>
</div>
);
};
};

export default Menus;