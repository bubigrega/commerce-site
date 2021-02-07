import { ChangeEvent, useState } from "react";
import FormButton from "../buttons/CustomButton";
import { auth, createUserProfileDocument } from "../../firebase/config";
import FormInput from "../form-input/FormInput";
import "./SignUp";
import { useHistory } from "react-router-dom";

const initState = {
  confirmPassword: "",
  displayName: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const [state, setState] = useState(initState);
  const history = useHistory();

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { confirmPassword, displayName, email, password } = state;

    if (password !== confirmPassword) {
      alert("Password and Canfirm Password must match");
    }
    try {
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(response.user, {
        displayName,
      });

      setState(initState);
    } catch (err) {
      console.error(err);
    }
    history.push("/");
  };

  return (
    <div className="sign-up">
      <h1 className="title">I don't have a account</h1>
      <span className="subtitle">
        Sign up with email, username and password
      </span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          required
          onChange={(e) =>
            setState({ ...state, [e.target.name]: e.target.value })
          }
          value={state.displayName}
          label="Name"
        />
        <FormInput
          type="email"
          name="email"
          required
          onChange={(e) =>
            setState({ ...state, [e.target.name]: e.target.value })
          }
          value={state.email}
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          required
          onChange={(e) =>
            setState({ ...state, [e.target.name]: e.target.value })
          }
          value={state.password}
          label="Password"
        />
        <FormInput
          type="password"
          name="confirmPassword"
          required
          onChange={(e) =>
            setState({ ...state, [e.target.name]: e.target.value })
          }
          value={state.confirmPassword}
          label="Confirm Password"
        />
        <FormButton type="submit" onSubmit={() => console.log(state)}>
          Submit
        </FormButton>
      </form>
    </div>
  );
};
export default SignUp;
