import {CharacterName, TokenName} from "@/constants/character";
import { ImageSourcePropType } from "react-native";

export interface ICharacterSource {
    portrait: ImageSourcePropType,
    standingLeft: ImageSourcePropType,
    standingRight: ImageSourcePropType,
    nameTagLeft: ImageSourcePropType,
    nameTagRight: ImageSourcePropType,
}

export const characterImgSources: {
    [key in CharacterName] : ICharacterSource
} = {
    "선택없음" : {
        portrait: require("@/assets/images/portraits/root.png"),
        standingLeft: require("@/assets/images/standing/none-left.png"),
        standingRight: require("@/assets/images/standing/none-right.png"),
        nameTagLeft: require("@/assets/images/name/none-left.png"),
        nameTagRight: require("@/assets/images/name/none-right.png")
    },
    "세츠메이" : {
        portrait: require("@/assets/images/portraits/root.png"),
        standingLeft: require("@/assets/images/standing/root-left.png"),
        standingRight: require("@/assets/images/standing/root-right.png"),
        nameTagLeft: require("@/assets/images/name/root-left.png"),
        nameTagRight: require("@/assets/images/name/root-right.png")
    },
    "루트": {
        portrait: require("@/assets/images/portraits/root.png"),
        standingLeft:  require("@/assets/images/standing/root-left.png"),
        standingRight: require("@/assets/images/standing/root-right.png"),
        nameTagLeft: require("@/assets/images/name/root-left.png"),
        nameTagRight: require("@/assets/images/name/root-right.png")
    },
    "울프": {
        portrait: require("@/assets/images/portraits/wolf.png"),
        standingLeft: require("@/assets/images/standing/wolf-left.png"),
        standingRight: require("@/assets/images/standing/wolf-right.png"),
        nameTagLeft: require("@/assets/images/name/wolf-left.png"),
        nameTagRight: require("@/assets/images/name/wolf-right.png")
    },
    "비올라": {
        portrait: require("@/assets/images/portraits/viola.png"),
        standingLeft:  require("@/assets/images/standing/viola-left.png"),
        standingRight: require("@/assets/images/standing/viola-right.png"),
        nameTagLeft: require("@/assets/images/name/viola-left.png"),
        nameTagRight: require("@/assets/images/name/viola-right.png")
    },
    "델피": {
        portrait: require("@/assets/images/portraits/delphi.png"),
        standingLeft: require("@/assets/images/standing/delphi-left.png"),
        standingRight: require("@/assets/images/standing/delphi-right.png"),
        nameTagLeft: require("@/assets/images/name/delphi-left.png"),
        nameTagRight: require("@/assets/images/name/delphi-right.png")
    },
    "키스": {
        portrait: require("@/assets/images/portraits/kiss.png"),
        standingLeft: require("@/assets/images/standing/kiss-left.png"),
        standingRight:require("@/assets/images/standing/kiss-right.png"),
        nameTagLeft: require("@/assets/images/name/kiss-left.png"),
        nameTagRight: require("@/assets/images/name/kiss-right.png")
    },
    "니아": {
        portrait: require("@/assets/images/portraits/nia.png"),
        standingLeft: require("@/assets/images/standing/nia-left.png"),
        standingRight: require("@/assets/images/standing/nia-right.png"),
        nameTagLeft: require("@/assets/images/name/nia-left.png"),
        nameTagRight: require("@/assets/images/name/nia-right.png")
    },
    "레브": {
        portrait: require("@/assets/images/portraits/rev.png"),
        standingLeft: require("@/assets/images/standing/rev-left.png"),
        standingRight: require("@/assets/images/standing/rev-right.png"),
        nameTagLeft: require("@/assets/images/name/rev-left.png"),
        nameTagRight: require("@/assets/images/name/rev-right.png")
    },
    "타오": {
        portrait: require("@/assets/images/portraits/tao.png"),
        standingLeft: require("@/assets/images/standing/tao-left.png"),
        standingRight: require("@/assets/images/standing/tao-right.png"),
        nameTagLeft: require("@/assets/images/name/tao-left.png"),
        nameTagRight: require("@/assets/images/name/tao-right.png")
    },
    "리타": {
        portrait: require("@/assets/images/portraits/lita.png"),
        standingLeft: require("@/assets/images/standing/lita-left.png"),
        standingRight: require("@/assets/images/standing/lita-right.png"),
        nameTagLeft: require("@/assets/images/name/lita-left.png"),
        nameTagRight: require("@/assets/images/name/lita-right.png")
    },
    "린": {
        portrait: require("@/assets/images/portraits/lin.png"),
        standingLeft: require("@/assets/images/standing/lin-left.png"),
        standingRight: require("@/assets/images/standing/lin-right.png"),
        nameTagLeft: require("@/assets/images/name/lin-left.png"),
        nameTagRight: require("@/assets/images/name/lin-right.png")
    },
    "요한": {
        portrait: require("@/assets/images/portraits/joan.png"),
        standingLeft: require("@/assets/images/standing/joan-left.png"),
        standingRight: require("@/assets/images/standing/joan-right.png"),
        nameTagLeft: require("@/assets/images/name/joan-left.png"),
        nameTagRight: require("@/assets/images/name/joan-right.png")
    },
    "이제벨": {
        portrait: require("@/assets/images/portraits/jezabel.png"),
        standingLeft: require("@/assets/images/standing/jezebel-left.png"),
        standingRight: require("@/assets/images/standing/jezebel-right.png"),
        nameTagLeft: require("@/assets/images/name/jezebel-left.png"),
        nameTagRight: require("@/assets/images/name/jezebel-right.png")
    },
}

