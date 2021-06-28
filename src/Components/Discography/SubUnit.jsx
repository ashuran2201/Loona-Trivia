import React, { useState, useEffect } from "react";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "../../Style/Scss/Discography.scss";
const SubUnit= (props)=> {

  // use hook 
  const [title1, settitle1] = useState();
  const [type, settype] = useState();
  const [artist1, setartist1] = useState();
  const [release1, setrelease1] = useState();
  const [recorded, setrecorded] = useState();
  const [length, setlength] = useState();
  const [label, setlabel] = useState();
  const [distributor, setdistributor] = useState();
  const [normal, setnormal] = useState();
  const [limited, setlimited] = useState();
  const [song1, setsong1] = useState();
  const [song2, setsong2] = useState();
  const [song3, setsong3] = useState();
  const [song4, setsong4] = useState();
  const [song5, setsong5] = useState();
  const [song6, setsong6] = useState();
  const [song7, setsong7] = useState();
  const [song8, setsong8] = useState();
  const [song9, setsong9] = useState();
  const [lyric1, setlyric1] = useState();
  const [lyric2, setlyric2] = useState();
  const [lyric3, setlyric3] = useState();
  const [lyric4, setlyric4] = useState();
  const [lyric5, setlyric5] = useState();
  const [lyric6, setlyric6] = useState();
  const [lyric7, setlyric7] = useState();
  const [lyric8, setlyric8] = useState();
  const [lyric9, setlyric9] = useState();
  const [composer1, setcomposer1] = useState();
  const [composer2, setcomposer2] = useState();
  const [composer3, setcomposer3] = useState();
  const [composer4, setcomposer4] = useState();
  const [composer5, setcomposer5] = useState();
  const [composer6, setcomposer6] = useState();
  const [composer7, setcomposer7] = useState();
  const [composer8, setcomposer8] = useState();
  const [composer9, setcomposer9] = useState();
  const [composer10, setcomposer10] = useState();
  const [composer11, setcomposer11] = useState();
  const [composer12, setcomposer12] = useState();
  const [composer13, setcomposer13] = useState();
  const [composer14, setcomposer14] = useState();
  const [arranger1, setarranger1] = useState();
  const [arranger2, setarranger2] = useState();
  const [arranger3, setarranger3] = useState();
  const [arranger4, setarranger4] = useState();
  const [arranger5, setarranger5] = useState();
  const [arranger6, setarranger6] = useState();
  const [arranger7, setarranger7] = useState();
  const [arranger8, setarranger8] = useState();
  const [arranger9, setarranger9] = useState();
  const [arranger10, setarranger10] = useState();
  const [arranger11, setarranger11] = useState();
  const [executiveProducer, setexecutiveProducer] = useState();
  const [creativeDirector, setcreativeDirector] = useState();
  const [musicProducer1, setmusicProducer1] = useState();
  const [musicProducer2, setmusicProducer2] = useState();
  const [musicProducer3, setmusicProducer3] = useState();
  const [musicProducer4, setmusicProducer4] = useState();
  const [ar1, setar1] = useState();
  const [ar2, setar2] = useState();
  const [ar3, setar3] = useState();
  const [recordingEngineer1, setrecordingEngineer1] = useState();
  const [recordingEngineer2, setrecordingEngineer2] = useState();
  const [recordingEngineer3, setrecordingEngineer3] = useState();
  const [recordingEngineer4, setrecordingEngineer4] = useState();
  const [recordingEngineer5, setrecordingEngineer5] = useState();
  const [recordingEngineer6, setrecordingEngineer6] = useState();
  const [mixingEngineer1, setmixingEngineer1 ] = useState();
  const [mixingEngineer2, setmixingEngineer2 ] = useState();
  const [mixingEngineer3, setmixingEngineer3 ] = useState();
  const [mixingEngineer4, setmixingEngineer4 ] = useState();
  const [masterEngineer, setmasterEngineer ] = useState();
  const [managementDirector, setmanagementDirector ] = useState();
  const [management1, setmanagement1 ] = useState();
  const [management2, setmanagement2 ] = useState();
  const [management3, setmanagement3 ] = useState();
  const [management4, setmanagement4 ] = useState();
  const [management5, setmanagement5 ] = useState();
  const [management6, setmanagement6 ] = useState();
  const [management7, setmanagement7 ] = useState();
  const [management8, setmanagement8 ] = useState();
  const [chiefCom, setchiefCom ] = useState();
  const [com1, setcom1 ] = useState();
  const [com2, setcom2 ] = useState();
  const [com3, setcom3 ] = useState();
  const [press1, setpress1 ] = useState();
  const [press2, setpress2 ] = useState();
  const [fanMarketing, setfanMarketing ] = useState();
  const [fan1, setfan1 ] = useState();
  const [fan2, setfan2 ] = useState();
  const [fan3, setfan3 ] = useState();
  const [cast1, setcast1 ] = useState();
  const [cast2, setcast2 ] = useState();
  const [cooperation, setcooperation ] = useState();
  const [administration1, setadministration1 ] = useState();
  const [administration2, setadministration2 ] = useState();
  const [stylingDirector, setstylingDirector ] = useState();
  const [hairDirector, sethairDirector ] = useState();
  const [makeupDirector, setmakeupDirector ] = useState();
  const [choreography, setchoreography] = useState();
  const [musicVideo1, setmusicVideo1 ] = useState();
  const [musicVideo2, setmusicVideo2 ] = useState();
  const [musicVideo3, setmusicVideo3 ] = useState();
  const [musicVideo4, setmusicVideo4 ] = useState();
  const [performanceDirector, setperformanceDirector ] = useState();
  const [photographer, setphotographer] = useState();
  const [artwork1, setartwork1] = useState();
  const [artwork2, setartwork2] = useState();
  const [trivia1, settrivia1] = useState();
  const [trivia2, settrivia2] = useState();
  const [trivia3, settrivia3] = useState();
  const [trivia4, settrivia4] = useState();
  const [trivia5, settrivia5] = useState();
  const [trivia6, settrivia6] = useState();
  const [trivia7, settrivia7] = useState();
  const [trivia8, settrivia8] = useState();
  const [trivia9, settrivia9] = useState();
  const [trivia10, settrivia10] = useState();
  const [trivia11, settrivia11] = useState();
  const [coverart, setcoverart] = useState();

 
  let Location = useLocation();

  
  console.log(Location);
  console.log(props,'props');
 let Id = Location.value.Id;

  console.log(Id, " Location.data.Id id here new");

  useEffect(() => {
    axios(`https://orbitalmoon-data.herokuapp.com/sub_unit/${Id} `)
      .then(data => {
    let gettitle1 = data.data.title;
    let gettype = data.data.type;
    let getartist1 = data.data.artist;
    let getrelease1 = data.data.release;
    let getrecorded = data.data.recorded;
    let getlength = data.data.length;
    let getlabel = data.data.label;
    let getdistributor = data.data.distributor;
    let getnormal = data.data.normal_ver;
    let getlimited = data.data.limited_ver;
    let getsong1 = data.data.song_1;
    let getsong2 = data.data.song_2;
    let getsong3 = data.data.song_3;
    let getsong4 = data.data.song_4;
    let getsong5 = data.data.song_5;
    let getsong6 = data.data.song_6;
    let getsong7 = data.data.song_7;
    let getsong8 = data.data.song_8;
    let getsong9 = data.data.song_9;
    let getlyric1 = data.data.lyric_1;
    let getlyric2 = data.data.lyric_2;
    let getlyric3 = data.data.lyric_3;
    let getlyric4 = data.data.lyric_4;
    let getlyric5 = data.data.lyric_5;
    let getlyric6 = data.data.lyric_6;
    let getlyric7 = data.data.lyric_7;
    let getlyric8 = data.data.lyric_8;
    let getlyric9 = data.data.lyric_9;
    let getcomposer1 = data.data.composer_1;
    let getcomposer2 = data.data.composer_2;
    let getcomposer3 = data.data.composer_3;
    let getcomposer4 = data.data.composer_4;
    let getcomposer5 = data.data.composer_5;
    let getcomposer6 = data.data.composer_6;
    let getcomposer7 = data.data.composer_7;
    let getcomposer8 = data.data.composer_8;
    let getcomposer9 = data.data.composer_9;
    let getcomposer10 = data.data.composer_10;
    let getcomposer11 = data.data.composer_11;
    let getcomposer12 = data.data.composer_12;
    let getcomposer13 = data.data.composer_13;
    let getcomposer14 = data.data.composer_14;
    let getarranger1 = data.data.arranger_1;
    let getarranger2 = data.data.arranger_2;
    let getarranger3 = data.data.arranger_3;
    let getarranger4 = data.data.arranger_4;
    let getarranger5 = data.data.arranger_5;
    let getarranger6 = data.data.arranger_6;
    let getarranger7 = data.data.arranger_7;
    let getarranger8 = data.data.arranger_8;
    let getarranger9 = data.data.arranger_9;
    let getarranger10 = data.data.arranger_10;
    let getarranger11 = data.data.arranger_11;
    let getexecutiveProducer = data.data.executive_producer;
    let getcreativeDirector = data.data.creative_director;
    let getmusicProducer1 = data.data.music_producer_1;
    let getmusicProducer2 = data.data.music_producer_2;
    let getmusicProducer3 = data.data.music_producer_3;
    let getmusicProducer4 = data.data.music_producer_4;
    let getar1 = data.data.a_r_1;
    let getar2 = data.data.a_r_2;
    let getar3 = data.data.a_r_3;
    let getrecordingEngineer1 = data.data.recording_engineer_1;
    let getrecordingEngineer2 = data.data.recording_engineer_2;
    let getrecordingEngineer3 = data.data.recording_engineer_3;
    let getrecordingEngineer4 = data.data.recording_engineer_4;
    let getrecordingEngineer5 = data.data.recording_engineer_5;
    let getrecordingEngineer6 = data.data.recording_engineer_6;
    let getmixingEngineer1 = data.data.mixing_engineer_1;
    let getmixingEngineer2 = data.data.mixing_engineer_2;
    let getmixingEngineer3 = data.data.mixing_engineer_3;
    let getmixingEngineer4 = data.data.mixing_engineer_4;
    let getmasterEngineer = data.data.mastering_engineer;
    let getmanagementDirector = data.data.management_director;
    let getmanagement1 = data.data.management_1;
    let getmanagement2 = data.data.management_2;
    let getmanagement3 = data.data.management_3;
    let getmanagement4 = data.data.management_4;
    let getmanagement5 = data.data.management_5;
    let getmanagement6 = data.data.management_6;
    let getmanagement7 = data.data.management_7;
    let getmanagement8 = data.data.management_8;
    let getchiefCom = data.data.chief_communication;
    let getcom1 = data.data.com_1;
    let getcom2 = data.data.com_2;
    let getcom3 = data.data.com_3;
    let getpress1 = data.data.press_1;
    let getpress2 = data.data.press_2;
    let getfanMarketing = data.data.fan_marketing;
    let getfan1 = data.data.fan_1;
    let getfan2 = data.data.fan_2;
    let getfan3 = data.data.fan_3;
    let getcast1 = data.data.cast_1;
    let getcast2 = data.data.cast_2;
    let getcooperation = data.data.cooperation;
    let getadministration1 = data.data.admin_1;
    let getadministration2 = data.data.admin_2;
    let getstylingDirector = data.data.styling_director;
    let gethairDirector = data.data.hair_director;
    let getmakeupDirector = data.data.makeup_director;
    let getchoreography = data.data.choreography;
    let getmusicVideo1 = data.data.mv_1;
    let getmusicVideo2 = data.data.mv_2;
    let getmusicVideo3 = data.data.mv_3;
    let getmusicVideo4 = data.data.mv_4;
    let getperformanceDirector = data.data.performance_director;
    let getphotographer = data.data.photographer;
    let getartwork1 = data.data.art_work_1;
    let getartwork2 = data.data.art_work_2;
    let gettrivia1 = data.data.trivias_1;
    let gettrivia2 = data.data.trivias_2;
    let gettrivia3 = data.data.trivias_3;
    let gettrivia4 = data.data.trivias_4;
    let gettrivia5 = data.data.trivias_5;
    let gettrivia6 = data.data.trivias_6;
    let gettrivia7 = data.data.trivias_7;
    let gettrivia8 = data.data.trivias_8;
    let gettrivia9 = data.data.trivias_9;
    let gettrivia10 = data.data.trivias_10;
    let gettrivia11 = data.data.trivias_11;
    let getcoverart = data.data.cover_art;

    settitle1(gettitle1);
    settype(gettype);
    setartist1(getartist1);
    setrelease1(getrelease1);
    setrecorded(getrecorded);
    setlength(getlength);
    setlabel(getlabel);
    setdistributor(getdistributor);
    setnormal(getnormal);
    setlimited(getlimited);
    setsong1(getsong1);
    setsong2(getsong2);
    setsong3(getsong3);
    setsong4(getsong4);
    setsong5(getsong5);
    setsong6(getsong6);
    setsong7(getsong7);
    setsong8(getsong8);
    setsong9(getsong9);
    setlyric1(getlyric1);
    setlyric2(getlyric2);
    setlyric3(getlyric3);
    setlyric4(getlyric4);
    setlyric5(getlyric5);
    setlyric6(getlyric6);
    setlyric7(getlyric7);
    setlyric8(getlyric8);
    setlyric9(getlyric9);
    setcomposer1(getcomposer1);
    setcomposer2(getcomposer2);
    setcomposer3(getcomposer3);
    setcomposer4(getcomposer4);
    setcomposer5(getcomposer5);
    setcomposer6(getcomposer6);
    setcomposer7(getcomposer7);
    setcomposer8(getcomposer8);
    setcomposer9(getcomposer9);
    setcomposer10(getcomposer10);
    setcomposer11(getcomposer11);
    setcomposer12(getcomposer12);
    setcomposer13(getcomposer13);
    setcomposer14(getcomposer14);
    setarranger1(getarranger1);
    setarranger2(getarranger2);
    setarranger3(getarranger3);
    setarranger4(getarranger4);
    setarranger5(getarranger5);    
    setarranger6(getarranger6);
    setarranger7(getarranger7);
    setarranger8(getarranger8);
    setarranger9(getarranger9);
    setarranger10(getarranger10);
    setarranger11(getarranger11);
    setexecutiveProducer(getexecutiveProducer);
    setcreativeDirector(getcreativeDirector);
    setmusicProducer1(getmusicProducer1);
    setmusicProducer2(getmusicProducer2);
    setmusicProducer3(getmusicProducer3);
    setmusicProducer4(getmusicProducer4);
    setar1(getar1);
    setar2(getar2);
    setar3(getar3);
    setrecordingEngineer1(getrecordingEngineer1);
    setrecordingEngineer2(getrecordingEngineer2);
    setrecordingEngineer3(getrecordingEngineer3);
    setrecordingEngineer4(getrecordingEngineer4);
    setrecordingEngineer5(getrecordingEngineer5);
    setrecordingEngineer6(getrecordingEngineer6);
    setmixingEngineer1(getmixingEngineer1);
    setmixingEngineer2(getmixingEngineer2);
    setmixingEngineer3(getmixingEngineer3);
    setmixingEngineer4(getmixingEngineer4);
    setmasterEngineer(getmasterEngineer);
    setmanagementDirector(getmanagementDirector);
    setmanagement1(getmanagement1);
    setmanagement2(getmanagement2);
    setmanagement3(getmanagement3);
    setmanagement4(getmanagement4);
    setmanagement5(getmanagement5);
    setmanagement6(getmanagement6);
    setmanagement7(getmanagement7);
    setmanagement8(getmanagement8);
    setchiefCom(getchiefCom);
    setcom1(getcom1);
    setcom2(getcom2);
    setcom3(getcom3);
    setpress1(getpress1);
    setpress2(getpress2);
    setfanMarketing(getfanMarketing);
    setfan1(getfan1);
    setfan2(getfan2);
    setfan3(getfan3);
    setcast1(getcast1);
    setcast2(getcast2);
    setcooperation(getcooperation);
    setadministration1(getadministration1);
    setadministration2(getadministration2);
    setstylingDirector(getstylingDirector);
    sethairDirector(gethairDirector);
    setmakeupDirector(getmakeupDirector);
    setchoreography(getchoreography);
    setmusicVideo1(getmusicVideo1);
    setmusicVideo2(getmusicVideo2);
    setmusicVideo3(getmusicVideo3);
    setmusicVideo4(getmusicVideo4);
    setperformanceDirector(getperformanceDirector);
    setphotographer(getphotographer);
    setartwork1(getartwork1);
    setartwork2(getartwork2);
    settrivia1(gettrivia1);
    settrivia2(gettrivia2);
    settrivia3(gettrivia3);
    settrivia4(gettrivia4);
    settrivia5(gettrivia5);
    settrivia6(gettrivia6);
    settrivia7(gettrivia7);
    settrivia8(gettrivia8);
    settrivia9(gettrivia9);
    settrivia10(gettrivia10);
    settrivia11(gettrivia11);
    setcoverart(getcoverart);      
      })
      .catch(function(error) {
        console.log(error);
      });

  },[]);
  
  return (
<Container className="container" maxWidth="xl">
    <div className="disc-container">
    <Link  to="/discography"><Button className="back-btns">Back</Button></Link>
        <h1 className="titles">
            Discography Details
        </h1>
        <div className="details">
        <img className="proimg" src={coverart} alt="album" />
            <div className="data-detail">
              <table className="datalist">
                <tbody>
                  <tr>
                    <table cellspacing="0" cellPadding="0">
                      <tbody>
                        <tr>
                          <td className="vertical">Title</td>
                          <td className="verticals"> {title1}
                          </td>
                        </tr>
                        <tr>
                          <td className="ver">Type</td>
                          <td className="title-lists">{type}</td>
                        </tr>
                        <tr>
                          <td className="vertical">Artist</td>
                          <td className="vertical">{artist1}</td>
                        </tr>
                        <tr>
                          <td className="vertical" >Release</td>
                          <td className="vertical">{release1}</td>
                        </tr>
                        <tr>
                          <td className="ver">Recorded</td>
                          <td className="title-lists">{recorded}</td>
                        </tr>
                        <tr>
                          <td className="ver">Length</td>
                          <td className="title-lists">{length}</td>
                        </tr>
                        <tr>
                          <td className="ver">Label</td>
                          <td className="title-lists">{label}</td>
                        </tr>
                        <tr>
                          <td className="ver">Distributor</td>
                          <td className="title-lists">{distributor}</td>
                        </tr>                        
                        <tr>
                          <td className="ver">Album Status</td>
                          <li className="title-list">{normal}</li>
                          <li className="title-list">{limited}</li>
                        </tr>
                        <tr>
                          <td className="vertical">Tracklist</td>
                          <td> 
                            <ul className="datalist">
                            <li className="title-list">{song1}</li>
                            <li className="title-list">{song2}</li>
                            <li className="title-list">{song3}</li>
                            <li className="title-list">{song4}</li>
                            <li className="title-list">{song5}</li>
                            <li className="title-list">{song6}</li>
                            <li className="title-list">{song7}</li>
                            <li className="title-list">{song8}</li>
                            <li className="title-list">{song9}</li>
                            </ul>
                          </td>
                        </tr>
                        <h2>Credits</h2>
                        <tr>
                          <td className="vertical">Lyrics</td>
                          <td className="verticals"> 
                            <li className="title-list">{lyric1}</li>
                            <li className="title-list">{lyric2}</li>
                            <li className="title-list">{lyric3}</li>
                            <li className="title-list">{lyric4}</li>
                            <li className="title-list">{lyric5}</li>
                            <li className="title-list">{lyric6}</li>
                            <li className="title-list">{lyric7}</li>
                            <li className="title-list">{lyric8}</li>
                            <li className="title-list">{lyric9}</li>
                          </td>
                        </tr>
                        <tr>
                          <td className="vertical">Composers</td>
                          <td className="verticals"> 
                            <li className="title-list">{composer1}</li>
                            <li className="title-list">{composer2}</li>
                            <li className="title-list">{composer3}</li>
                            <li className="title-list">{composer4}</li>
                            <li className="title-list">{composer5}</li>
                            <li className="title-list">{composer6}</li>
                            <li className="title-list">{composer7}</li>
                            <li className="title-list">{composer8}</li>
                            <li className="title-list">{composer9}</li>
                            <li className="title-list">{composer10}</li>
                            <li className="title-list">{composer11}</li>
                            <li className="title-list">{composer12}</li>
                            <li className="title-list">{composer13}</li>
                            <li className="title-list">{composer14}</li>
                          </td>
                        </tr>
                        <tr>
                          <td className="vertical">Arrangers</td>
                          <td> 
                            <ul className="datalist">
                            <li className="title-list">{arranger1}</li>
                            <li className="title-list">{arranger2}</li>
                            <li className="title-list">{arranger3}</li>
                            <li className="title-list">{arranger4}</li>
                            <li className="title-list">{arranger5}</li>
                            <li className="title-list">{arranger6}</li>
                            <li className="title-list">{arranger7}</li>
                            <li className="title-list">{arranger8}</li>
                            <li className="title-list">{arranger9}</li>
                            <li className="title-list">{arranger10}</li>
                            <li className="title-list">{arranger11}</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="vertical" >Executive Producer</td>
                          <td className="title-lists">{executiveProducer}</td>
                        </tr>
                        <tr>
                          <td className="vertical" >Creative Producer</td>
                          <td className="title-lists">{creativeDirector}</td>
                        </tr>
                        <tr>
                          <td className="vertical">Music Producer</td>
                          <td> 
                            <ul className="datalist">
                            <li className="title-list">{musicProducer1}</li>
                            <li className="title-list">{musicProducer2}</li>
                            <li className="title-list">{musicProducer3}</li>
                            <li className="title-list">{musicProducer4}</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="vertical">A&R</td>
                          <td> 
                            <ul className="datalist">
                            <li className="title-list">{ar1}</li>
                            <li className="title-list">{ar2}</li>
                            <li className="title-list">{ar3}</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="vertical">Recording Engineer</td>
                          <td> 
                            <ul className="datalist">
                            <li className="title-list">{recordingEngineer1}</li>
                            <li className="title-list">{recordingEngineer2}</li>
                            <li className="title-list">{recordingEngineer3}</li>
                            <li className="title-list">{recordingEngineer4}</li>
                            <li className="title-list">{recordingEngineer5}</li>
                            <li className="title-list">{recordingEngineer6}</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="vertical">Mixing Engineer</td>
                          <td> 
                            <ul className="datalist">
                            <li className="title-list">{mixingEngineer1}</li>
                            <li className="title-list">{mixingEngineer2}</li>
                            <li className="title-list">{mixingEngineer3}</li>
                            <li className="title-list">{mixingEngineer4}</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="vertical" >Mastering Engineer</td>
                          <td className="title-lists">{masterEngineer}</td>
                        </tr>
                        <tr>
                          <td className="vertical" >Management Director</td>
                          <td className="title-lists">{managementDirector}</td>
                        </tr>
                        <tr>
                          <td className="vertical">Managements</td>
                          <td> 
                            <ul className="datalist">
                            <li className="title-list">{management1}</li>
                            <li className="title-list">{management2}</li>
                            <li className="title-list">{management3}</li>
                            <li className="title-list">{management4}</li>
                            <li className="title-list">{management5}</li>
                            <li className="title-list">{management6}</li>
                            <li className="title-list">{management7}</li>
                            <li className="title-list">{management8}</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="vertical">Administratons</td>
                          <td> 
                            <ul className="datalist">
                            <li className="title-list">{administration1}</li>
                            <li className="title-list">{administration2}</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="vertical">Chief Communication</td>
                          <td className="title-lists">{chiefCom}</td>
                        </tr>
                        <tr>
                          <td className="vertical">Communication</td>
                          <td> 
                            <ul className="datalist">
                            <li className="title-list">{com1}</li>
                            <li className="title-list">{com2}</li>
                            <li className="title-list">{com3}</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="vertical">Press Publicist</td>
                          <td> 
                            <ul className="datalist">
                            <li className="title-list">{press1}</li>
                            <li className="title-list">{press2}</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="vertical">Fan Marketing</td>
                          <td className="title-lists">{fanMarketing}</td>
                        </tr>
                        <tr>
                          <td className="vertical">Training</td>
                          <td> 
                            <ul className="datalist">
                            <li className="title-list">{fan1}</li>
                            <li className="title-list">{fan2}</li>
                            <li className="title-list">{fan3}</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="vertical">Casting</td>
                          <td> 
                            <ul className="datalist">
                            <li className="title-list">{cast1}</li>
                            <li className="title-list">{cast2}</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="vertical" >Cooperation</td>
                          <td className="title-lists">{cooperation}</td>
                        </tr>
                        <tr>
                          <td className="vertical" >Styling Director</td>
                          <td className="title-lists">{stylingDirector}</td>
                        </tr>
                        <tr>
                          <td className="vertical" >Hair Director</td>
                          <td className="title-lists">{hairDirector}</td>
                        </tr>
                        <tr>
                          <td className="vertical" >Make Up Director</td>
                          <td className="title-lists">{makeupDirector}</td>
                        </tr>
                        <tr>
                          <td className="vertical" >Choreography</td>
                          <td className="title-lists">{choreography}</td>
                        </tr>
                        <tr>
                          <td className="vertical">Music Video</td>
                          <td> 
                            <ul className="datalist">
                            <li className="title-list">{musicVideo1}</li>
                            <li className="title-list">{musicVideo2}</li>
                            <li className="title-list">{musicVideo3}</li>
                            <li className="title-list">{musicVideo4}</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="vertical" >Performance Director</td>
                          <td className="title-lists">{performanceDirector}</td>
                        </tr>
                        <tr>
                          <td className="vertical" >Photographer</td>
                          <td className="title-lists">{photographer}</td>
                        </tr>
                        <tr>
                          <td className="vertical">Art Works</td>
                          <td> 
                            <ul className="datalist">
                            <li className="title-list">{artwork1}</li>
                            <li className="title-list">{artwork2}</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>            
        </div>
    </div>
        <h1 className="title">Trivia
        </h1>
            <ul className="trivialist">
              <li className="title-list">{trivia1}</li>
              <li className="title-list">{trivia2}</li>
              <li className="title-list">{trivia3}</li>
              <li className="title-list">{trivia4}</li>
              <li className="title-list">{trivia5}</li>
              <li className="title-list">{trivia6}</li>
              <li className="title-list">{trivia7}</li>
              <li className="title-list">{trivia8}</li>
              <li className="title-list">{trivia9}</li>
              <li className="title-list">{trivia10}</li>
              <li className="title-list">{trivia11}</li>

            </ul>
            </div>
</Container>

  );

}

export default SubUnit;
