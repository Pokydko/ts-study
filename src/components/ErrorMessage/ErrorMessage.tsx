import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ children }: { children: React.ReactElement }) => {
  return <div className={css.message}>{children}</div>;
};
export default ErrorMessage;
