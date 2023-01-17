import BasicTextInput from 'components/BasicTextInput';
import { useState } from 'react';
import { BsArrowDownCircle } from 'react-icons/bs';

/**
 * 회원가입 페이지(/sign-up)
 * @returns
 */
const SignUp = () => {
  const [step, setStep] = useState<1 | 2>(1);
  return (
    <main className="flex flex-col justify-between items-center pt-[10vh]">
      {/* Title */}
      <h1>
        <span className="text-togetus-emoji">거기 너 내 동료가 돼라</span>
      </h1>
      {step === 1 ? (
        <>
          <form className="m-0 flex flex-col w-[100%] gap-4 py-[10vh]">
            <InputWithLabel labelText="• common하게 사용할 이름" input={<BasicTextInput placeholder="햄스탁스 서" type="name" />} />
            <InputWithLabel labelText="• 이메일 ID" input={<BasicTextInput placeholder="이메일 ID" type="email" />} />
            <InputWithLabel labelText="• 비밀번호" input={<BasicTextInput placeholder="비밀번호" type="password" />} />
            <InputWithLabel labelText="• 비밀번호 확인" input={<BasicTextInput placeholder="비밀번호" type="password" />} />
          </form>
          <BsArrowDownCircle size={32} className="text-stone-400" />
        </>
      ) : (
        <></>
      )}
      {/* Sign up Form */}
    </main>
  );
};

type PInputWithLabel = {
  labelText: string;
  input: JSX.Element;
};
const InputWithLabel = (props: PInputWithLabel) => {
  const { labelText, input } = props;
  return (
    <div className="flex flex-col">
      <label>{labelText}</label>
      {input}
    </div>
  );
};

export default SignUp;
