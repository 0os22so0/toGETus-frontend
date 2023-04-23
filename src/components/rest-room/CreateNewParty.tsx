import { useEffect, useState } from 'react';
import clsx from 'clsx';
import BasicTextInput from 'components/BasicTextInput';
import BasicTextArea from 'components/BasicTextArea';
import BasicButton from 'components/BasicButton';
import { useRecoilValue } from 'recoil';
import { userProfileState } from 'atoms/userProfile';

type TDDays = 10 | 100 | 'custom';
type TRule = 'PM' | 'OTHER';

const CreateNewParty = () => {
  const userProfile = useRecoilValue(userProfileState);

  const [dDays, setDDays] = useState<TDDays>(10);
  const [customDDay, setCustomDDay] = useState<number>(0);
  const [endDate, setEndDate] = useState<string>('');
  const [rule, setRule] = useState<TRule>('PM');
  const [customRule, setCustomRule] = useState<number>(0);

  // 예상 종료일 계산 로직
  useEffect(() => {
    const today = new Date();

    if (dDays === 'custom') {
      today.setDate(today.getDate() + customDDay);
    } else {
      today.setDate(today.getDate() + dDays);
    }

    setEndDate(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`);
  }, [dDays, customDDay]);

  return (
    <>
      {/* 유저 프로필 */}
      <div className="flex justify-center items-center gap-4 mb-10">
        <img src={userProfile.image} alt="user profile image" className="w-[6rem] h-[6rem] rounded-full" />
        <div className="text-lg">
          <p>
            <span className="text-xl">{userProfile.name}</span>님,
          </p>
          <p>새 일을 벌여봅시다!</p>
        </div>
      </div>
      {/* 파티 폼 */}
      <form className="w-full flex flex-col justify-between items-center gap-5">
        {/* 파티 이름 */}
        <InputWithLabel labelText="파티 이름" input={<BasicTextInput placeholder="toGETus" type="text" />} required={true} />
        {/* 파티 챌린지 기간 */}
        <InputWithLabel
          labelText="파티 챌린지 기간"
          input={
            <>
              <div className="w-full">
                <label
                  className={clsx(
                    'inline-block w-1/3 h-[40px] rounded-l-full text-center p-2 border border-r-0 border-[#D9D9D9]',
                    dDays === 10 ? 'bg-black text-white' : 'bg-white text-black',
                    dDays === 'custom' && 'rounded-br-none'
                  )}
                >
                  <input type="radio" name="d-day" value={10} onChange={() => setDDays(10)} defaultChecked className="hidden" /> 10일
                </label>
                <label
                  className={clsx(
                    'inline-block w-1/3 h-[40px] text-center p-2 border border-r-0',
                    dDays === 100 ? 'bg-black text-white' : 'bg-white text-black'
                  )}
                >
                  <input type="radio" name="d-day" value={100} onChange={() => setDDays(100)} className="hidden" /> 100일
                </label>
                <label
                  className={clsx(
                    'inline-block w-1/3 h-[40px] rounded-r-full text-center p-2 border',
                    dDays === 'custom' ? 'bg-black text-white rounded-bl-none' : 'bg-white text-black'
                  )}
                >
                  <input type="radio" name="d-day" value={'custom'} onChange={() => setDDays('custom')} className="hidden" /> 직접 입력
                </label>
                {dDays === 'custom' && (
                  <BasicTextInput
                    type="number"
                    className="w-full mt-2"
                    defaultValue={0}
                    onChange={(e) => setCustomDDay(Number(e.target.value))}
                  />
                )}
              </div>
              <span className="mt-1 text-sm">예상 종료일: {endDate}</span>
            </>
          }
          required={true}
        />
        {/* 파티 챌린지 목표 */}
        <InputWithLabel
          labelText="파티 챌린지 목표"
          input={
            <>
              <BasicTextInput placeholder="파티 챌린지 목표" />
              <BasicTextArea placeholder="필요 시 설명을 적어주세요." />
            </>
          }
          required={true}
        />
        {/* 파티 인증 룰 */}
        <InputWithLabel
          labelText="인증 룰"
          input={
            <div className="w-full">
              <label
                className={clsx(
                  'inline-block w-1/3 h-[40px] rounded-l-full text-center p-2 border border-r-0 border-[#D9D9D9]',
                  rule === 'PM' ? 'bg-black text-white' : 'bg-white text-black'
                )}
              >
                <input type="radio" name="auth-way" value="PM" onChange={() => setRule('PM')} defaultChecked className="hidden" /> 파티장만
              </label>
              <label
                className={clsx(
                  'inline-block w-1/3 h-[40px] rounded-r-full text-center p-2 border',
                  rule === 'OTHER' ? 'bg-black text-white' : 'bg-white text-black'
                )}
              >
                <input type="radio" name="auth-way" value="OTHER" onChange={() => setRule('OTHER')} className="hidden" /> 구성원 비율
              </label>{' '}
              {rule === 'OTHER' && (
                <BasicTextInput
                  type="number"
                  className="w-full rounded-t-0"
                  defaultValue={0}
                  onChange={(e) => setCustomRule(Number(e.target.value))}
                />
              )}
            </div>
          }
          required={true}
        />
        {/* 파티 입장 퀴즈 */}
        <InputWithLabel
          labelText="파티 입장 퀴즈"
          input={
            <>
              <BasicTextInput placeholder="질문을 입력해주세요." />
              <BasicTextInput placeholder="답변을 입력해주세요." />
            </>
          }
        />
        <BasicButton className="bg-black text-white" onClick={() => console.log('create party')}>
          한 판 벌여보세
        </BasicButton>
      </form>
    </>
  );
};

type PInputWithLabel = {
  labelText: string;
  input: JSX.Element;
  required?: boolean;
  className?: string;
};

const InputWithLabel = (props: PInputWithLabel) => {
  const { labelText, input, required, className } = props;
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label className="mb-1.5">
        {labelText}
        {required && <span className="text-togetus-emoji text-sm"> *</span>}
      </label>
      {input}
    </div>
  );
};

export default CreateNewParty;
