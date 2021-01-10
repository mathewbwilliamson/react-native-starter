import React from "react";
import { Text, StyleSheet, View, FlatList } from 'react-native';

export const ListScreen = () => {
  const friends = [ 
    { id: '1', name: 'Friend #1' },
    { id: '2', name: 'Friend #2' },
    { id: '3', name: 'Friend #3' },
    { id: '4', name: 'Friend #4' },
    { id: '5', name: 'Friend #5' },
    { id: '6', name: 'Friend #6' },
    { id: '7', name: 'Friend #7' },
    { id: '8', name: 'Friend #8' },
    { id: '9', name: 'Friend #9' },
    { id: '10', name: 'Friend #10' },
  ]

  return (
    <FlatList
      keyExtractor={(item) => item.name}
      data={friends}
      renderItem={({ item }) => {
        // return <Text key={item.id}>{item.name}</Text>
        return <Text style={styles.item}>{item.name}</Text>
      }} />
  )
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 20
  }
});

