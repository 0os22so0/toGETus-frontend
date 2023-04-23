type PInputWithLabel = {
  labelText: string;
  input: JSX.Element;
  subLabelText?: string;
  required?: boolean;
  className?: string;
};

const InputWithLabel = (props: PInputWithLabel) => {
  const { labelText, input, subLabelText, required, className } = props;
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label className="mb-1.5">
        {labelText}
        {required && <span className="text-togetus-emoji text-sm"> *</span>}
      </label>
      {subLabelText && <span className="text-xs mb-1.5">{subLabelText}</span>}
      {input}
    </div>
  );
};

export default InputWithLabel;
