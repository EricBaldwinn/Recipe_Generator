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
     <View>
     <ScrollView>
       <Text style={styles.titles}>Ingredients Missing</Text>
      {ingredients()}
     </ScrollView>
     </View>
   )
}

const styles = StyleSheet.create({
  titles: {
    fontWeight: 'bold'
  }
})