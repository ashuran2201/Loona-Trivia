import React, { Component} from 'react';
import axios from 'axios';
import "../../Style/Scss/Members.scss";
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
class MemberList extends Component {
    constructor(props) {
        super(props);
        this.state = { member: [] }
      } 


componentDidMount() {
    axios.get("https://orbitalmoon-data.herokuapp.com/members")
    .then(res => {
        this.setState({
          member: res.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
    }

render() {

return (
<Container className="container" maxWidth="xl">
    <div className="memberlist-container">
        <h1 className="title">
            Members
        </h1>
        <div className="cards">
        {this.state.member.map((a) => {    
            let Id = a.id;     
        return (
           <div className="card" key={a.id}>
               <Link className="test" to={{pathname: "/memberdetails", value: {Id}}}>
               <img src={a.image} alt="" className="memberphoto" />
               <h5 className="card-title">{a.stage_name}</h5>
               </Link>

            </div>
        )})}
        </div>
    </div>
</Container>
);
}
}

export default MemberList;