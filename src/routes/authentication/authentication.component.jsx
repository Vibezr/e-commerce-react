import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInpForm from "../../components/sign-in-form/sign-in-form.component";
import {AuthenticationContainer} from "./authentication.styles";

const Authentication = () => {
    return (
        <AuthenticationContainer>
            <SignInpForm/>
            <SignUpForm/>
        </AuthenticationContainer>
    )
}


export default Authentication;