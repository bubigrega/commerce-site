import { ChangeEvent, useState } from "react";
import FormButton from "../buttons/CustomButton";
import FormInput from "../form-input/FormInput";
import "./sign-in.scss";

interface formData {
  email: string;
  password: string;
}

const SignIn = () => {
  const [formData, setFormData] = useState<formData>({
    email: "",
    password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((state) => ({ ...state, [name]: value }));
  };
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ email: "", password: "" });
  };

  return (
    <form className="sign-in" onSubmit={handleSubmit}>
      <h1 className="title">I already have an account</h1>
      <span>Sign in with your email and password</span>
      <FormInput
        onChange={handleChange}
        type="email"
        required
        value={formData.email}
        // placeholder="Email"
        name="email"
        label="Email"
      />
      <FormInput
        type="password"
        required
        value={formData.password}
        // placeholder="Password"
        name="password"
        onChange={handleChange}
        label="Password"
      />
      <FormButton type="submit">Sign In</FormButton>
    </form>
  );
};

export default SignIn;
