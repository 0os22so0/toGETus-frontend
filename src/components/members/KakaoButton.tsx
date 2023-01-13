import KakaoLoginButton from 'components/images/kakao_login_medium_narrow.png';

const redirect_uri = 'http://localhost:3000/sign-up';

const KakaoButton = () => {
  return (
    <button
      onClick={async () => {
        await fetch(
          `https://kauth.kakao.com/oauth/authorize?client_id=${encodeURIComponent(
            process.env.REACT_APP_KAKAO_KEY ?? ''
          )}&redirect_uri=${encodeURIComponent(redirect_uri)}&response_type=code HTTP/1.1`
        ).then((response) => console.log(response));
      }}
    >
      <img src={KakaoLoginButton} alt="Kakao Login Button" />
    </button>
  );
};

export default KakaoButton;
