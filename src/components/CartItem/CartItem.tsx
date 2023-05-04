import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Text, View, Image } from "react-native";
import CartItemProps from "../../@types/CartItem";
import Button from "../Button/Button";
import { styles } from "./style";

interface CartProps {
  item: CartItemProps;
}
const CartItem = ({ item }: CartProps) => {
  const { removeItemCart, increaseItem, decreaseItem } =
    useContext(CartContext);
  const { id, image, amount, title, price } = item;

  return (
    <View>
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
          <Text style={styles.quantity}>{`Quantidade: ${amount}`}</Text>
          <Button title="Remover" onPress={() => removeItemCart(id)}></Button>
          <View style={styles.buttonContainer}>
            <Button title="-" onPress={() => decreaseItem(item)}></Button>
            <Button title="+" onPress={() => increaseItem(item)}></Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
