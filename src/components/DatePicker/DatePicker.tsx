import React, { Component, useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import TextLight from "../Text/SFTextRegular";
import boxShadow from "@/styles/boxShadow";
import DatePicker from "react-native-datepicker";
import moment from "moment";
import { Appearance } from "react-native-appearance";
interface ElDatepickerProps {
  date: string;
  onChange: any;
}

const colorScheme = Appearance.getColorScheme();
let bgColor, textCancelColor;
if (colorScheme === "dark") {
  bgColor = "#000";
  textCancelColor = "#fff";
} else {
  bgColor = "#fff";
  textCancelColor = "#666";
}

const ElDatePicker = (props: ElDatepickerProps) => {
  const [date, setDate] = useState(props.date);
  const refDate: any = React.useRef();
  const maxDate = moment()
    .subtract(1, "days")
    .format("DD/MM/YYYY");
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        refDate.current.onPressDate();
      }}
      style={[boxShadow.shadow, styles.dateBox]}
    >
      <Image
        style={styles.img}
        source={require("@/assets/images/icCalendar.png")}
      ></Image>
      <TextLight>{date}</TextLight>

      <DatePicker
        ref={refDate}
        style={{ width: 0 }}
        date={date}
        mode="date"
        showIcon={false}
        placeholder=""
        format="DD/MM/YYYY"
        confirmBtnText="Đồng ý"
        cancelBtnText="Huỷ"
        hideText={true}
        customStyles={{
          datePickerCon: {
            backgroundColor: bgColor
          },
          btnTextCancel: {
            color: textCancelColor
          }
        }}
        onDateChange={date => {
          setDate((date = date));
          props.onChange(date);
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  dateBox: {
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center",
    height: 40,
    // width: 140,
    flexDirection: "row",
    borderRadius: 10,
    paddingHorizontal: 10
  }
});

export default ElDatePicker;
