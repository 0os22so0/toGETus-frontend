import { clsx } from 'clsx';
import { Field } from 'formik';

const BasicTextInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const { className, disabled } = props;
  return <Field {...props} className={clsx('p-2 border rounded shadow', disabled && 'cursor-not-allowed', className)} />;
};
export default BasicTextInput;
