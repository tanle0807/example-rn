import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthStack from './AuthStack';
import BottomTabsStack from './BottomTabsStack';

const RootNavigator = createSwitchNavigator({
    AuthStack,
    BottomTabsStack
});

export default createAppContainer(RootNavigator);
