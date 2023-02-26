import BasicTextInput from 'components/BasicTextInput';
import { useEffect, useState } from 'react';

type TRule = 'PM' | 'OTHER';

const CreateNewParty = () => {
  const [dDays, setDDays] = useState<number>(10);
  const [rule, setRule] = useState<TRule>('PM');

  useEffect(() => {
    console.log({ rule: rule, dDays: dDays });
  }, [rule, dDays]);

  return (
    <form className="w-full flex flex-col justify-between items-center">
      <InputWithLabel labelText="• 파티 이름" input={<BasicTextInput placeholder="toGETus" type="text" />} required={true} />
      <InputWithLabel
        labelText="• 챌린지 기간"
        input={
          <div>
            <label>
              <input type="radio" name="d-day" value={10} onChange={() => setDDays(10)} defaultChecked /> 10일
            </label>
            <label>
              <input type="radio" name="d-day" value={100} onChange={() => setDDays(100)} /> 100일
            </label>
            <label>
              <input type="radio" name="d-day" value={0} onChange={() => setDDays(0)} /> 직접 입력
            </label>
            {dDays === 0 && <BasicTextInput type="number" />}
          </div>
        }
        required={true}
      />
      <InputWithLabel
        labelText="• 인증 룰"
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
      />
    </form>
  );
};

type PInputWithLabel = {
  labelText: string;
  input: JSX.Element;
  required?: boolean;
};

const InputWithLabel = (props: PInputWithLabel) => {
  const { labelText, input, required } = props;
  return (
    <div className="flex flex-col">
      <label>
        {labelText}
        {required && <span className="text-red-600 text-sm"> *</span>}
      </label>
      {input}
    </div>
  );
};

export default CreateNewParty;
