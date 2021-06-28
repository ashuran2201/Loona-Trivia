import React, { useState, useEffect } from "react";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "../../Style/Scss/Discography.scss";
const Solo= (props)=> {

  // use hook 
  const [title1, settitle1] = useState();
  const [title2, settitle2] = useState();
  const [title3, settitle3] = useState();
  const [type, settype] = useState();
  const [artist1, setartist1] = useState();
  const [artist2, setartist2] = useState();
  const [artist3, setartist3] = useState();
  const [artist4, setartist4] = useState();
  const [release1, setrelease1] = useState();
  const [release2, setrelease2] = useState();
  const [recorded, setrecorded] = useState();
  const [length, setlength] = useState();
  const [label, setlabel] = useState();
  const [distributor, setdistributor] = useState();
  const [albumstatus, setalbumstatus] = useState();
  const [song1, setsong1] = useState();
  const [song2, setsong2] = useState();
  const [song3, setsong3] = useState();
  const [lyric1, setlyric1] = useState();
  const [lyric2, setlyric2] = useState();
  const [lyric3, setlyric3] = useState();
  const [lyric4, setlyric4] = useState();
  const [composer1, setcomposer1] = useState();
  const [composer2, setcomposer2] = useState();
  const [composer3, setcomposer3] = useState();
  const [composer4, setcomposer4] = useState();
  const [composer5, setcomposer5] = useState();
  const [composer6, setcomposer6] = useState();
  const [composer7, setcomposer7] = useState();
  const [arranger1, setarranger1] = useState();
  const [arranger2, setarranger2] = useState();
  const [arranger3, setarranger3] = useState();
  const [arranger4, setarranger4] = useState();
  const [arranger5, setarranger5] = useState();
  const [executiveProducer, setexecutiveProducer] = useState();
  const [creativeDirector, setcreativeDirector] = useState();
  const [musicProducer1, setmusicProducer1] = useState();
  const [musicProducer2, setmusicProducer2] = useState();
  const [musicProducer3, setmusicProducer3] = useState();
  const [ar1, setar1] = useState();
  const [ar2, setar2] = useState();
  const [ar3, setar3] = useState();
  const [recordingEngineer1, setrecordingEngineer1] = useState();
  const [recordingEngineer2, setrecordingEngineer2] = useState();
  const [recordingEngineer3, setrecordingEngineer3] = useState();
  const [recordingEngineer4, setrecordingEngineer4] = useState();
  const [mixingEngineer1, setmixingEngineer1 ] = useState();
  const [mixingEngineer2, setmixingEngineer2 ] = useState();
  const [mixingEngineer3, setmixingEngineer3 ] = useState();
  const [masterEngineer, setmasterEngineer ] = useState();
  const [managementDirector, setmanagementDirector ] = useState();
  const [management1, setmanagement1 ] = useState();
  const [management2, setmanagement2 ] = useState();
  const [management3, setmanagement3 ] = useState();
  const [management4, setmanagement4 ] = useState();
  const [management5, setmanagement5 ] = useState();
  const [management6, setmanagement6 ] = useState();
  const [management7, setmanagement7 ] = useState();
  const [administration1, setadministration1 ] = useState();
  const [administration2, setadministration2 ] = useState();
  const [pressPublicist, setpressPublicist ] = useState();
  const [stylingDirector, setstylingDirector ] = useState();
  const [hairDirector, sethairDirector ] = useState();
  const [makeupDirector, setmakeupDirector ] = useState();
  const [choreography, setchoreography] = useState();
  const [musicVideo1, setmusicVideo1 ] = useState();
  const [musicVideo2, setmusicVideo2 ] = useState();
  const [musicVideo3, setmusicVideo3 ] = useState();
  const [musicVideo4, setmusicVideo4 ] = useState();
  const [performanceDirector, setperformanceDirector ] = useState();
  const [dancer, setdancer] = useState();
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
  const [coverart, setcoverart] = useState();

 
  let Location = useLocation();

  
  console.log(Location);
  console.log(props,'props');
 let Id = Location.value.Id;

  console.log(Id, " Location.data.Id id here new");

  useEffect(() => {
    axios(`https://orbitalmoon-data.herokuapp.com/solo/${Id} `)
      .then(data => {
    let gettitle1 = data.data.title;
    let gettitle2 = data.data.title_2;
    let gettitle3 = data.data.title_3;
    let gettype = data.data.type;
    let getartist1 = data.data.artist;
    let getartist2 = data.data.artist_2;
    let getartist3 = data.data.artist_3;
    let getartist4 = data.data.artist_4;
    let getrelease1 = data.data.release_1;
    let getrelease2 = data.data.release_2;
    let getrecorded = data.data.recorded;
    let getlength = data.data.length;
    let getlabel = data.data.label;
    let getdistributor = data.data.distributor;
    let getalbumstatus = data.data.album_status;
    let getsong1 = data.data.song_1;
    let getsong2 = data.data.song_2;
    let getsong3 = data.data.song_3;
    let getlyric1 = data.data.lyric_1;
    let getlyric2 = data.data.lyric_2;
    let getlyric3 = data.data.lyric_3;
    let getlyric4 = data.data.lyric_4;
    let getcomposer1 = data.data.composer_1;
    let getcomposer2 = data.data.composer_2;
    let getcomposer3 = data.data.composer_3;
    let getcomposer4 = data.data.composer_4;
    let getcomposer5 = data.data.composer_5;
    let getcomposer6 = data.data.composer_6;
    let getcomposer7 = data.data.composer_7;
    let getarranger1 = data.data.arranger_1;
    let getarranger2 = data.data.arranger_2;
    let getarranger3 = data.data.arranger_3;
    let getarranger4 = data.data.arranger_4;
    let getarranger5 = data.data.arranger_5;
    let getexecutiveProducer = data.data.executive_producer;
    let getcreativeDirector = data.data.creative_director;
    let getmusicProducer1 = data.data.music_producer_1;
    let getmusicProducer2 = data.data.music_producer_2;
    let getmusicProducer3 = data.data.music_producer_3;
    let getar1 = data.data.a_r_1;
    let getar2 = data.data.a_r_2;
    let getar3 = data.data.a_r_3;
    let getrecordingEngineer1 = data.data.recording_engineer_1;
    let getrecordingEngineer2 = data.data.recording_engineer_2;
    let getrecordingEngineer3 = data.data.recording_engineer_3;
    let getrecordingEngineer4 = data.data.recording_engineer_4;
    let getmixingEngineer1 = data.data.mixing_engineer_1;
    let getmixingEngineer2 = data.data.mixing_engineer_2;
    let getmixingEngineer3 = data.data.mixing_engineer_3;
    let getmasterEngineer = data.data.mastering_engineer;
    let getmanagementDirector = data.data.management_director;
    let getmanagement1 = data.data.management_1;
    let getmanagement2 = data.data.management_2;
    let getmanagement3 = data.data.management_3;
    let getmanagement4 = data.data.management_4;
    let getmanagement5 = data.data.management_5;
    let getmanagement6 = data.data.management_6;
    let getmanagement7 = data.data.management_7;
    let getadministration1 = data.data.admin_1;
    let getadministration2 = data.data.admin_2;
    let getpressPublicist = data.data.press_publicist;
    let getstylingDirector = data.data.styling_director;
    let gethairDirector = data.data.hair_director;
    let getmakeupDirector = data.data.makeup_director;
    let getchoreography = data.data.choreography;
    let getmusicVideo1 = data.data.mv_1;
    let getmusicVideo2 = data.data.mv_2;
    let getmusicVideo3 = data.data.mv_3;
    let getmusicVideo4 = data.data.mv_4;
    let getperformanceDirector = data.data.performance_director;
    let getdancer = data.data.dancer;
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
    let getcoverart = data.data.cover_art;

    settitle1(gettitle1);
    settitle2(gettitle2);
    settitle3(gettitle3);
    settype(gettype);
    setartist1(getartist1);
    setartist2(getartist2);
    setartist3(getartist3);
    setartist4(getartist4);
    setrelease1(getrelease1);
    setrelease2(getrelease2);
    setrecorded(getrecorded);
    setlength(getlength);
    setlabel(getlabel);
    setdistributor(getdistributor);
    setalbumstatus(getalbumstatus);
    setsong1(getsong1);
    setsong2(getsong2);
    setsong3(getsong3);
    setlyric1(getlyric1);
    setlyric2(getlyric2);
    setlyric3(getlyric3);
    setlyric4(getlyric4);
    setcomposer1(getcomposer1);
    setcomposer2(getcomposer2);
    setcomposer3(getcomposer3);
    setcomposer4(getcomposer4);
    setcomposer5(getcomposer5);
    setcomposer6(getcomposer6);
    setcomposer7(getcomposer7);
    setarranger1(getarranger1);
    setarranger2(getarranger2);
    setarranger3(getarranger3);
    setarranger4(getarranger4);
    setarranger5(getarranger5);
    setexecutiveProducer(getexecutiveProducer);
    setcreativeDirector(getcreativeDirector);
    setmusicProducer1(getmusicProducer1);
    setmusicProducer2(getmusicProducer2);
    setmusicProducer3(getmusicProducer3);
    setar1(getar1);
    setar2(getar2);
    setar3(getar3);
    setrecordingEngineer1(getrecordingEngineer1);
    setrecordingEngineer2(getrecordingEngineer2);
    setrecordingEngineer3(getrecordingEngineer3);
    setrecordingEngineer4(getrecordingEngineer4);
    setmixingEngineer1(getmixingEngineer1);
    setmixingEngineer2(getmixingEngineer2);
    setmixingEngineer3(getmixingEngineer3);
    setmasterEngineer(getmasterEngineer);
    setmanagementDirector(getmanagementDirector);
    setmanagement1(getmanagement1);
    setmanagement2(getmanagement2);
    setmanagement3(getmanagement3);
    setmanagement4(getmanagement4);
    setmanagement5(getmanagement5);
    setmanagement6(getmanagement6);
    setmanagement7(getmanagement7);
    setadministration1(getadministration1);
    setadministration2(getadministration2);
    setpressPublicist(getpressPublicist);
    setstylingDirector(getstylingDirector);
    sethairDirector(gethairDirector);
    setmakeupDirector(getmakeupDirector);
    setchoreography(getchoreography);
    setmusicVideo1(getmusicVideo1);
    setmusicVideo2(getmusicVideo2);
    setmusicVideo3(getmusicVideo3);
    setmusicVideo4(getmusicVideo4);
    setperformanceDirector(getperformanceDirector);
    setdancer(getdancer);
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
                          <td className="verticals"> 
                            <li className="title-list">{title1}</li>
                            <li className="title-list">{title2}</li>
                            <li className="title-list">{title3}</li> 
                          </td>
                        </tr>
                        <tr>
                          <td className="ver">Type</td>
                          <td className="title-lists">{type}</td>
                        </tr>
                        <tr>
                          <td className="vertical">Artist</td>
                          <td> 
                            <ul className="datalist">
                            <li className="title-list">{artist1}</li>
                            <li className="title-list">{artist2}</li>
                            <li className="title-list">{artist3}</li>
                            <li className="title-list">{artist4}</li> 
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="vertical" >Release</td>
                          <td> 
                            <ul className="datalist">
                            <li className="title-list">{release1}</li>
                            <li className="title-list">{release2}</li>
                            </ul>
                          </td>
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
                          <td className="title-lists">{albumstatus}</td>
                        </tr>
                        <tr>
                          <td className="vertical">Tracklist</td>
                          <td> 
                            <ul className="datalist">
                            <li className="title-list">{song1}</li>
                            <li className="title-list">{song2}</li>
                            <li className="title-list">{song3}</li>
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
                          <td className="vertical" >Press Publicist</td>
                          <td className="title-lists">{pressPublicist}</td>
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
                          <td className="vertical" >Dancer</td>
                          <td className="title-lists">{dancer}</td>
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
            </ul>
            </div>
</Container>

  );

}

export default Solo;
