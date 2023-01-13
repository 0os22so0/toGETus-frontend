import clsx from "clsx";

const BasicButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { className, disabled, children } = props;
  return (
    <button
      {...props}
      className={clsx(
        "px-4 py-2 border rounded shadow bg-[#fffffc]",
        disabled && "cursor-not-allowed",
        className
      )}
      type="button"
    >
      {children}
    </button>
  );
};

export default BasicButton;
