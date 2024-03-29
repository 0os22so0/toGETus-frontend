import clsx from 'clsx';
import BasicButton from 'components/BasicButton';
import BasicTextInput from 'components/BasicTextInput';
import { useState } from 'react';
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs';
import JoinTitle from 'images/join.png';
import InputWithLabel from 'components/InputWithLabel';

/**
 * 회원가입 페이지(/sign-up)
 * @returns
 */
const SignUp = () => {
  const [step, setStep] = useState<1 | 2>(1);
  return (
    <main className="flex flex-col justify-between items-center pt-[10vh]">
      {/* Title */}
      <img src={JoinTitle} alt={'거기 너 내 동료가 돼라'} />

      {/* <div className="h-8 w-8 bg-blue-600 transition-opacity ease-in duration-700 opacity-100 hover:opacity-0">test</div> */}
      {/* STEP 1 */}
      <div className={clsx('w-full', step !== 1 && 'hidden ease-in transition-')}>
        <form className="m-0 flex flex-col w-full gap-4 py-[10vh]">
          <InputWithLabel labelText="ID" input={<BasicTextInput placeholder="이메일 ID" type="email" />} required={true} />
          <InputWithLabel labelText="이름" input={<BasicTextInput placeholder="카트리나 드 패리스 영애" type="name" />} required={true} />
          <InputWithLabel labelText="비밀번호" input={<BasicTextInput placeholder="쉿- 비밀이양" type="new-password" />} required={true} />
          <InputWithLabel labelText="비밀번호 확인" input={<BasicTextInput placeholder="비밀번호" type="new-password" />} required={true} />
        </form>
        <div className="flex justify-center">
          <BsArrowDownCircle size={32} className="text-stone-400 cursor-pointer animate-bounce" onClick={() => setStep(2)} />
        </div>
      </div>
      {/* STEP 2 */}
      <div className={clsx('m-0 flex flex-col w-full gap-4 py-[10vh]', step !== 2 && 'hidden')}>
        <div className="flex justify-center">
          <BsArrowUpCircle size={32} className="text-stone-400 cursor-pointer" onClick={() => setStep(1)} />
        </div>
        <p>안녕!! {`>ㅡ<`} 🎵</p>
        <p>투게더스-✌️에 오신 것을 환영합니다.</p>
        <p>투게더스는 지인들과 모여 각자 설정한 챌린지를 수행하는 서비스입니다.</p>
        <p>정해둔 기간동안 사진과 짧은 글을 통해 인증하고, 챌린지를 성공해봅시다!</p>
        <p>파티 설정에 따라, 파티원들의 인정을 받아야 인증에 성공할 수 있답니다.</p>
        <p>따란-✨ 귀여운 뱃지를 모아 친구에게 자랑해봐요!</p>
        <p>이룰 수 있는 목표부터 차근차근, 이번엔 맘 잡고 으쌰으쌰 해내보자구요!!!</p>
        <div className="w-full text-center">
          <BasicButton className="bg-togetus-emoji">진짜 가입!!</BasicButton>
        </div>
      </div>

      {/* Sign up Form */}
    </main>
  );
};

// type PInputWithLabel = {
//   labelText: string;
//   input: JSX.Element;
//   required?: boolean;
// };
// const InputWithLabel = (props: PInputWithLabel) => {
//   const { labelText, input, required } = props;
//   return (
//     <div className="flex flex-col">
//       <label>
//         {labelText}
//         {required && <span className="text-red-600 text-sm"> *</span>}
//       </label>
//       {input}
//     </div>
//   );
// };

export default SignUp;
