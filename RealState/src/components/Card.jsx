import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { data } from "../data/data";
import { globalStyles } from "../styles/globalStyles";
import { FontAwesome } from "@expo/vector-icons";
export const Card = () => {
  return (
    // Tipo de letra poppins
    <View style={globalStyles.mainContainer}>
      <View style={globalStyles.cardContainer}>
        <View style={globalStyles.leftCard}>
          <View style={globalStyles.imageContainer}>
            <ImageBackground
              style={globalStyles.image}
              source={{
                uri: "https://q4g9y5a8.rocketcdn.me/wp-content/uploads/2020/02/home-banner-2020-02-min.jpg",
              }}
            >
              <View style={globalStyles.rating}>
                <FontAwesome name="star" size={13} color="gold" />

                <Text style={globalStyles.ratingInnerText}>4.7</Text>
              </View>
            </ImageBackground>
          </View>
        </View>

        <View style={ globalStyles.rightCard } >

          <View style={ globalStyles.textContainer } >

            <Text style={ globalStyles.innerTextTittle } >The willows</Text>
            <Text style={ globalStyles.innerTextAddress } >Address</Text>

            <View style={ globalStyles.innerTextIcons } >
              
              <Text><FontAwesome name="bed" size={15} color="black" /> 4</Text>
              <Text><FontAwesome name="bathtub" size={15} color="black" /> 3</Text>
              <Text><FontAwesome name="home" size={15} color="black" /> 300ft</Text>

            </View>

            <View style={globalStyles.favoritesIconContainer}>
            <Text style={globalStyles.priceTag}>$500/m</Text>
            <FontAwesome name="heart" size={15} color="black" />
            </View>

          </View>
        </View>
      </View>
    </View>
  );
};
