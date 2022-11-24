import { Link } from "react-router-dom";

const RestRoom = () => {
  return (
    <>
      <h1>2. Rest Room</h1>
      <ul>
        <li>
          <Link to="/party/party-name">Go to party</Link>
        </li>
        <li>
          <Link to="/party/new">creat new party</Link>
        </li>
        <li>
          <Link to="/rest-room/profile">My Profile</Link>
        </li>
      </ul>
    </>
  );
};

export default RestRoom;
