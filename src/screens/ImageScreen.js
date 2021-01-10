import React from "react";
import { Text, StyleSheet, View } from 'react-native';
import { ImageDetail } from "../components/ImageDetail";

export const ImageScreen = () => {
  const beachImageLocation = require('../../assets/beach.jpg')
  const forestImageLocation = require('../../assets/forest.jpg')
  const mountainImageLocation = require('../../assets/mountain.jpg')

  return (
    <View>
      <ImageDetail title="Beach" imageSrc={beachImageLocation} />
      <ImageDetail title="Forest" imageSrc={forestImageLocation} />
      <ImageDetail title="Mountain" imageSrc ={mountainImageLocation} />
    </View>
  )
};

const styles = StyleSheet.create({
});

