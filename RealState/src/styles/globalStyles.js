import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  mainContainer: {
    height: "80%",
    width: "90%",
    backgroundColor: "#e5e5e5",
 },
  cardContainer: {
    flex: 1,
    width: "90%",
    height: 120,
    borderRadius: 15,
    flexDirection: "row",
    backgroundColor: "white",
    shadowColor: "#171717",
    elevation: 20,
    marginTop: 20,
    marginBottom: 20
  },
  imageContainer: {
    width: "80%",
    borderRadius: 20,
    height: "80%",
  },
  image: {
    flex: 1,
    borderRadius: 20
  },
  rating: {
    borderRadius: 50,
    width: "40%",
    height: "20%",
    flexDirection: "row",
    backgroundColor: "#fbedb7",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: 'absolute',
    marginTop: 70,
    marginLeft: 35
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
    justifyContent: "space-evenly",
  },
  textContainer: {
    padding: 8,
    justifyContent: 'space-evenly',
    height: '90%'
  },
  innerTextTittle:{
    fontSize: 20,
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
    fontWeight: "500",
  }
});
