import React, { Component } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import CachedImage from "react-native-easy-cached-image";
import styles from "./styles/Container.style";
import { human, iOSColors } from "react-native-typography";

export default class Container extends Component {
  renderImageContainer(item) {
    const { type } = this.props;
    switch (type) {
      case "normal": {
        return (
          <View>
            <TouchableOpacity>
              <CachedImage
                style={styles.normalImageStyle}
                source={item.source}
              />
            </TouchableOpacity>
            <Text style={styles.textTitleStyle}>
              {item.artist || "Artist Name"}
            </Text>
            <Text style={styles.subtextTitleStyle}>{item.ig || "IG"}</Text>
          </View>
        );
      }
      case "circle": {
        return (
          <View>
            <TouchableOpacity
              style={{
                alignSelf: "center",
                justifyContent: "center"
              }}
            >
              <CachedImage
                style={{
                  height: 75,
                  width: 75,
                  borderRadius: 37,
                  alignSelf: "center",
                  justifyContent: "center"
                }}
                source={item.source}
              />
            </TouchableOpacity>
            <Text
              style={{
                ...human.footnoteObject,
                marginTop: 5,
                textAlign: "center",
                alignSelf: "center",
                justifyContent: "center"
              }}
            >
              {item.artist || "Artist Name"}
            </Text>
          </View>
        );
      }
      default: {
        return (
          <View>
            <TouchableOpacity>
              <View style={styles.imageContainer}>
                <CachedImage style={styles.imageStyle} source={item.source} />
              </View>
            </TouchableOpacity>
            <Text style={styles.textTitleStyle}>
              {item.artist || "Artist Name"}
            </Text>
            <Text style={styles.subtextTitleStyle}>{item.ig || "IG"}</Text>
          </View>
        );
      }
    }
  }

  render() {
    const { data, title, mainStyle, rightTitle, imageComponent } = this.props;

    return (
      <View
        style={
          mainStyle || {
            marginTop: 16,
            paddingTop: 16,
            backgroundColor: iOSColors.white
          }
        }
      >
        <View style={styles.titleBar}>
          <Text style={styles.title}>{title || "Recently Played"}</Text>
          <TouchableOpacity>
            <Text style={styles.rightTitle}>{rightTitle || "See All"}</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal contentContainerStyle={styles.scrollViewStyle}>
          {data.map((item, index) => (
            <View
              key={index}
              style={index < data.length - 1 && styles.container}
            >
              {this.renderImageContainer(item)}
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
