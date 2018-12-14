import { Platform } from "react-native";
import {
  iOSColors,
  human,
  iOSUIKit,
  systemWeights
} from "react-native-typography";

export default {
  imageContainer: {
    ...Platform.select({
      ios: {
        shadowColor: "#505e80",
        shadowOffset: {
          width: 2,
          height: 3
        },
        shadowRadius: 3,
        shadowOpacity: 0.4
      },
      android: {
        elevation: 12
      }
    })
  },
  imageStyle: {
    borderRadius: 8,
    height: 110,
    width: 110
  },
  title: {
    ...human.title2Object,
    ...systemWeights.bold
  },
  recentlyPlayed: {
    marginTop: 25,
    paddingTop: 16,
    backgroundColor: iOSColors.white
  },
  titleBar: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  rightTitle: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: iOSColors.pink
  },
  scrollViewStyle: {
    marginTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 12
  },
  container: {
    marginRight: 8
  },
  normalImageStyle: {
    height: 160,
    width: 160,
    borderRadius: 6
  },
  textTitleStyle: {
    ...human.footnoteObject,
    marginTop: 5
  },
  subtextTitleStyle: {
    ...human.footnoteObject,
    color: iOSColors.gray
  }
};
