import Feed from "./feed/Feed";
import { Link } from "react-router-dom";

const PartyRounge = () => {
  return (
    <>
      <h1>5. Party Rounge</h1>
      <Feed />
      <ul>
        <li>
          <Link to="./">Feed</Link>
        </li>
        <li>
          <Link to="./post">Write</Link>
        </li>
        <li>
          <Link to="./alarm">alarm</Link>
        </li>
        <li>
          <Link to="/rest-room/profile">My Setting</Link>
        </li>
        <li>
          <Link to="./setting">Party Setting</Link>
        </li>
      </ul>
    </>
  );
};

export default PartyRounge;
