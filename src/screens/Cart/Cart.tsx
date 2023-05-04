import React, { useContext } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { CartContext } from "../../context/CartContext";
import CartItem from "../../components/CartItem/CartItem";
import Button from "../../components/Button/Button";
import { styles } from "./style";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <SafeAreaView accessible={true} accessibilityLabel="Page Cart">
      <ScrollView>
        <View style={styles.button}>
          <Button title="Delete All 😭" onPress={() => clearCart()}></Button>
        </View>
        <View style={styles.container}>
          {cart?.map((cart) => (
            <View key={cart.id}>
              <CartItem item={cart} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
