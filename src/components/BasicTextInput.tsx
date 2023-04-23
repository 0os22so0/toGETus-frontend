import { clsx } from 'clsx';

const BasicTextInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const { className, disabled } = props;
  return <input {...props} className={clsx('px-4 py-2 rounded', disabled && 'cursor-not-allowed', className)} />;
};
export default BasicTextInput;
