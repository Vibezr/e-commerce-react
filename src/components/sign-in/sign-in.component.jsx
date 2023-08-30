import { signInWithGooglePopUp, createUserDocumentFromAuth } from "../../firebase/firebase.util";
import SignUpForm from "../sign-up-form/sign-up-form.component";
import "./sign-in.styles.scss";

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm/>
    </div>
    
  )
}


export default SignIn;