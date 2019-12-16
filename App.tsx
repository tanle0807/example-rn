// IMPORT LIBRARY
import React from "react";
import { View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import EStyleSheet from "react-native-extended-stylesheet";
import * as Font from "expo-font";
import * as Permissions from "expo-permissions";
import { AppLoading, Notifications } from "expo";
import { AppearanceProvider } from "react-native-appearance";

// IMPORT CUSTOM
import store from "./src/store";
import AppNavigator from "./src/router";
import { Navigation } from "@/utils/Navigation";
import { SCREEN_WIDTH } from "@/styles/dimensions";
import * as LocalStorage from "@/utils/LocalStorage";

EStyleSheet.build({ $rem: SCREEN_WIDTH / 414 });

interface IAppState {
  appIsReady: boolean;
}

interface IAppProps { }

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      appIsReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "text-bold": require("@/assets/fonts/VL-SOFIAPROSOFT-BOLD.ttf"),
      "text-light": require("@/assets/fonts/VL-SOFIAPROSOFT-LIGHT.ttf")
    });
    this.setState({ appIsReady: true });
  }

  getPermissionAsync = async () => {
  };

  handleNotification = notification => {
    console.log("notification", notification);
  };

  async registerForPushNotificationsAsync() {
  }

  render() {
    return (
      <View>
      </View>
    );
  }
}
