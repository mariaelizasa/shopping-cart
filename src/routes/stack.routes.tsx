import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, Image } from "react-native";
const { Screen, Navigator } = createNativeStackNavigator();
import Button from "../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import ProductsList from "../screens/Products/Products";
import Cart from "../screens/Cart/Cart";
import Icon from "../assets/cart-icon.png"

export function StackRoutes() {
  const navigation = useNavigation();

  return (
    <Navigator>
      <Screen
        name="Products"
        component={ProductsList}
        options={{
          headerTitle: " Products ✨",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Image
                style={{
                  width: 25,
                  height: 25,
                }}
                source={Icon}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Screen name="Cart" component={Cart} />
    </Navigator>
  );
}
