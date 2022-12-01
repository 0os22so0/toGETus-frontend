import { Link } from "react-router-dom";

import GoogleButton from "./GoogleButton";

const Login = () => {
  const onSocial = async ({
    socialId,
    socialType,
    email,
    nickname,
  }: {
    socialId: string;
    socialType: string;
    email: string;
    nickname: string;
  }) => {
    console.log({
      socialId,
      socialType,
      email,
      nickname,
    });
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">1. Login</h1>
      <form>
        <input type="username" placeholder="ID" style={{ margin: "10px" }} />
        <input
          type="current-password"
          placeholder="PW"
          style={{ margin: "10px" }}
        />
        <br />
        <ul>
          <button
            style={{ border: "1px solid gray" }}
            onClick={() => console.log("Sign in")}
          >
            <Link to="/rest-room">Log In</Link>
          </button>

          <GoogleButton onSocial={onSocial} />
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </form>
    </>
  );
};

export default Login;
