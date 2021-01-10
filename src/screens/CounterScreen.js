import React from "react";
import { Text, StyleSheet, View, Button } from 'react-native';

const reducer = (state, action) => {
  // state: {counter: number}
  // action: {type: 'increase' || 'decrease' , payload: 1}
  switch(action.type) {
    case 'increase':
      return {...state, counter: state.counter + action.payload};
    case 'decrease':
      return {...state, counter: state.counter - action.payload};
    default:
      return state;
  }
}

export const CounterScreen = () => {
  const [state, dispatch] = React.useReducer(reducer, {counter: 0})
  
  return (
    <View>
      <Text>Counter Count: {state.counter}</Text>
      <Button title='Increase' onPress={() => dispatch({ type: 'increase', payload: 1 })} />
      <Button title='Decrease' onPress={() => dispatch({ type: 'decrease', payload: 1 })} />
    </View>
  )
};

const styles = StyleSheet.create({
});

