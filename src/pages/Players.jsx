import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/player.css";
import { Link } from "react-router-dom";

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await api.get("/players");
        setPlayers(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("failed to fetch the players details");
      }
    };
    fetchPlayers();
  }, []);

  return (
    <div className="players">
      <h1>Cricket Players</h1>

      <div className="player-cards">
        {players.map((player) => (
          <Link
            to={`/players/${player._id}`}
            className="player-card"
            key={player._id}
          >
            {" "}
            {player.photo && (
              <img
                src={player.photo}
                alt={player.name}
                className="player-photo"
              />
            )}
            <h2>{player.name}</h2>
            <p>
              <strong>Role:</strong> {player.role}
            </p>
            <p>
              <strong>Team:</strong> {player.team?.name || "Unknown"}
            </p>
            <p>
              <strong>Batting:</strong> {player.battingStyle || "Not available"}
            </p>
            <p>
              <strong>Bowling:</strong> {player.bowlingStyle || "Not available"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Players;
