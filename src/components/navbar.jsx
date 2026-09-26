import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/teams">Teams</Link>
      <Link to="/players">Players</Link>
      <Link to="/matches">Matches</Link>
    </nav>
  );
};

export default Navigation;
