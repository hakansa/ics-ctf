import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ForgetPasswordPage from "./components/pages/ForgetPasswordPage";
import HomePage from "./components/pages/HomePage";
import ChallengesPage from "./components/pages/Challenges";
import TeamPage from "./components/pages/Team";
import JoinTeamPage from "./components/pages/JoinTeam";
import CreateTeamPage from "./components/pages/CreateTeam";
import TeamExistPage from "./components/pages/TeamExist";
import ChallengePage from "./components/pages/ExChallenge"
import ScoreboardPage from "./components/pages/Scoreboard";
import ProfilePage from "./components/pages/ProfilePage";
import "./App.css";
import TeamsPage from "./components/pages/Teams";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/forget-password" component={ForgetPasswordPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/Challenges" component={ChallengesPage} />
        <Route path="/Team" component={TeamPage} />
        <Route path="/JoinTeam" component={JoinTeamPage} />
        <Route path="/CreateTeam" component={CreateTeamPage} />
        <Route path="/TeamExist" component={TeamExistPage} />
        <Route path="/Challenge" component={ChallengePage} />
        <Route path="/Scoreboard" component={ScoreboardPage} />
        <Route path="/Profile" component={ProfilePage} />
        <Route path="/Teams" component={TeamsPage} />
      </Switch>
    </Router>
  );
}
