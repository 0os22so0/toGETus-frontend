import { clsx } from "clsx";

const BasicTextInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const { className, disabled } = props;
  return (
    <input
      className={clsx("p-1.5", disabled && "cursor-not-allowed", className)}
      {...props}
    />
  );
};
export default BasicTextInput;
