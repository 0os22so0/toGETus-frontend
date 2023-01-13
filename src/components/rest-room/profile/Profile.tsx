import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <>
      <h1>4, 7 Profile</h1>
      <ul>
        <li>
          <Link to="history">History</Link>
        </li>
        <li>
          <Link to="badge">Badge</Link>
        </li>
      </ul>
    </>
  );
};

export default Profile;
