import React, { useState } from "react";
import {
  TextInput,
  View,
  TextInputProps,
  Image,
  TouchableOpacity
} from "react-native";
import { Icon } from "native-base";
import { SFTextSemiBold } from "@/components/Text/index";
import { placeholder, light, disable, info } from '@/styles/color';
import DateTimePicker from "react-native-modal-datetime-picker";
import { Calendar } from "@/components/Constants/Image";
import { SCREEN_WIDTH } from "@/styles/dimensions";
import { TextInputMask } from "react-native-masked-text";
import { Appearance } from "react-native-appearance";

interface inputProps extends TextInputProps {
  label?: string;
  colorLabel?: string;
  placeholderText?: string;
  isShowPass?: Boolean;
  value?: string;
  isDateTimePickerVisible?: boolean;
  handleDatePicked?: any;
  hideDateTimePicker?: any;
  showDatePicker?: boolean;
  showDateTimePicker?: any;
  disableView?: boolean;
}

const MyInput = React.forwardRef(
  (
    {
      label,
      colorLabel,
      placeholderText,
      style,
      value,
      isShowPass,
      isDateTimePickerVisible,
      handleDatePicked,
      hideDateTimePicker,
      showDatePicker,
      showDateTimePicker,
      disableView,
      ...props
    }: inputProps,
    ref: any
  ) => {
    let [showPasss, setShowPass] = useState(true);
    const colorScheme = Appearance.getColorScheme();

    return (
      <View>
        <SFTextSemiBold style={{ fontSize: 13, color: colorLabel }}>
          {label}
        </SFTextSemiBold>
        {showDatePicker ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
              marginBottom: 15
            }}
          >
            <TextInputMask
              style={{
                width: (SCREEN_WIDTH * 63) / 100,
                borderWidth: 1,
                borderColor: "#DCDDE9",
                borderRadius: 6,
                paddingVertical: 10,
                paddingLeft: 10,
                fontSize: 15,
                fontFamily:
                  value == "" ? "sf-pro-text-regular" : "sf-pro-text-semibold"
              }}
              placeholder={placeholderText}
              placeholderTextColor={info}
              value={value}
              type={"datetime"}
              options={{
                format: "DD/MM/YYYY"
              }}
              {...props}
            />
            <TouchableOpacity
              disabled={showDateTimePicker ? false : true}
              onPress={showDateTimePicker}
              style={{
                backgroundColor: light,
                borderRadius: 5,
                overflow: "hidden",
                padding: 15,
                borderColor: "#00000014",
                borderWidth: 0.2,
                shadowColor: "#00000014",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 5,
                shadowRadius: 10,
                elevation: 1
              }}
            >
              <Image source={Calendar} />
            </TouchableOpacity>
            <DateTimePicker
              isVisible={isDateTimePickerVisible}
              onConfirm={handleDatePicked}
              onCancel={hideDateTimePicker}
              isDarkModeEnabled={colorScheme === "dark"}
              mode="date"
              hideTitleContainerIOS
            />
          </View>
        ) : (
            <View
              style={[
                {
                  borderWidth: 1,
                  borderColor: "#DCDDE9",
                  borderRadius: 6,
                  paddingVertical: 10,
                  paddingLeft: 10,
                  marginTop: 10,
                  marginBottom: 15,
                  flexDirection: "row"
                  // justifyContent: 'center'
                },
                disableView && { backgroundColor: "#97979733" }
              ]}
            >
              <TextInput
                style={{
                  width: isShowPass ? "89%" : "100%",
                  fontSize: 15,
                  fontFamily:
                    value == "" ? "sf-pro-text-regular" : "sf-pro-text-semibold"
                }}
                secureTextEntry={isShowPass ? showPasss : false}
                ref={ref}
                placeholder={placeholderText}
                placeholderTextColor={info}
                value={value}
                {...props}
              />
              {isShowPass && (
                <TouchableOpacity
                  onPress={() => {
                    setShowPass((showPasss = !showPasss));
                  }}
                >
                  {showPasss ? (
                    <Icon
                      name="eye"
                      type="FontAwesome5"
                      style={{
                        color: placeholder,
                        fontSize: 16,
                        alignSelf: "flex-end"
                      }}
                    />
                  ) : (
                      <Icon
                        name="eye-slash"
                        type="FontAwesome5"
                        style={{
                          color: placeholder,
                          fontSize: 16,
                          alignSelf: "flex-end"
                        }}
                      />
                    )}
                </TouchableOpacity>
              )}
            </View>
          )}
      </View>
    );
  }
);

export default MyInput;
