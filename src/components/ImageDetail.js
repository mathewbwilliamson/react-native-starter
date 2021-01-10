import React from "react";
import { Text, StyleSheet, View, Image } from 'react-native';

export const ImageDetail = ({ title, imageSrc }) => {
  return (
    <View>
      <Image source={imageSrc} />
      <Text>{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
});

