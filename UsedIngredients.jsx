import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';


export const UsedIngredients = ({usedIngredients}) => {

 const ingredients = () => {
   return usedIngredients.map((ingredient) => {
     return(
      <View key={ingredient.id}><Text>{ingredient.original}</Text></View>
     )
   })
 }


  return(
    <View style={styles.used}>
    <ScrollView style={styles.ingredientView}>
     {ingredients()}
    </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  titles: {
    fontWeight: 'bold'
  },
  ingredientView: {
    maxHeight: 100,
    maxWidth: 150
  },
  used: {
    right: '20%',
    width: '100%',
    top: 10,
    right: 100
  }
})