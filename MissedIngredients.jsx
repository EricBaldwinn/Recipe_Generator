import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

export const MissedIngredients = ({missingIngredients}) => {
  const ingredients = () => {
    return missingIngredients.map((ingredient) => {
      return(
       <View key={ingredient.id}><Text>{ingredient.original}</Text></View>
      )
    })
  }
   return(
     <View style={styles.missed}>
     <ScrollView style={styles.ingredientView}>
      {ingredients()}
     </ScrollView>
      </View>
   )
}

const styles = StyleSheet.create({
  titles: {
    fontWeight: 'bold',
    top: 61
  },
  ingredientView: {
    maxHeight: 100,
    maxWidth: 120
  },
  missed: {
    position: 'absolute',
    left: '30%',
    maxWidth: '85%',
    top: 10,
    left: 110
  }
})