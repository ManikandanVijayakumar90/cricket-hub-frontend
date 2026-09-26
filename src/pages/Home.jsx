import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamsResponse = await api.get("/teams");
        const playersResponse = await api.get("/players");
        const matchesResponse = await api.get("/matches");

        setTeams(teamsResponse.data);
        setPlayers(playersResponse.data);
        setMatches(matchesResponse.data);
      } catch (error) {
        console.log("Failed to fetch dashboard data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      <h1>Welcome to Cricket Hub 🏏</h1>
      <p>Manage your teams, players, and matches.</p>

      <div className="dashboard-cards">
        <Link to="/teams" className="card">
          <h2>Teams</h2>
          <p>{teams.length}</p>
        </Link>

        <Link to="/players" className="card">
          <h2>Players</h2>
          <p>{players.length}</p>
        </Link>

        <Link to="/matches" className="card">
          <h2>Matches</h2>
          <p>{matches.length}</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
