import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

import "../styles/team.css";

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
          const response = await api.get("/teams");
        setTeams(response.data);
      } catch (error) {
        console.log("Failed to fetch teams", error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div className="teams">
      <h1>Cricket Teams</h1> 

      <div className="team-cards">
        {teams.map((team) => (
          <Link to={`/teams/${team._id}`} className="team-card" key={team._id}>
            {team.logo && (
              <img
                src={team.logo}
                alt={`${team.name} logo`}
                className="team-logo"
              />
            )}

            <h2>{team.name}</h2>

            <p>Short Name: {team.shortName}</p>
            <p>Country: {team.country}</p>
            <p>Coach: {team.coach || "Not available"}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Teams;
