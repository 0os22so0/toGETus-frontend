import { useState } from 'react';
import { Link } from 'react-router-dom';
import BasicButton from 'components/BasicButton';
import BasicInput from 'components/BasicTextInput';
import GoogleButton from 'components/members/GoogleButton';
import { useNavigate } from 'react-router';
import toGETusLogo from 'images/logo.png';
import clsx from 'clsx';

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
    <main className="pt-[10vh]">
      <form className="flex flex-col justify-between items-center">
        {/* Title */}
        <img src={toGETusLogo} alt={'togetus logo'} className="w-[40vw]" />

        {/* Inputs */}
        <div className="m-0 flex flex-col w-[80%] py-[7vh]">
          <div className={clsx('flex flex-col gap-2', 'background-image: linear-gradient(-20deg, #E9DEFA 0%, #FBFCDB 100%);')}>
            <BasicInput type="email" placeholder="아이디" onChange={(e) => setEmail(e.target.value)} />
            <BasicInput type="password" placeholder="비밀번호" autoComplete="off" onChange={(e) => setPassword(e.target.value)} />
            <GoogleButton onSocial={onSocial} />
          </div>
        </div>

        {/* Buttons */}
        <div className="text-center">
          <BasicButton className="bg-black text-white mb-2" onClick={() => onLogin()}>
            들어갑시다
          </BasicButton>
          <BasicButton className="bg-white" onClick={() => navigate('sign-up')}>
            회원가입
          </BasicButton>
        </div>
      </form>
    </main>
  );
};

export default Login;
