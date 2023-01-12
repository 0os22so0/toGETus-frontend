import { useState } from "react";
import { Link } from "react-router-dom";
import BasicButton from "components/BasicButton";
import BasicInput from "components/BasicTextInput";
import GoogleButton from "components/members/GoogleButton";
import { useNavigate } from "react-router";
import { BiRightArrowAlt } from "react-icons/bi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSocial = async (props: {
    socialId: string;
    socialType: string;
    email: string;
    nickname: string;
  }) => {
    const { socialId, socialType, email, nickname } = props;
    console.log({
      socialId,
      socialType,
      email,
      nickname,
    });
  };

  const onLogin = async () => {
    console.log({
      userId: email,
      password: password,
    });

    // await fetch("http://3.35.176.118:8080/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     userId: "test@test.com",
    //     password: "1234",
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => alert(data));

    navigate("/rest-room");
  };

  return (
    <main className="flex flex-col justify-between items-center pt-[10vh]">
      <h1 className="text-yellow-500">🤝 toGETus 🤝</h1>

      <form className="m-0 flex flex-col w-[100%] gap-4 py-[10vh]">
        <label>소셜 ID로 로그인</label>
        <GoogleButton onSocial={onSocial} />
        <label>이메일 ID로 로그인</label>
        <BasicInput
          type="username"
          placeholder="ID"
          onChange={(e) => setEmail(e.target.value)}
        />
        <BasicInput
          type="password"
          placeholder="PW"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
        />
        <BasicButton onClick={() => onLogin()}>로그인</BasicButton>
      </form>

      <Link to="/sign-up" className="underline text-stone-400">
        가입하기
      </Link>
    </main>
  );
};

export default Login;
