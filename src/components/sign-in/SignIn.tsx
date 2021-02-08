import { ChangeEvent, useState } from "react";
import FormButton from "../buttons/CustomButton";
import FormInput from "../form-input/FormInput";
import "./sign-in.scss";
import { auth, signInWithGoogle } from "../../firebase/config";
import { useHistory } from "react-router-dom";

interface formData {
  email: string;
  password: string;
}

const SignIn = () => {
  const [formData, setFormData] = useState<formData>({
    email: "",
    password: "",
  });
  const history = useHistory();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(formData.email, formData.password);
      setFormData({ email: "", password: "" });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="sign-in">
      <h1 className="title">I already have an account</h1>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleChange}
          type="email"
          required
          value={formData.email}
          name="email"
          label="Email"
        />
        <FormInput
          type="password"
          required
          value={formData.password}
          name="password"
          onChange={handleChange}
          label="Password"
        />
        <div className="buttons">
          <FormButton type="submit">Sign In</FormButton>
          <FormButton
            isGoogle
            onClick={async () => {
              const success = await signInWithGoogle();
              if (success.user) {
                history.push("/");
              }
            }}
          >
            Sign In With Google
          </FormButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
