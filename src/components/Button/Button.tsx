import React from "react";

import { View, Pressable, Text } from "react-native";
import { styles } from "./style";

type ButtonProps = {
  title: string;
  onPress: (params: any) => any;
};

const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default Button;
