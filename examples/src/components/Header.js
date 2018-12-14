import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CachedImage from "react-native-easy-cached-image";
import styles from "./styles/Header.style";
import { iOSUIKit } from "react-native-typography";

const profileImage = require("../../assets/profile.jpeg");

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View>
          <Text style={styles.date}>FRIDAY, 14 DECEMDER</Text>
          <Text style={iOSUIKit.largeTitleEmphasized}>For You</Text>
        </View>
        <TouchableOpacity>
          <CachedImage style={styles.avatar} source={profileImage} />
        </TouchableOpacity>
      </View>
    );
  }
}
