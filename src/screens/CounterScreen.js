import React from "react";
import { Text, StyleSheet, View, Button } from 'react-native';

export const CounterScreen = () => {
  const [ counter, setCounter ] = React.useState(0);

  return (
    <View>
      <Text>Counter Count: {counter}</Text>
      <Button title='Increase' onPress={() => setCounter(counter + 1)} />
      <Button title='Decrease' onPress={() => setCounter(counter - 1)} />
    </View>
  )
};

const styles = StyleSheet.create({
});

