import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/navbar";

import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Players from "./pages/Players";
import Matches from "./pages/Matches";
import MatchDetails from "./pages/matchDetails";
import PlayerDetails from "./pages/playersDetails";
import TeamDetails from "./pages/teamDetails";
import Team from "./pages/Teams";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:id" element={<TeamDetails />} />
        <Route path="/players" element={<Players />} />
        <Route path="/players/:id" element={<PlayerDetails />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/matches/:id" element={<MatchDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
