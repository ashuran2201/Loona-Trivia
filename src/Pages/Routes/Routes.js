import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Homepage";
import About from "../About";
import Loonaverse from "../Loonaverse";
import Members from "../Members";
import MemberDetails from "../MemberDetails";
import Discography from "../Discography";
import Solo from "../../Components/Discography/Solo";
import SubUnit from "../../Components/Discography/SubUnit";
import Group from "../../Components/Discography/Group";
import Music from "../../Components/MusicVideo/Musicv";
import Contact from "../../Components/Contact/Contact";
import Quiz from "../../Components/Quiz/QuizMainPage";
const Routes = () => {
    return (
        <Router>
            <Switch>
        <Route path="/" strict  exact   component={Home}/>
        <Route path="/about" strict  exact   component={About}/>
        <Route path="/loonaverse" strict  exact   component={Loonaverse}/>
        <Route path="/members" strict  exact   component={Members}/>
        <Route path="/memberdetails" strict  exact   component={MemberDetails}/>
        <Route path="/discography" strict  exact   component={Discography}/>
        <Route path="/solo" strict  exact   component={Solo}/>
        <Route path="/subunit" strict  exact   component={SubUnit}/>
        <Route path="/group" strict  exact   component={Group}/>
        <Route path="/musicvideo" strict  exact   component={Music}/>
        <Route path="/contact" strict  exact   component={Contact}/>
        <Route path="/quiz" strict  exact   component={Quiz}/>

            </Switch>
        </Router>
    )
}

export default Routes;