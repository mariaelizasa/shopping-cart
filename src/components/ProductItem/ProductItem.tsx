import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Text, View, Image } from "react-native";
import { styles } from "./style";
import Button from "../Button/Button";
import { Product } from "../../@types/Product";

interface ProductProps {
  product: Product;
}

const ProductItem = ({ product }: ProductProps) => {
  const { id, image, title, price } = product;
  const { addItemCart } = useContext(CartContext);
  

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
        <Button
          title="Adicionar"
          onPress={() => addItemCart(product, id)}
        ></Button>
      </View>
    </View>
  );
};

export default ProductItem;
