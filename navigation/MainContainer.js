import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
// Screens
import HomeScreen from "./screens/Home";
import CalendarScreen from "./screens/Calendar";
import LibraryScreen from "./screens/Library";
import MypageScreen from "./screens/MyPage";

// Screen names
const homeName = "Home";
const calendarName = "Calendar";
const libraryName = "Library";
const mypageName = "Mypage";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === calendarName) {
              iconName = focused ? "calendar" : "calendar-outline";
            } else if (rn === libraryName) {
              iconName = focused ? "library" : "library-outline";
            } else if (rn === mypageName) {
              iconName = focused ? "person" : "person-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            padding: 10,
            height: 70,
          },
        })}
        tabBarOptions={{
          activeTintColor: "black",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 12 },
        }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={calendarName} component={CalendarScreen} />
        <Tab.Screen name={libraryName} component={LibraryScreen} />
        <Tab.Screen name={mypageName} component={MypageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
