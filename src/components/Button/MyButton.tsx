import * as React from "react";
import { Platform, ButtonProps, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, View, Icon } from "native-base";
import { TextLight } from '@/components/Text';
import { light, primary } from '@/styles/color';
import { LinearGradient } from 'expo-linear-gradient';
import IconRightSvg from "@/assets/svg/IconRightSvg";




interface MyButtonProps {
  title: string;
  right?: boolean;
  colorGradient1?: string;
  colorGradient2?: string;
  bordered?: boolean;
  style?: any;
  onPress?: any;
  noShadow?: boolean
}

const MyButton = ({
  title,
  right,
  colorGradient1,
  colorGradient2,
  bordered,
  style,
  onPress,
  noShadow,
  ...props
}: MyButtonProps) => {
  return (
    <View style={noShadow ? {} : colorGradient1 == '#00D292' ? styles.shadowPrimary : styles.shadowOrange}>
      <TouchableOpacity activeOpacity={.7}>
        <Button rounded
          onPress={onPress}
          {...props}
          style={[
            styles.button,
            bordered && styles.borderedStyle,
            { ...style },
          ]}>
          {bordered ?
            <TextLight style={{ fontSize: 17, color: primary }}>{title}</TextLight> :
            <LinearGradient
              start={[0.15, 0.1]}
              style={[styles.linear, right && { justifyContent: 'space-evenly' }]}
              colors={
                Platform.OS == 'android' ?
                  [colorGradient2, colorGradient1] :
                  [colorGradient1, colorGradient2]
              }>
              <TextLight style={{ fontSize: 17, color: light, alignSelf: 'center' }}>{title}</TextLight>
              {right && (<View style={{}}><IconRightSvg /></View>)}
            </LinearGradient>
          }
        </Button>
      </TouchableOpacity>
    </View>
  );
};
export default MyButton;


const styles = StyleSheet.create({

  button: {
    backgroundColor: 'transparent',
    paddingBottom: 0,
    paddingTop: 0,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,

  },
  linear: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    // paddingTop: 2
  },
  borderedStyle: {
    borderWidth: 1,
    borderColor: primary,
    elevation: 0
  },
  shadowPrimary: {
    shadowColor: "#3AEF9B73",
    shadowOffset: { width: 0, height: 11 },
    shadowOpacity: 1,
    shadowRadius: 18,
    elevation: 2
  },
  shadowOrange: {
    shadowColor: "#E8565626",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 14,
    elevation: 2
  }
})
