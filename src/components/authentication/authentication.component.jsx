import { signInWithGooglePopUp, createUserDocumentFromAuth } from "../../firebase/firebase.util";
import SignUpForm from "../sign-up-form/sign-up-form.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopUp();
    // eslint-disable-next-line no-unused-vars
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h2>Sign In Page</h2>
      <span>Sign in with your email and password</span>
      <form>
        <label>Display Name</label>
        <FormInput
          label="Display Name"
          type="text"
          required 
          name="displayName"
        />
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      </form>
      
      <SignUpForm/>
    </div>
    
  )
}


export default SignIn;