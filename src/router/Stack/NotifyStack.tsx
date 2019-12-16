import { createStackNavigator } from "react-navigation-stack";
import Notify from '@/Screens/Notify/Notify'



const NotifyNavigator = createStackNavigator(
    {
        Notify
    },
    {
        defaultNavigationOptions: () => ({
            header: null,
            gesturesEnabled: false
        })
    }
);

export default NotifyNavigator;

NotifyNavigator.navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    const routes = state.routes[state.index];

    let tabBarVisible = false;
    if (routes.routeName == "Notify") {
        tabBarVisible = true;
    }

    return {
        tabBarVisible
    };
};
