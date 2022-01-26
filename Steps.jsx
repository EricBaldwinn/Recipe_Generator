import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';



export const Steps = ({steps}) => {

  const allSteps = () => {
    return steps.map((oneStep) => {
      return (
        <View key={oneStep.number}><Text>{oneStep.number}. {oneStep.step}</Text></View>
      )
    })
  }




  return(
    <View>
     <ScrollView style={styles.stepView}>
      {allSteps()}
     </ScrollView>
     </View>
  )
}


const styles = StyleSheet.create({
  stepView: {
    maxHeight: 180
  }
})