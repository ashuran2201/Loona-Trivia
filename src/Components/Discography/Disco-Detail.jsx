import React, { Component} from 'react';
import axios from 'axios';
import "../../Style/Scss/Discography.scss";
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';

class DiscoDetails extends Component {
constructor(props) {
super(props);
this.state = {
discSolo: [],
discSub: [],
discGroup: []

}
}


componentDidMount() {
axios.all([
axios.get("https://orbitalmoon-data.herokuapp.com/solo"),
axios.get("https://orbitalmoon-data.herokuapp.com/sub_unit"),
axios.get("https://orbitalmoon-data.herokuapp.com/group")
])
.then(axios.spread((soloRes, subRes, groupRes) => {

this.setState({
discSolo: soloRes.data,
discSub: subRes.data,
discGroup: groupRes.data
});
}));
}

render() {

return (
<Container className="container" maxWidth="xl">
    <div className="disc-container">
        <h1 className="title">
            Discography
        </h1>
        <h2 className="sub-title">Solo</h2>
        <div className="cards">
            {this.state.discSolo.map((a) => {
            let Id = a.id;
            return (
            <div className="card" key={a.id}>
                <Link className="test" to={{pathname: "/solo", value: {Id}}}>
                <img src={a.cover_art} alt="" className="disc-image" />
                <h5 className="card-title">{a.title}</h5>
                </Link>
            </div>
            )})}
        </div>
        <h2 className="sub-title">Sub Unit</h2>
        <div className="cards">
            {this.state.discSub.map((a) => {
            let Id = a.id;
            return (
            <div className="card" key={a.id}>
                <Link className="test" to={{pathname: "/subunit", value: {Id}}}>
                <img src={a.cover_art} alt="" className="disc-image" />
                <h5 className="card-title">{a.title}</h5>
                </Link>
            </div>
            )})}
        </div>
        <h2 className="sub-title">Group</h2>
        <div className="cards">
            {this.state.discGroup.map((a) => {
            let Id = a.id;
            return (
            <div className="card" key={a.id}>
                <Link className="test" to={{pathname: "/discography", value: {Id}}}>
                <img src={a.albumcover} alt="" className="disc-image" />
                <h5 className="card-title">{a.title}</h5>
                </Link>
            </div>
            )})}
        </div>
    </div>
</Container>
);
}
}

export default DiscoDetails;