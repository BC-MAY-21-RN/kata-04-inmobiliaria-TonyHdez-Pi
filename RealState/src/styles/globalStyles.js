import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#e5e5e5",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    width: "90%",
    height: "20%",
    borderRadius: 15,
    flexDirection: "row",
    backgroundColor: "white",
    shadowColor: "#171717",
    elevation: 20,
  },
  imageContainer: {
    width: "80%",
    borderRadius: 10,
    height: "70%",
  },
  image: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  rating: {
    borderRadius: 50,
    width: "40%",
    height: "20%",
    flexDirection: "row",
    marginBottom: 8,
    backgroundColor: "#fbedb7",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  ratingInnerText: {
    color: "#7a6229",
    fontSize: 10,
    fontWeight: "800",
  },
  leftCard: {
    width: "40%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rightCard: {
    width: "60%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  textContainer: {
    padding: 10,
  },
  innerTextIcons: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  favoritesIconContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceTag: {
    fontSize: 18,
    fontWeight: "800",
  },
});
