import React from "react";
import { ButtonProps } from "../../@types/Button";
import { Pressable, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
