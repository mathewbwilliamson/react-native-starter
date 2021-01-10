import React from "react";
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`
}

export const ColorScreen = () => {
  const [colors, setColors] = React.useState([]);

  return (
    <View>
      <Button title='Add Color' onPress={() => setColors([...colors, randomRgb()])} />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return <View style={{ height: 100, width: 100, backgroundColor: item}} />
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
});

