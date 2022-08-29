import { ScrollView } from "react-native";
import React from "react";
import CardList from "./CardList";
import { globalStyles } from "../styles/globalStyles";
import { data } from "../data/data";

export const Card = () => {
  return (
    
    // Tipo de letra poppins
    <ScrollView style={globalStyles.mainContainer}>

      {
        data.map((listData, index) =>
          <CardList {...listData} key={index}/>
           )
        }
      </ScrollView>
  );
};
