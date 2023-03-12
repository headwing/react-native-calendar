import { StyleSheet, View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function CalendarHeader(props) {
  return (
    <>
      <View style={S.header}>
        <Pressable
          onPress={props.moveToPreviousMonth.bind(this, props.month)}
          style={({ pressed }) => pressed && S.pressed}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </Pressable>
        <View style={{ flexDirection: "row" }}>
          <Pressable>
            <Text style={S.monthYear}>{props.month}월 </Text>
          </Pressable>
          <Pressable>
            <Text style={S.monthYear}>{props.year}</Text>
          </Pressable>
        </View>
        <Pressable
          onPress={props.moveToNextMonth.bind(this, props.month)}
          style={({ pressed }) => pressed && S.pressed}
        >
          <Ionicons name="chevron-forward" size={24} color="black" />
        </Pressable>
      </View>
    </>
  );
}

const S = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.3,
  },
  monthYear: {
    fontSize: 20,
  },
});
