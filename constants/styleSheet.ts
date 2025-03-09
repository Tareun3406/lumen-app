import { StyleSheet } from "react-native";

const styleSheet = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "center",
  },
  flexSpaceAround: {
    justifyContent: "space-around",
    alignItems: "center",
  }
})

export default styleSheet;