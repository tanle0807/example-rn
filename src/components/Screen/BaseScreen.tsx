import React from "react";
import { connect } from "react-redux";

import {
  View,
  StyleProp,
  ViewStyle,
  Text,
  ActivityIndicator,
  ScrollView,
  StatusBar
} from "react-native";
import { Container, Content } from "native-base";
interface IAppProps {
  children: any;
  style?: StyleProp<ViewStyle>;
  header?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  loading?: boolean;
  scrollEnabled?: boolean;
}

const Screen = ({
  style,
  header,
  containerStyle,
  children,
  loading,
  scrollEnabled = true
}: IAppProps) => (
    <Container style={[{ flex: 1, backgroundColor: 'transparent' }, style]}>
      {/*<StatusBar barStyle="dark-content" />*/}

      {header}
      <ScrollView
        contentContainerStyle={[containerStyle]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={scrollEnabled}
        bounces={false}
        keyboardShouldPersistTaps='handled'
      >
        {children}
      </ScrollView>

      {
        loading && (
          <View
            style={{
              zIndex: 99,
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.2)"
            }}
          >
            <View
              style={[
                {
                  borderRadius: 20,
                  padding: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0,0,0,0.7)"
                }
              ]}
            >
              <ActivityIndicator size="large" color={"#fff"} />
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 15,
                  color: "white"
                }}
              >
                {" "}
                Loading...{" "}
              </Text>
            </View>
          </View>
        )
      }
    </Container >
  );

const mapStateToProps = state => ({
  ...state.screen
});

export default connect(mapStateToProps)(React.memo(Screen));
