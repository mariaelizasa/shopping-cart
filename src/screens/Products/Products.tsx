import React, { useState, useEffect, useContext } from "react";
import { View, SafeAreaView, ScrollView, Pressable, Text } from "react-native";
import { Product } from "../../@types/Product";
import api from "../../services/api";
import ProductItem from "../../components/ProductItem/ProductItem";
import { styles } from "./style";
import Button from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../../context/CartContext";

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>();

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
          <Text style={styles.title}>Welcome to my shopping! 💖</Text>
          {products?.map((product, index) => (
            <View key={product.id}>
              <ProductItem product={product} key={product.id} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductsList;
