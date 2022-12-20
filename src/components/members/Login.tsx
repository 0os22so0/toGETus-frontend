import { useState } from "react";
import { Link } from "react-router-dom";

import GoogleButton from "./GoogleButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        <input
          type="username"
          placeholder="ID"
          style={{ margin: "10px" }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="current-password"
          placeholder="PW"
          style={{ margin: "10px" }}
        />
        <br />
        <button
          style={{ border: "1px solid gray" }}
          onClick={async (e) => {
            e.preventDefault();
            // https://jsonplaceholder.typicode.com/todos/1
            // const test = await fetch("http://43.201.6.111:8080/api/login", {
            await fetch("http://43.201.6.111:8080/api/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId: "test@test.com",
                password: "1234",
              }),
            });
            // console.log(test);
            // .then((response) => response.json())
            // .then((data) => console.log(data));
          }}
        >
          Log In
          {/* <Link to="/rest-room">Log In</Link> */}
        </button>

        <button
          style={{ border: "1px solid tomato" }}
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
      </form>
    </>
  );
};

export default Login;
