import { useEffect, useState } from "react";
import api from "../services/api";

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await api.get("/teams");

        setTeams(response.data);
      } catch (error) {
        console.error("Failed to fetch teams:", error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div>
      <h1>Teams</h1>

      {teams.map((team) => (
        <div key={team._id}>
          <h2>{team.name}</h2>
          <p>{team.shortName}</p>
          <p>{team.country}</p>
        </div>
      ))}
    </div>
  );
};

export default Teams;
