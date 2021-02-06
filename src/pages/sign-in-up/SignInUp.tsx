import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";
import "./sign-in-up.scss";

const SignInUp = () => {
  return (
    <div className="sign-in-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInUp;
