import React from "react";
import { Text, StyleSheet, View } from 'react-native';

export const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Hi this is my text for the components screen</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    color: 'green'
  }
});

