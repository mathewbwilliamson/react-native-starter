import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from 'react-native';
import { ColorCounter } from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  // original action === { colorToChange: red or green or blue; amount: 15 || -15}
  // standard action === { type: 'change_red', payload: 15 || -15 }
  switch(action.type) {
    case 'change_red':
      if ((state.red <= 0 && action.payload < 0) || (state.red >= 255 && action.payload > 0)) {
        return state;  
      }
      return { ...state, red: state.red + action.payload };
    case 'change_green':
      if ((state.green <= 0 && action.payload < 0) || (state.green >= 255 && action.payload > 0)) {
        return state;  
      }
      return { ...state, green: state.green + action.payload };
    case 'change_blue':
      if ((state.blue <= 0 && action.payload < 0) || (state.blue >= 255 && action.payload > 0)) {
        return state;  
      }
      return { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
}

export const SquareScreen = () => {
  
  const [state, dispatch ] = useReducer(reducer, { red: 0, blue: 0, green: 0 });

  return (
    <View>
      <ColorCounter
        color='Red'
        onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})}
      />
      <ColorCounter
        color='Blue'
        onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
      />
      <ColorCounter
        color='Green'
        onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
      />
      <View style={{ height: 100, width: 100, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}} />
    </View>
  )
};

const styles = StyleSheet.create({
});

