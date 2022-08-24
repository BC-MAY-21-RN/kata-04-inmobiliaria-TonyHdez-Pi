import { ScrollView } from "react-native";
import React from "react";
import CardList from "./CardList";
import { data } from "../data/data";

export const Card = () => {
  return (
    
    // Tipo de letra poppins
    <ScrollView style={{flex: 1,
      width: "90%",
      height: 205,
      marginTop: 80,}}>

      {
        data.map((listData, index) =>
          <CardList {...listData} key={index}/>
           )
        }
      </ScrollView>
  );
};
