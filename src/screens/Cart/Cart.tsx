import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const Cart = () => {
  //const route = useRoute();
  //const { id } = route.params as ParamsProps;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>teste</Text>
        <StatusBar style="auto" translucent={true} />
      </View>
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
