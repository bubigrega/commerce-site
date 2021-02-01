import { InputHTMLAttributes } from "react";
import "./form-input.scss";

interface FormProps extends InputHTMLAttributes<any> {
  label?: string;
}

const FormInput = ({ onChange, label, ...props }: FormProps) => {
  return (
    <div className="form-input">
      <input onChange={onChange} {...props} className="input" />
      {label && (
        <label
          htmlFor={label}
          className={`${props.value?.toString().length ? "shrink" : ""} label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
export default FormInput;
