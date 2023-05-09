import { userProfileState } from 'atoms/userProfile';
import clsx from 'clsx';
import BasicButton from 'components/BasicButton';
import BasicTextInput from 'components/BasicTextInput';
import InputWithLabel from 'components/InputWithLabel';
import Feed from 'components/rounge/feed/Feed';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import PartyCalendar from './PartyCalendar';

const PartyRounge = () => {
  const { name: userName } = useRecoilValue(userProfileState);

  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const challengeEndDate = '2023.03.26';

  return isFirstVisit ? (
    <form className="bg-white bg-opacity-30 w-full p-4 flex flex-col gap-6">
      {/* 파티 이름 */}
      <h1 className="text-center mb-0">#오운완</h1>
      {/* 파티 기본 설정 */}
      <div className="text-center">
        <p>파티에 입장하기 전에</p>
        <p>
          <span className="bg-[#FCFA7B] p-0.5">이름</span>과 <span className="bg-[#FCFA7B] p-0.5">목표</span>를 입력해주세요.
        </p>
        <p className="text-sm">🌻 입력하지 않으면 기본값으로 설정돼요. 🌻</p>
      </div>
      <div>
        <InputWithLabel labelText="파티에서 불릴 이름" input={<BasicTextInput placeholder={userName} type="text" />} className="mb-4" />
        <InputWithLabel
          labelText="개인 목표 설정"
          subLabelText={`파티 챌린지 기간은 ${challengeEndDate} 까지입니다.`}
          input={<BasicTextInput placeholder="파티 챌린지 목표" type="text" />}
        />
      </div>
      <BasicButton onClick={() => setIsFirstVisit(false)} className="m-auto">
        들어갈게요!
      </BasicButton>
    </form>
  ) : (
    <main className="w-full">
      <PartyCalendar />
      <Feed />
    </main>
  );
};

export default PartyRounge;
