import React from "react";

import { Text, View, Image } from "react-native";
import { CartItemProps } from "../../@types/CartItem";
import { styles } from "./style";
import Button from "../Button/Button";

const CartItem = ({ title, price, image }: CartItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{`R$${price}`}</Text>
        <Button title="Adicionar" onPress={() => console.log("teste")}></Button>
      </View>
    </View>
  );
};

export default CartItem;
