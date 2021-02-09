import { ButtonHTMLAttributes } from "react";
import "./custom-button.scss";

type FormButtonProps = {
  isGoogle?: boolean;
  inverted?: boolean;
};

const FormButton = ({
  children,
  isGoogle,
  inverted,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & FormButtonProps) => {
  return (
    <button
      {...props}
      className={`${isGoogle && "google-button"} ${
        inverted && "inverted"
      } custom-button`}
    >
      {children}
    </button>
  );
};

export default FormButton;
