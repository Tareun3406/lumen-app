import { StyleSheet } from "react-native";

const styleSheet = StyleSheet.create({
  centeredContainer: {
    // flex: 1,
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
  },
  background: {
    flex: 1,             // 부모 View의 공간을 전부 차지
    width: "100%",
    height: "100%",
  },
  imageContain: {
    resizeMode: "contain", // 기본값 = 화면에 빈 공간 없이 꽉 채우며, 넘치는 부분은 잘라냄, contain = 이미지 전체가 잘리지 않고 표시되도록 사이즈 조절
  },
  backgroundShadow: {
    position: 'absolute', top: 0
  },
  flexedContainer: {
    flex: 1
  },
  flexReverse: {
    flexDirection: "row-reverse"
  }
})

export default styleSheet;