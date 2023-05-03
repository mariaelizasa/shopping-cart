import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: "white",
    shadowRadius: 1,
    shadowOpacity: 0.1,
    width: (width - 35) / 2,
  },
  imageContainer: {
    padding: 10,
  },

  infoContainer: {
    padding: 10,
    borderTopWidth: 0.5,
    borderColor: "#d3d3d3"
  },

  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  title: {
    textAlign: "center",
    fontSize: 10,
    padding: 5,
  },
  price: {
    textAlign: "center",
    color: "gray",
  },
});
