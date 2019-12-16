import { createStackNavigator } from "react-navigation-stack";
import {
  Auth,
  Wellcome,
  SignIn,
  SignUp,
  SignUpDone,
  ForgotPass
} from "@/Screens/Auth/index";
const AuthStack = createStackNavigator(
  {
    Auth,
    Wellcome,
    SignIn,
    SignUp,
    SignUpDone,
    ForgotPass
  },
  {
    defaultNavigationOptions: () => ({
      header: null,
      gesturesEnabled: false
    })
  }
);

export default AuthStack;
