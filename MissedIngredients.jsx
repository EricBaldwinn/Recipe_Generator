import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

export const MissedIngredients = ({missingIngredients}) => {
  const ingredients = () => {
    return missingIngredients.map((ingredient) => {
      return(
       <View key={ingredient.id}><Text>{ingredient.name}</Text></View>
      )
    })
  }


   return(
     <View>
     <ScrollView>
       <Text>Ingredients Missing</Text>
      {ingredients()}
     </ScrollView>
     </View>
   )
}