import { clsx } from 'clsx';

const BasicTextInput = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const { className } = props;
  return <textarea {...props} className={clsx('p-2 border rounded shadow', className)}></textarea>;
};
export default BasicTextInput;
