import { createStackNavigator } from "react-navigation-stack";
import Home from '@/Screens/Home/Home';
import Search from '@/Screens/Search/Search';



const HomeNavigator = createStackNavigator(
    {
        Home,
        Search,
    },
    {
        defaultNavigationOptions: () => ({
            header: null,
            gesturesEnabled: false
        })
    }
);

export default HomeNavigator;

HomeNavigator.navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    const routes = state.routes[state.index];

    let tabBarVisible = false;
    if (routes.routeName == "Home") {
        tabBarVisible = true;
    }

    return {
        tabBarVisible
    };
};
