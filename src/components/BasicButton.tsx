import clsx from "clsx";

const BasicButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { className, disabled, children } = props;
  return (
    <button
      className={clsx(
        "px-4 py-2 border rounded shadow bg-[#fffffc]",
        disabled && "cursor-not-allowed",
        className
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

export default BasicButton;
