import React from "react";

import { Text, View, Image } from "react-native";

import { styles } from "./style";

type CartItemProps = {
  title: string;
  price: string;
  image: string;
};

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
      </View>
    </View>
  );
};

export default CartItem;
