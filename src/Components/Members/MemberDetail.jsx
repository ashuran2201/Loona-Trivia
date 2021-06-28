import React, { useState, useEffect } from "react";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const MemberDetail= (props)=> {

  // use hook 
  const [birthname, setbirthname] = useState();
  const [stagename, setstagename] = useState();
  const [birthdate, setbirthdate] = useState();
  const [birthplace, setbirthplace] = useState();
  const [nickname, setnickname] = useState();
  const [height, setheight] = useState();
  const [weight, setweight] = useState();
  const [bloodtype, setbloodtype] = useState();
  const [position, setposition] = useState();
  const [color, setcolor] = useState();
  const [animal, setanimal] = useState();
  const [revealdate, setrevealdate] = useState();
  const [single, setsingle] = useState();
  const [subunit, setsubunit] = useState();
  const [location, setlocation] = useState();
  const [month, setmonth] = useState();
  const [superpower, setsuperpower] = useState();
  const [fruit, setfruit] = useState();
  const [faith, setfaith] = useState();
  const [images, setimages] = useState();
 
 
  let Location = useLocation();

  
  console.log(Location);
  console.log(props,'props');
 let Id = Location.value.Id;

  console.log(Id, " Location.data.Id id here new");

  useEffect(() => {
    axios(`https://orbitalmoon-data.herokuapp.com/members/${Id} `)
      .then(data => {
      let getbirthname = data.data.birth_name;
      let getstagename = data.data.stage_name;
      let getbirthdate = data.data.birth_date;
      let getbirthplace = data.data.birth_place;
      let getnickname = data.data.nick_name;
      let getheight = data.data.height;
      let getweight = data.data.weight;
      let getbloodtype = data.data.blood_type;
      let getposition = data.data.position;
      let getcolor = data.data.color;
      let getanimal = data.data.animal;
      let getrevealdate = data.data.reveal_date;
      let getsingle = data.data.single;
      let getsubunit = data.data.sub_unit;
      let getlocation = data.data.location;
      let getmonth = data.data.Month;
      let getsuperpower = data.data.Superpower;
      let getfruit = data.data.Fruit;
      let getfaith = data.data.Faith;
      let getimages = data.data.image;
    
      setbirthname(getbirthname);
      setstagename(getstagename);
      setbirthdate(getbirthdate);
      setbirthplace(getbirthplace);
      setnickname(getnickname);
      setheight(getheight);
      setweight(getweight);
      setbloodtype(getbloodtype);
      setposition(getposition);
      setcolor(getcolor);
      setanimal(getanimal);
      setrevealdate(getrevealdate);
      setsingle(getsingle);
      setsubunit(getsubunit);
      setlocation(getlocation);
      setmonth(getmonth);
      setsuperpower(getsuperpower);
      setfruit(getfruit);
      setfaith(getfaith);
      setimages(getimages);

      
      })
      .catch(function(error) {
        console.log(error);
      });

  },[]);
  



  return (
<Container className="container" maxWidth="xl">
    <div className="memberlist-container">
    <Link  to="/members"><Button className="back-btn">Back</Button></Link>
        <h1 className="titles">
            Member Details
        </h1>
        <div className="details">
        <img className="proimg" src={images} alt="member" />
            <div className="data-detail">
                <p>Birth Name : {birthname}</p>
                <p>Stage Name : {stagename}</p>
                <p>Birth Date : {birthdate}</p>
                <p>Birth Place : {birthplace}</p>
                <p>Nickname : {nickname}</p>
                <p>Height : {height}</p>
                <p>Weight : {weight}</p>
                <p>Blood Type : {bloodtype}</p>
                <p>Position(unspecified) : {position}</p>
                <p>Color : {color}</p>
                <p>Animal : {animal}</p>
                <p>Reveal Date: {revealdate}</p>
                <p>Single : {single}</p>
                <p>Sub-unit : {subunit}</p>
                <p>Location : {location}</p>
                <p>Month: {month}</p>
                <p>Superpower: {superpower}</p>
                <p>Fruit: {fruit}</p>
                <p>Faith: {faith}</p>
            </div>
        </div>

    </div>

</Container>

  );

}

export default MemberDetail;
