import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../services/api";
import "../styles/teamDetails.css";

const TeamDetails = () => {
  const { id } = useParams();

  const [team, setTeam] = useState(null);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await api.get(`/teams/${id}`);

        console.log("Team API response:", response.data);

        setTeam(response.data.team);
        setPlayers(response.data.players);
      } catch (error) {
        console.log("Failed to fetch team details", error);
      }
    };

    fetchTeam();
  }, [id]);

  if (!team) {
    return <p>Loading team details...</p>;
  }

  return (
    <div className="team-details">
      <Link to="/teams" className="back-button">
        ← Back to Teams
      </Link>

      <div className="team-details-card">
        {team.logo && (
          <img
            src={team.logo}
            alt={`${team.name} logo`}
            className="team-details-logo"
          />
        )}

        <div className="team-details-info">
          <h1>{team.name}</h1>

          <p>
            <strong>Short Name:</strong> {team.shortName || "Not available"}
          </p>

          <p>
            <strong>Country:</strong> {team.country || "Not available"}
          </p>

          <p>
            <strong>Coach:</strong> {team.coach || "Not available"}
          </p>
        </div>
      </div>

      <div className="team-players">
        <h2>Players</h2>

        {players.length === 0 ? (
          <p>No players found for this team.</p>
        ) : (
          <div className="team-player-list">
            {players.map((player) => (
              <Link
                to={`/players/${player._id}`}
                key={player._id}
                className="team-player"
              >
                {player.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamDetails;
