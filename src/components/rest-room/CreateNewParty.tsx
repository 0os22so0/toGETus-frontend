import { useEffect, useState } from 'react';
import clsx from 'clsx';
import BasicTextInput from 'components/BasicTextInput';

type TDDays = 10 | 100 | 'custom';
type TRule = 'PM' | 'OTHER';

const CreateNewParty = () => {
  const [dDays, setDDays] = useState<TDDays>(10);
  const [customDDay, setCustomDDay] = useState<number>(0);
  const [endDate, setEndDate] = useState<string>('');
  const [rule, setRule] = useState<TRule>('PM');

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
    <form className="w-full flex flex-col justify-between items-center">
      <InputWithLabel labelText="파티 이름" input={<BasicTextInput placeholder="toGETus" type="text" />} required={true} className="mb-6" />
      <InputWithLabel
        labelText="파티 챌린지 기간"
        input={
          <>
            <div className="w-full">
              <label
                className={clsx(
                  'inline-block w-1/3 h-[40px] rounded-l text-black text-center p-2 border border-r-0 border-[#D9D9D9]',
                  dDays === 10 && 'bg-togetus-emoji text-white',
                  dDays === 'custom' && 'rounded-br-none'
                )}
              >
                <input type="radio" name="d-day" value={10} onChange={() => setDDays(10)} defaultChecked className="hidden" /> 10일
              </label>
              <label
                className={clsx(
                  'inline-block w-1/3 h-[40px] text-black text-center p-2 border border-r-0',
                  dDays === 100 && 'bg-togetus-emoji text-white'
                )}
              >
                <input type="radio" name="d-day" value={100} onChange={() => setDDays(100)} className="hidden" /> 100일
              </label>
              <label
                className={clsx(
                  'inline-block w-1/3 h-[40px] rounded-r text-black text-center p-2 border',
                  dDays === 'custom' && 'bg-togetus-emoji text-white rounded-bl-none'
                )}
              >
                <input type="radio" name="d-day" value={'custom'} onChange={() => setDDays('custom')} className="hidden" /> 직접 입력
              </label>
              {dDays === 'custom' && (
                <BasicTextInput
                  type="number"
                  className="w-full rounded-t-0"
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
      {/* <InputWithLabel
        labelText="인증 룰"
        input={
          <div>
            <label>
              <input type="radio" name="auth-way" value="PM" onChange={() => setRule('PM')} defaultChecked /> 파티장만
            </label>
            <label>
              <input type="radio" name="auth-way" value="OTHER" onChange={() => setRule('OTHER')} /> 구성원
            </label>
            {rule === 'OTHER' && <BasicTextInput type="number" />}
          </div>
        }
        required={true}
      /> */}
      {/* 파티 인증 퀴즈 */}
    </form>
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
      <label className="mb-3">
        {labelText}
        {required && <span className="text-togetus-emoji text-sm"> *</span>}
      </label>
      {input}
    </div>
  );
};

export default CreateNewParty;
