import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import CartContextProvider from "../context/CartContext";

export function Routes() {
  return (
    <CartContextProvider>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </CartContextProvider>
  );
}
