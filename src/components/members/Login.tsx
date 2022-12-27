import { useState } from "react";
import { Link } from "react-router-dom";

import GoogleButton from "./GoogleButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  type TOnSocial = {
    socialId: string;
    socialType: string;
    email: string;
    nickname: string;
  };
  const onSocial = async (props: TOnSocial) => {
    const { socialId, socialType, email, nickname } = props;
    console.log({
      socialId,
      socialType,
      email,
      nickname,
    });
  };

  return (
    <main className="h-[100%] flex flex-col py-40 items-center">
      <h1 className="mb-8">로그인</h1>
      <form className="m-0 flex flex-col w-[60vw]">
        <input
          type="username"
          placeholder="ID"
          className="m-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="PW"
          className="m-2"
          autoComplete="off"
        />
        <br />
        <button
          className="border border-slate-200 "
          onClick={async (e) => {
            e.preventDefault();
            await fetch("http://43.201.63.20:8080/api/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId: "test@test.com",
                password: "1234",
              }),
            })
              .then((response) => response.json())
              .then((data) => console.log(data));
          }}
        >
          Log In
          {/* <Link to="/rest-room">Log In</Link> */}
        </button>
      </form>
      <button
        className="border border-red-400"
        onClick={async (e) => {
          e.preventDefault();

          await fetch("http://43.201.6.111:8080/api/user", {
            method: "GET",
            headers: {
              Authorization:
                "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QHRlc3QuY29tIiwiYXV0aCI6IlJPTEVfQUQiLCJleHAiOjE2NzEwMjcyMjF9.4MM9iMPIYfXDevp0BQF4MrVnpSNNsN7Vf_Sm0LkkxAs",
            },
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log(data);
            });
        }}
      >
        Users
        {/* <Link to="/rest-room">Log In</Link> */}
      </button>

      <GoogleButton onSocial={onSocial} />
      <Link to="/sign-up">Sign Up</Link>
    </main>
  );
};

export default Login;
