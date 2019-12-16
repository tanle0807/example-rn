import { createStackNavigator } from "react-navigation-stack";
import User from '@/Screens/User/User';
import { ChangePass, ChangePassDone } from '@/Screens/ChangePass';
import RoomFavorite from '@/Screens/RoomFavorite/RoomFavorite';
import Security from '@/Screens/Security/Security';
import VoucherPromotion from '@/Screens/VoucherPromotion/VoucherPromotion';



const UserNavigator = createStackNavigator(
    {
        User,
        ChangePass,
        ChangePassDone,
        RoomFavorite,
        Security,
        VoucherPromotion
    },
    {
        defaultNavigationOptions: () => ({
            header: null,
            gesturesEnabled: false
        })
    }
);

export default UserNavigator;

UserNavigator.navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    const routes = state.routes[state.index];

    let tabBarVisible = false;
    if (routes.routeName == "User") {
        tabBarVisible = true;
    }

    return {
        tabBarVisible
    };
};
