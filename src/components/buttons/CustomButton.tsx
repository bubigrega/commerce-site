import { ButtonHTMLAttributes } from "react";
import "./custom-button.scss";

type FormButtonProps = {
  isGoogle?: boolean;
};

const FormButton = ({
  children,
  isGoogle,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & FormButtonProps) => {
  return (
    <button
      {...props}
      className={`${isGoogle && "google-button"} custom-button`}
    >
      {children}
    </button>
  );
};

export default FormButton;
