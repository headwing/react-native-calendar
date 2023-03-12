import React from "react";
import { View, Animated, ImageBackground } from "react-native";

import Swipeable from "react-native-gesture-handler/Swipeable";
import { Dimensions } from "react-native";

const window = Dimensions.get("window");
const url = require("./rodin.jpeg");

function Library() {
  const rightAction = (progress, dragX) => {
    console.log(dragX);
    const trans = dragX.interpolate({
      inputRange: [-window.width, 0], //화면의 왼쪽 끝, 화면의 맨 오른쪽
      outputRange: [0, window.width], //transitin 0, transition 100%
    });

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <Animated.Text
          style={{
            fontSize: 60,
            color: "white",
            fontWeight: "500",
            transform: [{ translateX: trans }],
          }}
        >
          The Thinker Bronze 1900-01 (1880)
        </Animated.Text>
        <Animated.Text
          style={{
            fontSize: 22,
            color: "white",
            fontWeight: "200",
            transform: [{ translateX: trans }],
          }}
        >
          Auguste Rodin (French, 1840-1917)
        </Animated.Text>
      </View>
    );
  };

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <ImageBackground
        source={url}
        style={{
          resizeMode: "contain",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Swipeable
          containerStyle={{
            width: "100%",
            height: "100%",
          }}
          renderRightActions={rightAction}
        ></Swipeable>
      </ImageBackground>
    </View>
  );
}

export default Library;
