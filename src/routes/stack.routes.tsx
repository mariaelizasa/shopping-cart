import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text } from "react-native";
const { Screen, Navigator } = createNativeStackNavigator();

import ProductsList from "../screens/Products/Products";
import Cart from "../screens/Cart/Cart";

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="Products" component={ProductsList} />
      <Screen name="Cart" component={Cart} />
    </Navigator>
  );
}
