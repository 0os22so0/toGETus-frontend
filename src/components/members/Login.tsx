import { useState } from 'react';
import { Link } from 'react-router-dom';
import BasicButton from 'components/BasicButton';
import BasicInput from 'components/BasicTextInput';
import GoogleButton from 'components/members/GoogleButton';
import { useNavigate } from 'react-router';
import toGETusLogo from 'images/logo.png';
import { Formik, Form, FormikHelpers } from 'formik';

interface Values {
  email: string;
  password: string;
}

/**
 * 로그인 페이지(/)
 * @returns
 */
const Login = () => {
  const initialValues: Values = { email: '', password: '' };
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

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

  // const onLogin = async () => {
  //   console.log({
  //     userId: email,
  //     password: password,
  //   });
  //
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
  //
  //   navigate('/rest-room');
  // };

  return (
    <main className="flex flex-col justify-between items-center pt-[10vh]">
      {/* Title */}
      <img src={toGETusLogo} alt={'togetus logo'} />

      {/* Login Form */}
      <Formik
        initialValues={initialValues}
        onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className="m-0 flex flex-col w-[100%] gap-8 py-[10vh]">
          <div className="flex flex-col gap-2">
            <label>• 소셜 ID로 로그인</label>
            <GoogleButton onSocial={onSocial} />
          </div>
          <div className="flex flex-col gap-2">
            <label>• 이메일 ID로 로그인</label>
            {/* <BasicInput type="email" placeholder="이메일 ID" onChange={(e) => setEmail(e.target.value)} />
            <BasicInput type="password" placeholder="비밀번호" autoComplete="off" onChange={(e) => setPassword(e.target.value)} /> */}
            <BasicInput id="email" type="email" placeholder="이메일 ID" />
            <BasicInput id="password" type="new-password" placeholder="비밀번호" />
            {/* <BasicButton className="bg-togetus-emoji" type='submit' onClick={() => onLogin()}> */}
            <BasicButton className="bg-togetus-emoji" type="submit">
              #가보자고!!
            </BasicButton>
          </div>
        </Form>
      </Formik>
      {/* Sign Up */}
      <Link to="/sign-up" className="underline text-stone-400">
        가입하기
      </Link>
    </main>
  );
};

export default Login;
