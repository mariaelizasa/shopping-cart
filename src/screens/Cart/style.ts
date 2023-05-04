import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F3F3",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 10,
    flexDirection: "row",
  },
  button: {
    width: (width + 280),
    justifyContent: "center",
    alignItems: "center",
  },
});
