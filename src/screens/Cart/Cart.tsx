import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { CartContext } from "../../context/CartContext";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
  //const route = useRoute();
  //const { id } = route.params as ParamsProps;
  const { cart } = useContext(CartContext);

  return (
    <SafeAreaView>
    <ScrollView>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Cart;
