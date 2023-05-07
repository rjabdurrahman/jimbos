import React from "react";
import { TouchableOpacity, Image } from "react-native";

const LeftArrow = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={require("./images/left-arrow.svg")} />
    </TouchableOpacity>
  );
};

const RightArrow = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={require("./images/right-arrow.svg")} />
    </TouchableOpacity>
  );
};

export { LeftArrow, RightArrow };