import { StyleSheet } from "react-native";
import { 
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic 
} from '@expo-google-fonts/poppins'
export const globalStyles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#e5e5e5",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: Poppins_400Regular
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
    padding: 8,
    justifyContent: 'space-evenly',
    height: '90%'
  },
  innerTextTittle:{
    fontSize: 20,
    fontWeight: '400'
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
  },
});
