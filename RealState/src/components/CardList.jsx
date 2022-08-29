import { View, Text, SafeAreaView, Image } from 'react-native'
import { FontAwesome } from "@expo/vector-icons";
import { globalStyles } from '../styles/globalStyles'
import React from 'react'

export default function CardList({ image, propertyName, address, bedrooms,  bathrooms, squareFeet, price}) {
  console.log(image)
    return (
        <SafeAreaView>
    <View style={globalStyles.cardContainer}>
    <View style={globalStyles.leftCard}>
      <View style={globalStyles.imageContainer}>
        <Image
          style={globalStyles.image}
          source={{
            uri: image
          }}
        />
          <View style={globalStyles.rating}>
            <FontAwesome name="star" size={13} color="gold" />

            <Text style={globalStyles.ratingInnerText}>4.7</Text>
          </View>
      </View>
    </View>

    <View style={ globalStyles.rightCard } >

        <Text style={ globalStyles.innerTextTittle } >{propertyName}</Text>
        <Text style={ globalStyles.innerTextAddress } >{address}</Text>

         <View style={ globalStyles.innerTextIcons } >
          
           <Text><FontAwesome name="bed" size={15} color="black" /> {bedrooms} </Text>
           <Text><FontAwesome name="bathtub" size={15} color="black" /> {bathrooms} </Text>
          <Text><FontAwesome name="home" size={15} color="black" /> {squareFeet} ft</Text>

         </View>

         <View style={globalStyles.favoritesIconContainer}>
         <Text style={globalStyles.priceTag}>${price}/m</Text>
         <FontAwesome name="heart" size={12} color="black" />
         </View>
      </View>
    </View>
     </SafeAreaView>
  )
}
