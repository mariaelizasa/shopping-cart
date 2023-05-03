import React from "react";
import { ButtonProps } from "../../types/Button";
import { View, Pressable, Text } from "react-native";
import { styles } from "./style";

const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default Button;
