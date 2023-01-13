import { clsx } from 'clsx';

const BasicTextInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const { className, disabled } = props;
  return <input {...props} className={clsx('p-2 border rounded shadow', disabled && 'cursor-not-allowed', className)} />;
};
export default BasicTextInput;
