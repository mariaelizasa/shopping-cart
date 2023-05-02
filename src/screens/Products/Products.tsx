import React, { useState, useEffect } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { Products } from "../../types/Products";
import api from "../../services/api";
import CartItem from "../../components/CartItem/CartItem";
import { styles } from "./style";

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<Products[]>();

  useEffect(() => {
    api
      .get<Products[]>("products")
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {products?.map((products) => (
            <CartItem
              key={products.id}
              title={products.title}
              price={products.price}
              image={products.image}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductsList;
