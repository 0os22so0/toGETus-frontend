import { Link } from 'react-router-dom';

const PartySetting = () => {
  return (
    <>
      <h1>9. Party Setting</h1>
      <ul>
        <li>
          <Link to="./">Party Setting</Link>
        </li>
        <li>
          <Link to="./history">Party History</Link>
        </li>
      </ul>
    </>
  );
};

export default PartySetting;
