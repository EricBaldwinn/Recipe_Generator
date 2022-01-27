import { Url, Url2, Token } from '@env';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Image } from 'react-native';
import axios from 'axios';
import { UsedIngredients } from './UsedIngredients.jsx';
import { MissedIngredients } from './MissedIngredients.jsx';
import { Steps } from './Steps.jsx';

export const App = () => {
  const [ingredients, onChangeText] = React.useState("EX: salmon,thyme,lemon");
  const [usedIngredients, setUsedIngredients] = React.useState([]);
  const [missingIngredients, setMissingIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState([{title: ''}]);
  const [steps, setSteps] = React.useState([]);
  const [count, setCount] = React.useState(0);

  const getRecipe = () => {
    axios.get(`${Url}`, { params: { ingredients: ingredients, apiKey: `${Token}` } })
      .then((response) => {
        setUsedIngredients(response.data[count].usedIngredients)
        setMissingIngredients(response.data[count].missedIngredients)
        setRecipe(response.data)
        setSteps([])
        setCount(0)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const getNextRecipe = () => {
     axios.get(`${Url}`, { params: { ingredients: ingredients, apiKey: `${Token}` } })
      .then((response) => {
        setUsedIngredients(response.data[count].usedIngredients)
        setMissingIngredients(response.data[count].missedIngredients)
        setRecipe(response.data)
        setSteps([])
        setCount(count + 1)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const getInstructions = () => {
    axios.get(`${Url2}${recipe[count].id}/analyzedInstructions`, { params: { apiKey: `${Token}` } })
      .then((response) => {
        setSteps(response.data[0].steps)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  return (
    <View style={styles.container}>
      <Text style={styles.titles}>
        Input Ingredients Here
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={ingredients}
      />
      <View style={styles.buttonContainer}>
      <Button
        title="Find Recipe"
        onPress={getRecipe}
      />
      <Button
      title="Get Next Recipe"
      onPress={getNextRecipe}
      />
      </View>
      <StatusBar style="auto" />
      <Text style={styles.titles}>{recipe[count].title}</Text>
      <Image
      style={styles.recipeImage}
      source={{
        uri: recipe[count].image
      }}
      />
      <Text style={styles.titleUsed}>Ingredients Used</Text>
      <Text style={styles.titleMissing}>Ingredients Missing</Text>
      <View>
        <UsedIngredients usedIngredients={usedIngredients} />
        <MissedIngredients missingIngredients={missingIngredients} />
      </View>
      <View style={styles.steps}>
        <Button
          title="Get Steps"
          onPress={getInstructions}
        />
        <Steps steps={steps} />
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
  steps: {
    position: 'absolute',
    top: 400,
    alignItems: 'center',
    textAlign: 'center'
  },
  titles: {
    fontWeight: 'bold'
  },
  titleMissing: {
    fontWeight: 'bold',
    left: 100,
    top: 10
  },
  titleUsed: {
    fontWeight: 'bold',
    right: 115,
    top: 30
  },
  recipeImage: {
    width: 250,
    height: 120
  },
  buttonContainer: {
    flexDirection: 'row',
    height: 45
  }
});
