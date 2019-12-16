import React, { Component } from "react";
import { Image, ScrollView, View, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";

// import { DrawerItems } from 'react-navigation-drawer';
import { AvatarImage, packageRuby, packageCenturyon } from "@/components/Constants/Image";
import { SFTextBold, SFTextSemiBold, SFTextMedium } from "@/components/Text";
import { placeholder, orange, disable, light } from "@/styles/color";
import { Navigation } from "@/utils/Navigation";
import * as LocalStorage from "@/utils/LocalStorage";
import { connect } from "react-redux";
import { Thumbnail } from "native-base";
import IconCoinSvg from "@/assets/svg/IconCoinSvg";
import UserIconSvg from "@/assets/svg/UserIconSvg";
import LockIconSvg from "@/assets/svg/LockIconSvg";
import LogoutIconSvg from "@/assets/svg/LogoutIconSvg";


interface CustomDrawerContentProps {
  userInfo?: any;
}
const CustomDrawerContent = ({ userInfo }: CustomDrawerContentProps) => (
  <ScrollView style={{ paddingTop: 50, backgroundColor: light }}>
    <View style={{ paddingLeft: 20 }}>
      <View style={{
        width: 66,
        height: 66,
        borderRadius: 33,
        backgroundColor: light,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#0000001F",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 1
      }}><Thumbnail source={AvatarImage} /></View>
      <SFTextBold style={styles.textUserName}>
        {userInfo.name}
      </SFTextBold>
    </View>
    <View style={styles.viewImage}>
      <ImageBackground style={styles.image}
        source={userInfo.badge == 'RUBY' ? packageRuby : packageCenturyon}>
        <View style={{ paddingLeft: 10 }}>
          <SFTextMedium style={styles.textBadge}>
            Thành viên {userInfo.badge == 'RUBY' ? 'Ruby' : 'Centuryon'}
          </SFTextMedium>
          <View style={styles.rowBalance}>
            <IconCoinSvg color={'#FFC66F'} />
            <SFTextBold style={styles.textBalance}>
              {userInfo.balance}
            </SFTextBold>
          </View>
        </View>
      </ImageBackground>
    </View>
    <View style={{ paddingLeft: 20, marginTop: 20 }}>
      <TouchableOpacity style={styles.touchRow}
        onPress={() => {
          Navigation.navigate("UserInfo");
        }}
      >
        <UserIconSvg />
        <SFTextSemiBold style={styles.text}>
          Thông tin tài khoản
        </SFTextSemiBold>
      </TouchableOpacity>

      <View style={styles.divider} />

      <TouchableOpacity style={styles.touchRow}
        onPress={() => {
          Navigation.navigate("OldPassword");
        }}
      >
        <LockIconSvg />
        <SFTextSemiBold style={styles.text}>
          Đổi mật khẩu
        </SFTextSemiBold>
      </TouchableOpacity>
      <View style={styles.divider} />

      <TouchableOpacity style={styles.touchRow}
        onPress={async () => {
          await LocalStorage.removeData("token");
          Navigation.navigate("WelcomeStack");
        }}
      >
        <LogoutIconSvg />
        <SFTextSemiBold style={[styles.text, { color: '#F95C5C' }]}>
          Đăng xuất
        </SFTextSemiBold>
      </TouchableOpacity>

      <View style={styles.divider} />
    </View>
  </ScrollView >
);

// export default CustomDrawerContent;


const mapState = state => ({
  userInfo: state.user.info
});

export default connect(mapState)(CustomDrawerContent);


const styles = StyleSheet.create({
  textUserName: {
    fontSize: 17,
    color: placeholder,
    marginVertical: 20
  },
  viewImage: {
    aspectRatio: 852 / 291,
    overflow: 'hidden',
    width: '95%',
    borderBottomRightRadius: 20,
    backgroundColor: '#ff0'
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    // paddingLeft: 10,
    backgroundColor: 'red',
    // marginLeft: 5
  },
  textBadge: {
    fontSize: 13,
    color: '#FFC66F'
  },
  rowBalance: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  textBalance: {
    fontSize: 21,
    color: light,
    marginLeft: 5
  },
  touchRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#E2E2E2",
    marginVertical: 20
  },
  text: {
    fontSize: 15,
    color: placeholder,
    marginLeft: 15
  }
})
