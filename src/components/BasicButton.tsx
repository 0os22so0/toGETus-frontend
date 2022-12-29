const BasicButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { children } = props;
  return <button {...props}>{children}</button>;
};

export default BasicButton;
