import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGooglePopUp, createUserDocumentFromAuth } from "../../firebase/firebase.util";
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
    </div>
  )
}




// class SignIn extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             email: "",
//             password: "" 
//          }

//     }

//     handleSubmit = event => {
//         event.preventDefault()
//         this.setState({ email: "", password: "" })
//     }

//     handleChange = event => {
//         const { value, name } = event.target

//         this.setState({ [name]: value })
//     }

//     render() {
//         return (
//           <div className="sign-in">
//             <h2>I already have an acount</h2>
//             <span>Sign in with your email and password</span>

//             <form onSubmit={this.handleSubmit}>
//               <FormInput
//                 name="email"
//                 type="email"
//                 handleChangeChange={this.handleChange}
//                 value={this.state.email}
//                 label="email"
//                 required
//               />

//               <FormInput
//                 name="password"
//                 type="password"
//                 value={this.state.email}
//                 label="password"
//                 required
//                 handleChange={this.handleChange}
//               />
//               <div className="buttons">
//                 <CustomButton type="submit">Sign in</CustomButton>
//                 <CustomButton onClick={signInWithGooglePopUp} isGoogleSignIn >
//                     Sign in with Google
//                 </CustomButton>
//               </div>
//             </form>
//           </div>
//         );
//     }
// }


export default SignIn;