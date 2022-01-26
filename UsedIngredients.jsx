import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';


export const UsedIngredients = ({usedIngredients}) => {

 const ingredients = () => {
   return usedIngredients.map((ingredient) => {
     return(
      <View key={ingredient.id}><Text>{ingredient.name}</Text></View>
     )
   })
 }


  return(
    <View>
    <ScrollView>
      <Text>Ingredients Used</Text>
     {ingredients()}
    </ScrollView>
    </View>
  )
}