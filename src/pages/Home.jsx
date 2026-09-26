import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [teamsResponse, playersResponse, matchesResponse] =
          await Promise.all([
            api.get("/teams"),
            api.get("/players"),
            api.get("/matches"),
          ]);

        setTeams(teamsResponse.data);
        setPlayers(playersResponse.data);
        setMatches(matchesResponse.data);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      } finally {
        setLoading(false);
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
          <p>{loading ? "..." : teams.length}</p>
        </Link>

        <Link to="/players" className="card">
          <h2>Players</h2>
          <p>{loading ? "..." : players.length}</p>
        </Link>

        <Link to="/matches" className="card">
          <h2>Matches</h2>
          <p>{loading ? "..." : matches.length}</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
