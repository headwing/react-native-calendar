import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import CalendarCom from "../../components/CalendarCom";

export default function Calendar({ navigation }) {
  return (
    <View style={S.calendarContainer}>
      <CalendarCom />
    </View>
  );
}

const S = StyleSheet.create({
  calendarContainer: {
    flex: 1,
  },
});
