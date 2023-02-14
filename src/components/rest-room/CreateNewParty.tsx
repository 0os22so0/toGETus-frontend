import BasicTextInput from 'components/BasicTextInput';

const CreateNewParty = () => {
  return (
    <form className="w-full flex flex-col justify-between items-center">
      <InputWithLabel labelText="• 파티 이름" input={<BasicTextInput placeholder="toGETus" type="text" />} required={true} />

      {/* 
      1. 파티 이름
      2. 파티 챌린지 기간
      3. 인증 룰
      */}
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
