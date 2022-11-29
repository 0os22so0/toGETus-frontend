import { Link } from "react-router-dom";
import KakaoLoginButton from "../../images/kakao_login_medium_narrow.png";
import GoogleButton from "./GoogleButton";

const Login = () => {
  const redirect_uri = "http://localhost:3000/sign-up";

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
      <form autoComplete="off">
        <input type="text" placeholder="ID" style={{ margin: "10px" }} />
        <input type="password" placeholder="PW" style={{ margin: "10px" }} />
        <br />
        <ul>
          <button
            style={{ border: "1px solid gray" }}
            onClick={() => console.log("Sign in")}
          >
            <Link to="/rest-room">Log In</Link>
          </button>
          <button
            onClick={async () => {
              await fetch(
                `https://kauth.kakao.com/oauth/authorize?client_id=${encodeURIComponent(
                  process.env.REACT_APP_KAKAO_KEY ?? ""
                )}&redirect_uri=${encodeURIComponent(
                  redirect_uri
                )}&response_type=code HTTP/1.1`
              ).then((response) => console.log(response));
            }}
          >
            <img src={KakaoLoginButton} alt="Kakao Login Button" />
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
