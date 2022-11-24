import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1>1. Login</h1>
      <ul>
        <li>
          <Link to="/rest-room">Log In</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign Up</Link>
        </li>
      </ul>
    </>
  );
};

export default Login;
