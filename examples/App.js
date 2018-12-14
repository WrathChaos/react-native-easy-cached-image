import React from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import CachedImage from "react-native-easy-cached-image";
import { human } from "react-native-typography";
import Header from "./src/components/Header";
import Container from "./src/components/Container";
const styles = {};

const images = {
  arr1: [
    {
      source: require("./assets/photos/photo-1.jpeg"),
      artist: "Joseph Barrientos",
      ig: "@jbcreate_"
    },
    {
      source: require("./assets/photos/photo-2.jpeg"),
      artist: "Amogh Manjunath",
      ig: "@therealamogh"
    },
    {
      source: require("./assets/photos/photo-3.jpeg"),
      artist: "Chris Leipelt",
      ig: "@cleipelt"
    },
    {
      source: require("./assets/photos/photo-4.png"),
      artist: "Joshua Sortino",
      ig: "@sortino"
    }
  ],
  arr2: [
    {
      source: require("./assets/photos/photo-5.jpeg"),
      artist: "Ian Schneider",
      ig: "@goian"
    },
    {
      source: require("./assets/photos/photo-6.jpeg"),
      artist: "Tim Foster",
      ig: "@timberfoster"
    },
    {
      source: require("./assets/photos/photo-7.jpeg"),
      artist: "Amogh Manjunath",
      ig: "@therealamogh"
    },
    {
      source: require("./assets/photos/photo-8.jpeg"),
      artist: "Brandon Nelson",
      ig: "@noodlenelson"
    }
  ],
  arr3: [
    {
      source: require("./assets/photos/photo-9.jpeg"),
      artist: "Sasha • Stories"
    },
    {
      source: require("./assets/photos/photo-10.jpeg"),
      artist: "Alex Perry"
    },
    {
      source: require("./assets/photos/photo-11.jpeg"),
      artist: "Aaron Lau"
    },
    {
      source: require("./assets/photos/photo-12.jpeg"),
      artist: "Amogh Manjunath"
    },
    {
      source: require("./assets/photos/photo-5.jpeg"),
      artist: "Ian Schneider"
    },
    {
      source: require("./assets/photos/photo-6.jpeg"),
      artist: "Tim Foster"
    },
    {
      source: require("./assets/photos/photo-7.jpeg"),
      artist: "Amogh Manjunath"
    },
    {
      source: require("./assets/photos/photo-8.jpeg"),
      artist: "Brandon Nelson"
    },
    {
      source: require("./assets/photos/photo-1.jpeg"),
      artist: "Joseph Barrientos"
    },
    {
      source: require("./assets/photos/photo-2.jpeg"),
      artist: "Amogh Manjunath"
    },
    {
      source: require("./assets/photos/photo-3.jpeg"),
      artist: "Chris Leipelt"
    },
    {
      source: require("./assets/photos/photo-4.png"),
      artist: "Joshua Sortino"
    }
  ]
};

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <ScrollView>
          <Header />
          <Container data={images.arr1} />
          <Container data={images.arr2} title="Popular" type="normal" />
          <Container data={images.arr3} title="Awesome Artists" type="circle" />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
