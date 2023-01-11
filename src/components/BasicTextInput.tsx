import { clsx } from "clsx";

const BasicTextInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const { className, disabled } = props;
  return (
    <input
      className={clsx(
        "p-2 border rounded shadow",
        disabled && "cursor-not-allowed",
        className
      )}
      {...props}
    />
  );
};
export default BasicTextInput;
