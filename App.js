import {Url, Token} from '@env';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import axios from 'axios';
import {UsedIngredients} from './UsedIngredients.jsx';
import {MissedIngredients} from './MissedIngredients.jsx';

export const App = () => {
  const [ingredients, onChangeText] = React.useState("EX: salmon,thyme,lemon");
  const [usedIngredients, setUsedIngredients] = React.useState([]);
  const [missingIngredients, setMissingIngredients] = React.useState([]);
  const [recipeId, setRecipeId] = React.useState();


  const getRecipe = () => {
    axios.get(`${Url}`, {params:{ingredients: ingredients, apiKey: `${Token}`}})
    .then((response) => {
      setUsedIngredients(response.data[0].usedIngredients)
      setMissingIngredients(response.data[0].missedIngredients)
      setRecipeId(response.data[0].id)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <View style={styles.container}>
      <Text>
        Input Ingredients Here
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={ingredients}
      />
      <Button
      title="Find Recipe"
      onPress={getRecipe}
      />
      <StatusBar style="auto" />
      <View style={styles.used}>
      <UsedIngredients usedIngredients={usedIngredients}/>
      <MissedIngredients missingIngredients={missingIngredients}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    top: '10%',
    alignItems: 'center'
  },
  input: {
    borderWidth: 2,
    width: '80%',
    textAlign: 'center',
  },
  used: {
    right: '20%',
    width: '50%',
    top: 39
  },
});
