import React from "react";
import { Text } from "react-native";

export default props => (
  <Text {...props} style={[{ fontFamily: "text-bold", paddingTop: 5 }, props.style]}>
    {props.children}
  </Text>
);
