import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [ingredients, onChangeText] = React.useState("EX: salmon,thyme,lemon");
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
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    top: '10%',
  },
  input: {
    borderWidth: 2,
    width: '80%',
    textAlign: 'center'
  }
});
