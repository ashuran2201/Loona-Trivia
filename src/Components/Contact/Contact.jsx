import React, { Component} from 'react';
import axios from 'axios';
import "../../Style/Scss/Discography.scss";
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';

class Contact extends Component {
// constructor(props) {
// super(props);
// this.state = {
// discSolo: [],
// discSub: [],
// discGroup: []

// }
// }


// componentDidMount() {
// axios.all([
// axios.get("https://orbitalmoon-data.herokuapp.com/solo"),
// axios.get("https://orbitalmoon-data.herokuapp.com/sub_unit"),
// axios.get("https://orbitalmoon-data.herokuapp.com/group")
// ])
// .then(axios.spread((soloRes, subRes, groupRes) => {

// this.setState({
// discSolo: soloRes.data,
// discSub: subRes.data,
// discGroup: groupRes.data
// });
// }));
// }

render() {

return (
    <div> Work in Progress</div>
);
}
}

export default Contact;