import React from "react";
import { Text } from "react-native";

export default props => (
  <Text {...props} style={[{ fontFamily: "text-light", paddingTop: 2 }, props.style]}>
    {props.children}
  </Text>
);
