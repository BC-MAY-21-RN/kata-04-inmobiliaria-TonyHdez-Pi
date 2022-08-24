import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#e5e5e5",
    // justifyContent: "center",
    alignItems: "center",
    borderWidth: 10,
    borderColor: 'red'
 },
  cardContainer: {
    flex: 1,
    width: "90%",
    height: "20%",
    borderRadius: 15,
    flexDirection: "row",
    backgroundColor: "white",
    shadowColor: "#171717",
    elevation: 20
  },
  imageContainer: {
    width: "80%",
    borderRadius: 20,
    height: "70%",
  },
  image: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 20
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
    position: 'absolute',
    marginTop: 85,
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
    justifyContent: "center",
    alignItems: "flex-start",
  },
  textContainer: {
    padding: 8,
    justifyContent: 'space-evenly',
    height: '90%'
  },
  innerTextTittle:{
    fontSize: 20,
    
  },
  innerTextAddress:{

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
  }
});
