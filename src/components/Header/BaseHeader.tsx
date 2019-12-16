import React from "react";
import { Header, Left, Body, Right, Button } from "native-base";
import { View, TouchableOpacity, Platform } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { colorTitle, danger } from '@/styles/color';
import { IconBackSvg } from "@/assets/svg";
import { LinearGradient } from 'expo-linear-gradient';
import { TextBold, TextLight } from "../Text";
import { SCREEN_WIDTH } from '@/styles/dimensions';
import { isIphoneX } from "react-native-iphone-x-helper";

interface IAppProps {
  onPressBack?: any;
  hideBackButton?: boolean;
  right?: any;
  titleLight?: string;
  titleBold?: string;
  renderRight?: React.ReactNode;
  lightHeader?: boolean;
  radiusLeft?: boolean;
  radiusRight?: boolean;
  search?: boolean;
  textSearch?: string;
  onPressSearch?: any;
  onLayout?:any;
}


class BaseHeader extends React.PureComponent<IAppProps, {}> {


  renderLightHeader = () => {
    return (
      <Header iosBarStyle={"dark-content"}
        androidStatusBarColor="#fff"
        onLayout={this.props.onLayout}
        style={[
          styles.headerLight,
          this.props.radiusLeft && styles.borderRadiusLeft,
          this.props.radiusRight && styles.borderRadiusRight,
          this.props.search && {
            height: isIphoneX() ? 100 : Platform.OS == 'android' ? 66 : 74,
            maxHeight: isIphoneX() ? 100 : Platform.OS == 'android' ? 66 : 74,
            paddingRight: 5
          }
        ]}>
        <Left style={{ flex: 0 }}>
          {this.props.hideBackButton !== true && (
            <TouchableOpacity onPress={this.props.onPressBack}
              style={this.props.search && {
                marginBottom: isIphoneX() ? 10 : 0
              }}>
              <IconBackSvg size={18} />
            </TouchableOpacity>
          )}
        </Left>
        {this.props.search ?
          (
            <Button onPress={this.props.onPressSearch}
              rounded
              style={{
                width: '90%',
                marginLeft: 10,
                marginBottom: 10,
                marginTop: isIphoneX() ? 0 : 10,
                backgroundColor: '#EEF4F3',
                elevation: 0,
              }}>
              <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
                <TextBold style={{ fontSize: 17, color: colorTitle }}>{this.props.textSearch}</TextBold>
                <TextLight style={{ fontSize: 15, color: danger }}>Thay đổi</TextLight>
              </View>
            </Button>
          ) : (
            <Body style={styles.body}>
              {this.props.titleLight && (
                <TextLight style={styles.title}>{this.props.titleLight}</TextLight>
              )}
              {this.props.titleBold && (
                <TextBold style={styles.title}>{this.props.titleBold}</TextBold>
              )}
            </Body>
          )}
        <Right style={{ flex: 0 }}>
          {this.props.renderRight}
        </Right>
      </Header>
    )
  }

  renderPrimaryHeader = () => {
    return (
      <LinearGradient
        start={[0.2, 0.1]}
        style={{ width: '100%' }}
        colors={
          Platform.OS == 'android' ?
            ['#04C1A3', '#00D292'] :
            ['#00D292', '#04C1A3']
        }>
        <Header iosBarStyle={"light-content"}
          androidStatusBarColor="#04C1A3"
          style={styles.headerPrimary}>
          <Left style={{ flex: 0 }}>
            {this.props.hideBackButton !== true && (
              <TouchableOpacity onPress={this.props.onPressBack} style={{

              }}>
                <IconBackSvg size={18} color='rgba(255,255,255,0.68)' />
              </TouchableOpacity>
            )}
          </Left>
          <Body style={styles.body}>
            <TextBold style={{ textAlign: "center", fontSize: 19, color: "#fff" }}>
              {this.props.titleBold}
            </TextBold>
          </Body>
          <Right style={{ flex: 0 }}>

            {this.props.renderRight}
          </Right>
        </Header>
      </LinearGradient>
    )
  }

  render() {
    return (
      <View>
        {this.props.lightHeader ?
          this.renderLightHeader() :
          this.renderPrimaryHeader()
        }
      </View>
    );
  }
}

export default BaseHeader;

const styles = EStyleSheet.create({
  headerPrimary: {
    borderBottomWidth: 0,
    elevation: 0,
    // paddingTop: 0,
    backgroundColor: 'transparent',
    paddingLeft: 15,
    paddingRight: 20
  },
  headerLight: {
    borderBottomWidth: 0,
    backgroundColor: '#fff',
    shadowColor: "#ACACAC30",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 12,
    paddingLeft: 15,
    paddingRight: 20,
    // marginBottom: 5
  },
  borderRadiusLeft: {
    borderBottomLeftRadius: 35
  },
  borderRadiusRight: {
    borderBottomRightRadius: 35
  },
  title: {
    textAlign: "center",
    fontSize: 19,
    color: colorTitle
  },
  body: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
