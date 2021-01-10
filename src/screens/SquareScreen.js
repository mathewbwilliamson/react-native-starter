import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from 'react-native';
import { ColorCounter } from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  // action === { colorToChange: red or green or blue; amount: 15 || -15}
  switch(action.colorToChange) {
    case 'red':
      if ((state.red <= 0 && action.amount < 0) || (state.red >= 255 && action.amount > 0)) {
        return state;  
      }
      return { ...state, red: state.red + action.amount };
    case 'green':
      if ((state.green <= 0 && action.amount < 0) || (state.green >= 255 && action.amount > 0)) {
        return state;  
      }
      return { ...state, green: state.green + action.amount };
    case 'blue':
      if ((state.blue <= 0 && action.amount < 0) || (state.blue >= 255 && action.amount > 0)) {
        return state;  
      }
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
}

export const SquareScreen = () => {
  
  const [state, dispatch ] = useReducer(reducer, { red: 0, blue: 0, green: 0 });
  console.log('\x1b[41m%s \x1b[0m', '[matt] state', state);

  return (
    <View>
      <ColorCounter
        color='Red'
        onIncrease={() =>  dispatch({colorToChange: 'red', amount: COLOR_INCREMENT})}
        onDecrease={() => dispatch({colorToChange: 'red', amount: -1 * COLOR_INCREMENT})}
      />
      <ColorCounter
        color='Blue'
        onIncrease={() => dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT})}
        onDecrease={() => dispatch({colorToChange: 'blue', amount: -1 * COLOR_INCREMENT})}
      />
      <ColorCounter
        color='Green'
        onIncrease={() => dispatch({colorToChange: 'green', amount: COLOR_INCREMENT})}
        onDecrease={() => dispatch({colorToChange: 'green', amount: -1 * COLOR_INCREMENT})}
      />
      <View style={{ height: 100, width: 100, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}} />
    </View>
  )
};

const styles = StyleSheet.create({
});

