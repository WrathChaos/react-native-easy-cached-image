import React from 'react';
import { ScrollView, StyleSheet, Platform, View } from 'react-native';
import CachedImage from '../lib/src/components/CachedImage';


const styles = {
  imageContainer: {
    ...Platform.select({
      ios: {
        shadowColor: "#505e80",
        shadowOffset: {
          width: 2,
          height: 3
        },
        shadowRadius: 4,
        shadowOpacity: 0.7,
      },
      android: {
        elevation: 12
      },
    })
  },
  imageStyle: {
    height: 125,
    width: 125,
  },
}

const images = [
  { source: require("../assets/photos/photo-1.jpeg") },
  { source: require("../assets/photos/photo-2.jpeg") },
  { source: require("../assets/photos/photo-3.jpeg") },
  { source: require("../assets/photos/photo-4.jpeg") },
]

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        {images.forEach(image => {
          <View style={styles.imageContainer}>
            <CachedImage
              resizeMode="cover"
              style={styles.imageStyle}
              borderRadius={30}
              source={{ uri: image.source }} />
          </View>
        })}
      </ScrollView>
    );
  }
}
