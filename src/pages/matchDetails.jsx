import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../services/api";
import "../styles/matchDetails.css"

const MatchDetails = () => {
  const { id } = useParams();

  const [match, setMatch] = useState(null);

  useEffect(() => {
    const fetchMatch = async () => {
      try {
        const response = await api.get(`/matches/${id}`);

        console.log("Match API response:", response.data);

        setMatch(response.data);
      } catch (error) {
        console.log("Failed to fetch match details", error);
      }
    };

    fetchMatch();
  }, [id]);

  if (!match) {
    return <p>Loading match details...</p>;
  }

  return (
    <div className="match-details">
      <Link to="/matches" className="back-button">
        ← Back to Matches
      </Link>

      <div className="match-details-card">
        <div className="match-type">{match.matchType}</div>

        <h1>
          {match.team1?.country} <span>VS</span> {match.team2?.country}
        </h1>

        <p>
          <strong>Venue:</strong> {match.venue || "Not available"}
        </p>

        <p>
          <strong>Date:</strong>{" "}
          {new Date(match.matchDate).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>

        <p>
          <strong>Time:</strong>{" "}
          {new Date(match.matchDate).toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
};

export default MatchDetails;
