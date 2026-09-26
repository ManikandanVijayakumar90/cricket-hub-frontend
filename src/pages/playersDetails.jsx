import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import { Link } from "react-router-dom";
import "../styles/playerDetails.css";

const PlayerDetails = () => {
  const { id } = useParams();

  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await api.get(`/players/${id}`);
        setPlayer(response.data);
      } catch (error) {
        console.log("Failed to fetch player details", error);
      }
    };

    fetchPlayer();
  }, [id]);

  if (!player) {
    return <p>Loading player details...</p>;
  }

  return (
    <div className="player-details">
      <Link to="/players" className="back-button">
        ← Back to Players
      </Link>

      <div className="player-details-card">
        {player.photo && (
          <img
            src={player.photo}
            alt={player.name}
            className="player-details-photo"
          />
        )}

        <div className="player-details-info">
          <h1>{player.name}</h1>

          <p>
            <strong>Role:</strong> {player.role}
          </p>

          <p>
            <strong>Team:</strong> {player.team?.name || "Unknown"}
          </p>

          <p>
            <strong>Country:</strong>{" "}
            {player.country || player.team?.country || "Not available"}
          </p>

          <p>
            <strong>Batting Style:</strong>{" "}
            {player.battingStyle || "Not available"}
          </p>

          <p>
            <strong>Bowling Style:</strong>{" "}
            {player.bowlingStyle || "Not available"}
          </p>
          <Link to={`/teams/${player.team?._id}`} className="view-team-button">
            View Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetails;
