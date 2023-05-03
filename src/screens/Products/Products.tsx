import React, { useState, useEffect } from "react";
import { View, SafeAreaView, ScrollView, Pressable, Text } from "react-native";
import { Product } from "../../@types/Product";
import api from "../../services/api";
import CartItem from "../../components/CartItem/CartItem";
import { styles } from "./style";
import Button from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>();
  const navigation = useNavigation();

  useEffect(() => {
    api
      .get<Product[]>("products")
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {products?.map((products, index) => (
            <View key={products.id}>
              <CartItem
                title={products.title}
                price={products.price}
                image={products.image}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductsList;
