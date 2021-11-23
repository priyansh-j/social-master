import { StyleSheet, Dimensions, Platform } from "react-native";
let deviceWidth = Dimensions.get("window").width;
let deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1
  },
  mapArea: {
    // ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: deviceHeight * 0.5
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  cardStyle: {
    marginTop: "auto"
  },
  rowElements: { flexDirection: "row" },
  touchableOpacityFilter: {
    alignItems: "center",
    backgroundColor: "#28DDFB",
    padding: 9,
    margin: 8,
    borderRadius: 50
  },
  touchableText: {
    color: "white",
    fontSize: 15
  }
});
