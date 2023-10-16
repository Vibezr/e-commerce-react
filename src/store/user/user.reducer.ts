import { AnyAction } from "redux";
import { 
  signInFailed, 
  signOutFailed, 
  signUpFailed, 
  signOutSuccess, 
  signInSuccess  
} from "./user.action";
import { UserData } from "../../utils/firebase/firebase.util";


export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const USER_INITIAL_STATE: UserState =  {
  currentUser: null,
  isLoading: false,
  error: null,
};

// here we neep to manually-provide the state with initial state as it doesn't have access to the useReduce-Hook
export const userReducer = (state = USER_INITIAL_STATE, action: AnyAction) => {

  if(signInSuccess.match(action)){
    return { ...state, currentUser: action.payload };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  if(signInFailed.match(action) || signUpFailed.match(action) || signOutFailed.match(action)) {
    return { ...state, error: action.payload }
  }

  return state; 
  

  // switch (type) {
  //   // this action sets the user regarding the type of sign-in/up
  //   case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
  //     return { ...state, currentUser: payload }; // return the object but modify the currentUser
    
  //   case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
  //     return { ...state, currentUser: null };
    
  //   case USER_ACTION_TYPES.SIGN_OUT_FAILED:
  //   case USER_ACTION_TYPES.SIGN_IN_FAILED:
  //   case USER_ACTION_TYPES.SIGN_UP_FAILED:
  //     return { ...state, error: payload };
  //   default:
      
    // here we don't return an error, instead -> we return the (current state-object) as this means that the action is not for this particular reducer
    // the object is the same in memory, so it won't result reRendering
};