import { useState } from 'react';
import { Link } from 'react-router-dom';
import BasicButton from 'components/BasicButton';
import BasicInput from 'components/BasicTextInput';
import GoogleButton from 'components/members/GoogleButton';
import { useNavigate } from 'react-router';
import toGETusLogo from 'images/logo.png';

/**
 * 로그인 페이지(/)
 * @returns
 */
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onSocial = async (props: { socialId: string; socialType: string; email: string; nickname: string }) => {
    const { socialId, socialType, email, nickname } = props;
    console.log({
      socialId,
      socialType,
      email,
      nickname,
    });
  };

  const onLogin = async () => {
    // await fetch('http://13.125.75.1:8080/api/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     userId: email,
    //     password: password,
    //   }),
    // })
    //   .then((response) => {
    //     response.json();
    navigate('/rest-room');
    // })
    // .catch((error) => console.log(error));
  };

  return (
    <main className="flex flex-col justify-between items-center pt-[10vh]">
      {/* Title */}
      <img src={toGETusLogo} alt={'togetus logo'} />

      {/* Login Form */}
      <form className="m-0 flex flex-col w-full gap-8 py-[10vh]">
        <div className="flex flex-col gap-2">
          <label>• 소셜 ID로 로그인</label>
          <GoogleButton onSocial={onSocial} />
        </div>
        <div className="flex flex-col gap-2">
          <label>• 이메일 ID로 로그인</label>
          <BasicInput type="email" placeholder="이메일 ID" onChange={(e) => setEmail(e.target.value)} />
          <BasicInput type="password" placeholder="비밀번호" autoComplete="off" onChange={(e) => setPassword(e.target.value)} />
          <BasicButton className="bg-togetus-emoji" onClick={() => onLogin()}>
            #가보자고!!
          </BasicButton>
        </div>
      </form>
      {/* Sign Up */}
      <Link to="/sign-up" className="underline text-stone-400">
        가입하기
      </Link>
    </main>
  );
};

export default Login;
