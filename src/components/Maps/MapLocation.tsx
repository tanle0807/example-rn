import React from "react";
import { connect } from "react-redux";
import { Container, Content } from "native-base";
import {
  View,
  StyleProp,
  ViewStyle,
  Image,
  TouchableOpacity
} from "react-native";
import appStyle from "@/styles/appStyle";
import EStyleSheet from "react-native-extended-stylesheet";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import MapView, {
  Marker,
  LatLng,
  Region,
  PROVIDER_GOOGLE,
  MapViewProps,
  Polyline as PL
} from "react-native-maps";
import { SCREEN_WIDTH } from "@/styles/dimensions";

interface IAppProps extends MapViewProps {
  children?: any;
  style?: StyleProp<ViewStyle>;
  startLocation?: Region;
  endLocation?: Region;
  mapRef?: any;
  arrDirection?: any;
}

const MapLocation = ({
  style,
  children,
  startLocation,
  endLocation,
  mapRef,
  arrDirection,
  ...props
}: IAppProps) => (
  <MapView
    style={styles.mapView}
    initialRegion={startLocation}
    provider={PROVIDER_GOOGLE}
    ref={mapRef}
    rotateEnabled={false}
    pitchEnabled={false}
    toolbarEnabled={false}
    loadingEnabled={true}
    {...props}
  >
    {startLocation ? (
      <Marker
        coordinate={{
          latitude: startLocation.latitude,
          longitude: startLocation.longitude
        }}
        anchor={{ x: 0.5, y: 0.5 }}
      >
        <View style={{ height: 30, aspectRatio: 1 / 1 }}>
          <Image
            source={require("@/assets/images/icLocationA.png")}
            resizeMode={"cover"}
            style={appStyle.image}
          />
        </View>
      </Marker>
    ) : null}
    {endLocation ? (
      <Marker
        coordinate={{
          latitude: endLocation.latitude,
          longitude: endLocation.longitude
        }}
        anchor={{ x: 0.5, y: 0.9 }}
      >
        <View style={{ height: 30, aspectRatio: 1 / 1 }}>
          <Image
            source={require("@/assets/images/icLocation.png")}
            resizeMode={"cover"}
            style={appStyle.image}
          />
        </View>
      </Marker>
    ) : null}
    {arrDirection ? (
      <PL coordinates={arrDirection} strokeWidth={4} strokeColor="#F4663E" />
    ) : null}
  </MapView>
);

export default React.memo(MapLocation);

const styles = EStyleSheet.create({
  mapView: {
    width: SCREEN_WIDTH,
    aspectRatio: 1 / 1
  }
});
