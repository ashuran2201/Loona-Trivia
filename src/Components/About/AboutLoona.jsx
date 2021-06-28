import React, { Component} from 'react';
import "../../Style/Scss/About.scss";
import Container from '@material-ui/core/Container';
import TabsWrappedLabel from './AboutTab';
class AboutLoona extends Component {
render() {
return (
<Container className="container" maxWidth="xl">
    <div className="about-container">
        <h1 className="whatis">
            What is LOONA?
        </h1>
        <p className="loona-desc">
            이달의 소녀 or Loona is a K-pop GirlGroup formed by BlockBerry Creative They Debuted on August 19, 2018.Loona is
            Debuted in a way unlike other group. While other group member revealed one and another, and then
            debuted as a group.
            Loona on the other hand revealed each member and debuted them as a solo artist
            before finally debuted as a group
        </p>
        <h1 className="whatis">
            Loona Name History
        </h1>
        <p className="loona-desc">
            The group korean name is 이달의 소녀 (idalui Sonyoe) which if translated to english mean “Girl of the Month”. And
            their english name was actually came from rearrangement of the first consonant of the hangul that spell
            out their name.In other words, ㅇㄷㅇㅅㄴ is rearranged to ㄴㅇㅇㄷㅅ and the consonant ㄷㅅ are changd to greek letter
            for delta(Δ) and pi(Π), which then becomes LOOΠΔ.
        </p>
        <h1 className="whatis">
            History
        </h1>
        <TabsWrappedLabel/>
    </div>
</Container>
)
}
}
export default AboutLoona;