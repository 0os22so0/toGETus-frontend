import { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';

const GoogleButton = ({
  onSocial,
}: {
  onSocial: ({
    socialId,
    socialType,
    email,
    nickname,
  }: {
    socialId: string;
    socialType: string;
    email: string;
    nickname: string;
  }) => Promise<void>;
}) => {
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_KEY,
        scope: 'email',
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const onSuccess = async (response: any) => {
    console.log('success');

    const {
      googleId,
      profileObj: { email, name },
    } = response;

    await onSocial({
      socialId: googleId,
      socialType: 'google',
      email,
      nickname: name,
    });
  };

  const onFailure = (response: any) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      className="h-[42px] !shadow text-black"
      clientId={process.env.REACT_APP_GOOGLE_KEY ?? ''}
      buttonText={'구글로 로그인'}
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
};

export default GoogleButton;