export const tokenImgSources: {
    [key in TokenName] : ImageSourcePropType
} = {
    "훈련 부대": require("@/assets/images/tokens/setz.png"),
    "신속": require("@/assets/images/tokens/fast.png"),
    "정확": require("@/assets/images/tokens/accurate.png"),
    "차지": require("@/assets/images/tokens/root.png"),
    "하울링": require("@/assets/images/tokens/wolf.png"),
    "은연": require("@/assets/images/tokens/viola.png"),
    "다운 스탠스": require("@/assets/images/tokens/delphi.png"),
    "예고": require("@/assets/images/tokens/kiss.png"),
    "오버리밋": require("@/assets/images/tokens/nia.png"),
    "암야": require("@/assets/images/tokens/rev.png"),
    "단검": require("@/assets/images/tokens/dagger.png"),
    "조화": require("@/assets/images/tokens/harmony.png"),
    "음": require("@/assets/images/tokens/yin.png"),
    "양": require("@/assets/images/tokens/yang.png"),
    "레기온": require("@/assets/images/tokens/lita.png"),
    "축복-가디언": require("@/assets/images/tokens/guardian.png"),
    "축복-어쌔신": require("@/assets/images/tokens/assassin.png"),
    "축복-팔라딘": require("@/assets/images/tokens/paladin.png"),
    "빛의 루멘": require("@/assets/images/tokens/lita-effect.png"),
    "불씨": require("@/assets/images/tokens/ember.png"),
    "예지": require("@/assets/images/tokens/coin.png"),
    "디제스터 원": require("@/assets/images/tokens/disaster-one.png"),
    "거미": require("@/assets/images/tokens/spider.png"),
}

export const miscImgSources: {
    background : ImageSourcePropType,
    backgroundShadowBottom: ImageSourcePropType,
    backgroundShadowTop: ImageSourcePropType,
} = {
    background: require("@/assets/images/background.png"),
    backgroundShadowBottom: require("@/assets/images/backgroundShadow-bottom.png"),
    backgroundShadowTop: require("@/assets/images/backgroundShadow-top.png")
}