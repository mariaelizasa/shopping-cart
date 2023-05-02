import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    marginBottom: 15,
    backgroundColor: "white",
    shadowRadius: 1,
    shadowOpacity: 0.1,
    width: (width - 35) / 2,
  },
  imageContainer: {
    padding: 10,
  },

  infoContainer: {
    borderTopWidth: 0.5,
    borderColor: "gray",
    padding: 10,
  },

  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  title: {
    textAlign: "center",

    padding: 5,
  },
  price: {
    textAlign: "center",
    color: "gray",
  },
});
