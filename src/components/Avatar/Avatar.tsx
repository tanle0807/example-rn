import React, { Component } from "react";
import { View, Image } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import appStyle from "@/styles/appStyle";
import TextBold from "@/components/Text/TextBold";
import TextLight from "@/components/Text/SFTextRegular";
import { color } from "@/styles/Variable";
import { Button } from "native-base";

export default function Avatar() {
  return (
    <View style={styles.avatarView}>
      <View style={styles.avatarImage}>
        <Image
          source={require("@/assets/images/icAccountSelected.png")}
          style={appStyle.image}
          resizeMode={"cover"}
        />
      </View>
      <TextBold style={{ fontSize: 16 }}>Sophia</TextBold>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
      >
        <Image
          style={{ width: 14, height: 14 }}
          source={require("@/assets/images/icWallet.png")}
        />
        <TextBold style={{ color: color.primary, marginLeft: 10 }}>
          1,420 point
        </TextBold>
      </View>
      <TextLight>Cap nhat ngay 29/1/2019</TextLight>
      <Button
        style={[
          appStyle.button,
          { paddingHorizontal: 10, height: 40, marginTop: 5 }
        ]}
        iconLeft
      >
        <TextBold style={{ color: "white" }}>NẠP POINT</TextBold>
      </Button>
      <View style={styles.cameraImage}>
        {/* <Image
          source={require("@/assets/images/icChangeAvatar.png")}
          style={appStyle.image}
          resizeMode={"cover"}
        /> */}
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  avatarView: {
    alignItems: "center",
    marginTop: "19rem"
  },
  avatarImage: {
    height: "106rem",
    aspectRatio: 1 / 1,
    borderWidth: "1rem",
    borderColor: "#5D646F",
    borderRadius: "53rem",
    overflow: "hidden",
    padding: "12.5rem"
  }
});
