import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/match.css";
import { Link } from "react-router-dom";

const Matches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await api.get("/matches");

        setMatches(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Failed to fetch the matches", error);
      }
    };
    fetchMatches();
  }, []);

  return (
    <div className="matches">
      <h1>Cricket Matches</h1>

      <div className="match-cards">
        {matches.map((match) => (
          <Link
            className="match-card"
            to={`/matches/${match._id}`}
            key={match._id}
          >
            <div className="match-type">{match.matchType}</div>

            <h2>
              {match.team1?.country} <span>VS</span> {match.team2?.country}
            </h2>

            <p>
              <strong>Venue:</strong> {match.venue}
            </p>

            <p>
              <strong>Date:</strong>{" "}
              {new Date(match.matchDate).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Matches;
