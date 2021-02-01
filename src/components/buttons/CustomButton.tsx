import { ButtonHTMLAttributes } from "react";
import "./custom-button.scss";

const FormButton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className="custom-button">
      {children}
    </button>
  );
};

export default FormButton;
