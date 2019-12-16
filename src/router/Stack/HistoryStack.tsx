import { createStackNavigator } from "react-navigation-stack";
import History from '@/Screens/History/History'



const HistoryNavigator = createStackNavigator(
    {
        History
    },
    {
        defaultNavigationOptions: () => ({
            header: null,
            gesturesEnabled: false
        })
    }
);

export default HistoryNavigator;

HistoryNavigator.navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    const routes = state.routes[state.index];

    let tabBarVisible = false;
    if (routes.routeName == "History") {
        tabBarVisible = true;
    }

    return {
        tabBarVisible
    };
};
