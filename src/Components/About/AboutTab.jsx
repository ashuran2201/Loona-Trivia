import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import "../../Style/Scss/About.scss";

function TabPanel(props) {
const { children, value, index, ...other } = props;

return (
<div role="tabpanel" hidden={value !==index} id={`wrapped-tabpanel-${index}`} aria-labelledby={`wrapped-tab-${index}`}
  {...other}>
  {value === index && (
  <Box p={3}>
    <Typography>{children}</Typography>
  </Box>
  )}
</div>
);
}

TabPanel.propTypes = {
children: PropTypes.node,
index: PropTypes.any.isRequired,
value: PropTypes.any.isRequired,
};

function a11yProps(index) {
return {
id: `wrapped-tab-${index}`,
'aria-controls': `wrapped-tabpanel-${index}`,
};
}

const useStyles = makeStyles((theme) => ({
root: {
flexGrow: 1,
backgroundColor: theme.palette.background.paper,
},
}));

export default function TabsWrappedLabel() {
const classes = useStyles();
const [value, setValue] = React.useState('one');

const handleChange = (event, newValue) => {
setValue(newValue);
};

return (
<div className="abt-loona">
  <AppBar position="static">
    <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example" className="tabel" >
      <Tab value="one" label="2014-2016: Creation" wrapped {...a11yProps('one')} />
      <Tab value="two" label="2016-2018: Predebut" {...a11yProps('two')} />
      <Tab value="three" label="2019: First comeback, “365”" {...a11yProps('three')} />
      <Tab value="four" label="2020: Second comeback and first win" {...a11yProps('four')} />
    </Tabs>
  </AppBar>
  <TabPanel value={value} index="one">
    <p className="loona-history">
      Prior to the creation of Loona, Jaden Jeong the former A&R Director of BlockBerry Creative already has the
      concept of Loona planned before being introduced to Polaris Entertainment, the parent company of BlockBerry
      Creative.
      In fact when he still worked for Woolim Entertainment. People believe that he planned to create Lovelyz as a
      girlGroup with a mysterious concept release in the same manner as loona (releasing solo before debuting as a
      group) but the project was scrapped because of financial reason. after that he bring those concept to
      Polaris Entertainment and in early 2016 BlockBerry Creative was created.</p>
  </TabPanel>
  <TabPanel value={value} index="two">
    <ul className="loona-history">
      <li>
        September 26 2016: the first teaser for member Heejin was released across multiple social media
        platforms including Youtube, Instagram, Twitter, and Facebook. until October 5, when the Music Video
        for“VIVID” was released.</li>
      <li>
        October 28 2016: the second member Hyunjin was also revelead in the similiar manner, teaser for both
        Hyunjin Solo song “Around You” and a duet with Heejin “I’ll Be There” was also released. And the solo
        album Hyunjin was released on November 17.</li>
      <li>
        December 8 2016: the third member Haseul continued the patern. Her solo album Haseul, was released on
        December 15, including her solo “Let Me In” and a Christmas-themed trio named “The Carol”.</li>
      <li>
        January 4 2017: Yoejin was revelead as the fourth member. Her solo album "YeoJin", was released on
        January 16, including her solo song “Kiss Later”, HeeJin and HyunJin’s duet “My Sunday”, and HaSeul and
        YeoJin’s duet “My Melody”. It was the only solo album released to include more than two songs.</li>
      <li>
        February 5 2017: it was announced LOONA would have a new project. The project would be a sub-unit called
        LOONA 1/3 composed of three current members (HeeJin, HyunJin, HaSeul, or YeoJin) and one unrevealed
        member. </li>
      <li>
        February 12 2017: ViVi was revealed to be the new member joining the unit. </li>
      <li>
        February 14 2017: (Valentine’s Day), a 1:19 Instagram-styled teaser for LOONA 1/3’s “Valentine Girl” was
        released. It revealed that HeeJin, HyunJin, and HaSeul would be the three other members of the
        unit.“Valentine Girl”’s Korean name, “3월을 기다려”, means “wait for March” in English, hinting at LOONA
        1/3’s upcoming debut in March.</li>
      <li>
        February 28 2017: the first teaser for their debut was released.</li>
      <li>
        March 10 2017: the album preview for their mini-album Love & Live was released.</li>
      <li>
        March 13 2017: the album was released with a music video for the title track, “Love & Live”. LOONA’s
        first televised music show promotions, featuring “Love & Live”, were held exclusively on SBS’s Inkigayo.
      </li>
      <li>
        April 5 2017: ViVi was confirmed as the “April Girl”. </li>
      <li>
        April 16 2017: it was announced that when the music video for “Everyday I Love You (feat. HaSeul)”
        reached 300K views on YouTube, the music video for "Everyday I Need You” featuring then-unrevealed
        member JinSoul would be released.
        The day after, April 17 2017: her single, ViVi, was released, including “Everyday I Love You (feat.
        HaSeul)” and “Everyday I
        Need You (feat. JinSoul)”. </li>
      <li>
        April 23 2017: LOONA 1/3’s repackaged mini-album, Love & Evil, was revealed
        with teasers of the members and a teaser for the title track “Sonatine”. Love & Evil was released on
        April 27, and promoted with two performances of "Sonatine" on Inkigayo.In the music video description
        for “Sonatine”, LOONA’s storyline, titled the LOOΠΔVERSE, was introduced. The description also revealed
        that “The girls of May, June, and July will be of another unit.”
      </li>
      <li>
        May 13 2017: the music video for “Everyday I Need You” was finally released featuring a one-second clip
        of
        unrevealed member JinSoul.</li>
      <li>
        May 15 2017: Kim Lip was revealed as the sixth member. Her single album "Kim Lip" was released on May
        23, with her solos “Eclipse” and “Twilight”. The music video for “Eclipse” was released the same day.
      </li>
      <li>
        On June 13 2017: JinSoul was revealed as the seventh member.</li>
      <li>
        June 20 2017: LOONA’s web drama Woomanna was announced.</li>
      <li>
        June 26 2017: JinSoul’s single JinSoul was released, including her solo “Singing in the Rain” and a duet
        with Kim Lip, “Love Letter”. The music video for “Singing in the Rain” was released the same day.
      </li>
      <li>
        July 7 2017: LOONA 1/3’s “Rain 51Db” music video was released.</li>
      <li>
        July 10 2017: a special music video for
        JinSoul’s “Singing in the Rain” was released featuring member HeeJin exclusively on V Live.</li>
      <li>
        July 12 2017:Choerry was revealed as the eighth member.</li>
      <li>
        July 28 2017: Choerry was released, featuring Choerry’s solo, “Love Cherry Motion”, and a duet titled
        “Puzzle” with fellow member JinSoul.
      </li>
      <li>
        August 30 2017: BlockBerryCreative revealed a teaser for the second sub-unit of LOONA, ODD EYE
        CIRCLE, which contains members Kim Lip, JinSoul, and Choerry.
      </li>
      <li>
        September 19 2017: the preview teaser for the lead single of an album by ODD EYE CIRCLE was released.
        The
        day after, September 20, the album title was revealed in a
        preview as Mix & Match. The album was released on September 21, along with a music video for the title
        track, “Girl Front”. The music video description for “Girl Front” revealed that LOONA would hold a
        concert
        once all three units debuted. During that time, members HeeJin, HyunJin, and HaSeul were announced to
        participate in the survival show MIXNINE.
      </li>
      <li>
        October 18 2017: it was announced that a repackage album titled Max & Match would be released.
      </li>
      <li>
        On October 23 2017:
        the promised “LOONATIC (English Version)” was released across international platforms.
      </li>
      <li>
        On October 31 2017: “Max &
        Match” was released, along with a music video for the title track, “Sweet Crazy Love”.
      </li>
      <li>
        November 14 2017: Yves was revealed as the ninth member. Different from the previous teasers of other
        members, Yves’s teaser featured a reversed link, “dlrowehtanool.com” instead of the normal
        “loonatheworld.com”. The link would lead to a website that played a video of a mobius strip rotating
        LOONA’s music video logo. The video later changed to a spinning DNA helix titled “Eden” during one of
        the upcoming member’s reveals. This new video would tease the concept of the third sub-unit. November
        28, Yves was released with her solos ”new” and “D-1”.
      </li>
      <li>
        December 13 2017: digital single ”The Carol 2.0” was released, featuring ViVi, Choerry, and Yves under
        the transverse unit ViRryVes (pronounced as “believe”).</li>
      <li>
        December 14 2017: Chuu was revealed as the tenth member.</li>
      <li>
        December 28 2017: Chuu was released, including her solo ”Heart Attack” and Yves and Chuu’s duet ”Girl's
        Talk”. Chuu’s ”Heart Attack” quickly gained attention from many news outlets for its inclusion of LGBT
        themes in its music video. These themes were later stated to have been unintentional.
      </li>
      <li>
        January 15 2018: Go Won was revealed as the eleventh member. On January 30, Go Won was released,
        including her solo “One & Only” and Chuu and Go Won’s duet “See Saw”, featuring Kim Lip.</li>
      <li>
        March 17 2018: Olivia Hye was revealed as the twelfth and final member.
      </li>
      <li>
        March 30 2018: Olivia Hye was released, including her solo “Egoist”, featuring JinSoul, and Olivia Hye’s
        duet with Go Won, “Rosy”, featuring HeeJin.
      </li>
      <li>
        April 26 2018: BlockBerryCreative revealed a teaser for the third and final sub-unit of LOONA, yyxy,
        which contains the last four members Yves, Chuu, Go Won, and Olivia Hye.
      </li>
      <li>
        May 4 2018: it was announced LOONA would be partnering with Live Nation to help manage their live
        events.
      </li>
      <li>
        May 10 2018: and the following days, teasers for beauty&thebeat were released including group and
        individual photos, and images that revealed each track. The teaser for “love4eva” revealed that the
        Canadian musician Grimes would be featured in the track.
      </li>
      <li>
        May 30 2018: the album was released along with a music video for the title track, “love4eva”.
      </li>
      <li>
        June 2 2018: yyxy held their debut stage at LOONA Premier Greeting: Line & Up, performing “love4eva” and
        “frozen”.</li>
      <li>
        June 10 2018: the teaser titled “go into Orbit” was released, announcing LOONA would hold their debut
        concert on August 19, 2018.</li>
      <li>
        June 15 2018: recruitment for LOONA’s first official fan club opened. It was also announced that the
        official
        fan club name would be revealed on July 6. A day later on June 16, it was announced that LOONA Cinema
        Theory: Up & Line would be held again, but in Busan, South Korea.
      </li>
      <li>
        July 6 2018: the day of the fan club name announcement, a contest was held. The winner would be chosen
        from a
        pool of people who could correctly guess the fan club name. They would receive all 12 signed solo
        albums.
        Due to the contest, the reveal was postponed to July 10.
      </li>
      <li>
        July 7 2018: Cinema Theory was held in Busan. The
        attendees were joined by HeeJin, HyunJin, and ViVi.
      </li>
      <li>
        July 10 2018: the fan club name, “Orbit”, was announced
        through a video.
      </li>
      <li> July 18 2018: the debut concert was revealed to be named LOONAbirth.</li>
      <li>
        July 28 2018: the teaser
        video “+ +” was released.
      </li>
      <li>
        July 30 2018: it was announced that the lead single “favOriTe” would be released on
        August 7.
      </li>
      <li>
        August 1 2018: the teaser for “favOriTe” was released.
      </li>
      <li>
        August 7 2018: the music video for “favOriTe” was
        released.</li>
      <li>
        August 8 - 14 2018: yearbook-like teaser photos titled “+ +” were released every 12
        hours for each of the members.
      </li>
      <li>
        August 14 2018: it was formally announced that [+ +] would be LOONA’s debut
        mini-album.</li>
      <li> August 16 2018: the teaser for the title track “Hi High“ was released.</li>
      <li>
        August 19 2018: they held
        their debut concert LOONAbirth and performed the songs from [+ +] for the first time. At 4:00 pm (KST),
        the
        next day, they held their debut showcase at Blue Square Hall. An hour later, the album was released,
        along
        with the music video for “Hi High”.</li>
      <li>
        August 23 2018: LOONA held their debut stage at M Countdown with a
        shortened version of “favOriTe” followed by “Hi High”.
      </li>
      <li>
        September 3 2018: it was announced a “Hi High (Original version)” Choreography MV would be released on
        September 5 midnight (KST) to celebrate 15 million views for “Hi High”.
      </li>
      <li>
        October 13 2018: LOONA concluded promotions for [+ +] with a goodbye stage on SBS Inkigayo. The next day
        on
        October 14, a reversed teaser for [X X] was released. That same day, it was announced more copies of [+
        +]
        would be printed due to all 50,000 first-press copies being sold.
      </li>
      <li>
        October 16 2018: a teaser was released
        for LOONA Studio, an event that would take place from November 23–25 at Hongdae MUV Hall in Seoul.
      </li>
    </ul>
  </TabPanel>
  <TabPanel value={value} index="three">
        <ul className="loona-history">
            <li> January 1 2019: a teaser titled “X1X” was released, teasing their next comeback. Two days later, it was
                announced the group would hold a concert, LOONAVERSE Concert, on February 16–17 to coincide with the
                release
                of their new album, [X X]. As hinted at the end of the “X1X” teaser with four numbers (1, 11, 21, 31),
                LOONA
                released teasers on the 11th, 21st, and 31 January.</li>
            <li> February 16 - 17 2019: LOONA held their concert, LOONAVERSE Concert. On February 19, the music video
                for
                “Butterfly” was released, coinciding with the release of [X X]. The [X X] promotional period lasted six
                weeks.</li>
            <li> February 19 2019: it was revealed that all four versions of the album had sold out entirely and were
                under
                additional printing; release for the Normal A versions of the album were postponed to February 21, and
                the
                Normal B and Limited A & B versions of the album were postponed to February 26.
            </li>
            <li> February 25 2019: Orbits broke the previous record for the number of pre-votes for The Show by
                gathering
                a
                total of 3,677,262 votes. It was also revealed that the Normal B and Limited A & B versions would be
                postponed again to March 6, but a later update after consulting with the new distributor, Kakao M,
                revealed that Limited A & B would stop production entirely.

                Kakao M underestimated album sales, causing the albums to be sold out very quickly. They also uploaded
                the
                album to a completely new Spotify account, which made it difficult for fans to find the album. This
                troubled
                release process was criticized by fans as “sabotaging” LOONA’s comeback.

                A teaser titled “#” was released on LOONA’s official YouTube channel on March 31, following the
                precedent set by the X X teasers. Unlike the [X X] teaser cycle, however, the second [#] teaser was not
                released for another eight months.</li>
            <li> November 1 2019: Jaden Jeong, who had since left the LOONA project, confirmed that the release of LOONA
                the
                Ballad was cancelled, but a Japanese debut was still possible.</li>
            <li> November 19 2019: it was announced that LOONA would have a fan meeting, LOOΠΔ Premier Greeting: Meet &
                Up, on
                December 14 at YES24 Live Hall. On December 9, it was announced that the lead single for [#], “365”,
                would
                be released on December 13.</li>
            <li> December 12 2019: the teaser for “365” was released. </li>
            <li>
                December 13 2019: “365” was released on all
                streaming
                platforms. It charted at #1 on iTunes’s Top Songs chart and Billboard’s World Digital Song Sales chart.
                A
                day later, LOONA held their fan meeting, LOONA Premier Greeting: Meet & Up, and performed “365” for the
                first time. During Meet & Up, a teaser played as a preview for their next comeback. After the fan-meet,
                the
                teaser released for the public on YouTube and titled “#1”.
            </li>

        </ul>
  </TabPanel>
  <TabPanel value={value} index="four">
        <ul className="loona-history">
            <li>
                January 2020, CJ E&M began reissuing LOONA’s pre-debut albums and older releases, specifically HyunJin
                version A, YeoJin version A, ViVi version A, Kim Lip version B, and JinSoul version A.

                These reissues were cut short, however, when Danal Entertainment took over the rights to the releases,
                resulting in the albums being pulled from shelves in less than a week after release.

                A few weeks later, in mid-February, Danal Entertainment began reissuing the albums as well, re-releasing
                all
                versions of pre-debut albums except limited versions of subunit albums. This resulted in an influx of
                sales,
                with many of the albums going from over a thousand to over ten thousand albums sold in less than a
                month.</li>
            <li>
                January 9 2020: a teaser titled “#2” was released on LOONA’s YouTube channel, followed by “#3”
            </li>
            <li>
                January 22 2020: A music video teaser for the upcoming title track was released on February 3.</li>
            <li>
                February 20 2020: LOONA released their second mini-album, [#], , featuring the title track “So
                What”.
                Member and leader HaSeul was unable to participate in promotions or two of the songs featured on the
                album
                due to mental health concerns.</li>
            <li>
                February 24 2020: LOONA’s official Japanese fan club, Orbit Japan, was introduced through LOONA’s fan
                cafe.</li>
            <li>
                March 10 2020:
                A video teaser for Orbit Japan was released on YouTube. Initial membership registration
                ran
                from March 12 to May 23.</li>
            <li>
                March 12 2020: during the final week of [#] promotions, LOONA earned their first ever music show win on
                Mnet’s
                M Countdown. This achievement came 540 days after LOONA’s debut and one day before the three-year
                anniversary of LOONA 1/3’s debut in 2017.</li>
            <li>
                June 16 2020: BlockBerryCreative announced preorders for LOONA’s official light stick on their fan
                cafe.
            </li>
            <li>
                June 29 2020:
                Pre-orders for Orbit 2.0 members opened , while pre-orders for regular membership opened on
                July
                1st.
            </li>
        </ul>
  </TabPanel>
</div>
);
}