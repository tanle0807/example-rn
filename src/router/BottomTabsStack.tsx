import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { StyleSheet } from "react-native";
import { HomeStack, NotifyStack, HistoryStack, UserStack } from '@/router/Stack'
import { primary, colorTitle } from '@/styles/color';
import { HomeBottomSvg, NotifyBottomSvg, HistoryBottomSvg, UserBottomSvg } from "@/assets/svg";
import { TextLight } from "@/components/Text";
const BottomTabsStack = createBottomTabNavigator(
    {
        HomeStack,
        NotifyStack,
        HistoryStack,
        UserStack
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconName, iconType;
                switch (routeName) {
                    case "HomeStack":
                        // iconName = focused
                        //     ? IconHomeSelected
                        //     : IconHome
                        // iconName = "home";
                        // iconType = "Entypo";
                        iconName = <HomeBottomSvg active={focused} />
                        break;
                    case "NotifyStack":
                        // iconName = focused
                        //     ? IconNotificationSelected
                        //     : IconNotification
                        // iconName = "bell";
                        // iconType = "FontAwesome";
                        iconName = <NotifyBottomSvg active={focused} />
                        break;
                    case "HistoryStack":
                        // iconName = focused
                        // ? IconWalletSelected
                        // : IconWallet
                        // iconName = "bell";
                        // iconType = "FontAwesome";
                        iconName = <HistoryBottomSvg active={focused} />
                        break;
                    case "UserStack":
                        // iconName = focused
                        // ? IconMailSelected
                        // : IconMail
                        // iconName = "user-circle";
                        // iconType = "FontAwesome5";
                        iconName = <UserBottomSvg active={focused} />
                        break;
                    default:
                        break;
                }
                return (
                    // <Icon
                    //     name={iconName}
                    //     type={iconType}
                    //     style={{
                    //         fontSize: 22,
                    //         // color: focused ? '#ff0' : '#ccc',
                    //         marginTop: 12
                    //     }}
                    // />
                    iconName
                );
                // <Image source={iconName} style={styles.icon} />;
                // return routeName == "StaticsStack" ? (
                //   <Image source={iconName} style={styles.icon} />
                // ) :

            },
            tabBarLabel: ({ focused }: any) => {
                const { routeName } = navigation.state;
                let label;
                switch (routeName) {
                    case "HomeStack":
                        label = "Trang chủ";
                        break;

                    case "NotifyStack":
                        label = "Thông báo";
                        break;
                    case "HistoryStack":
                        label = "Lịch sử";
                        break;
                    case "UserStack":
                        label = "Cá nhân";
                        break;
                    default:
                        break;
                }
                return (
                    <TextLight style={[styles.textlabel, { color: focused ? primary : colorTitle }]} numberOfLines={1}>
                        {label}
                    </TextLight>
                );
            }
        }),
        tabBarOptions: {
            safeAreaInset: { bottom: "always", top: "never" },
            // showLabel: false,
            style: {
                height: 55,
                backgroundColor: '#fff',
                // borderTopWidth: 0,
                borderTopColor: "#0000000F",
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                shadowColor: "#0000000F",
                shadowOffset: { width: 0, height: -2 },
                shadowOpacity: 1,
                shadowRadius: 30,
                elevation: 8,
                position: 'absolute'
            },
        }
    }
);

export default BottomTabsStack;

const styles = StyleSheet.create({
    textlabel: {
        fontSize: 13,
        textAlign: "center",
        marginTop: 1
    },
    // icon: {
    //     // height: "23rem",
    //     width: 45,
    //     aspectRatio: 1 / 1,
    //     marginTop: "8rem"
    // }
});
