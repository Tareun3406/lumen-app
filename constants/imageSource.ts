import {CharacterName} from "@/constants/character";
import {ImageRequireSource, ImageURISource} from "react-native";


const hostname = process.env.EXPO_PUBLIC_HOSTNAME

export const characterSources: {
    [key in CharacterName] : ICharacterSource
} = {
    "선택없음" : {
        portrait: {
            urlSource: {uri:hostname + ''},
            localSource: require("../assets/images/portraits/root.png")
        },
        standingLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/standing/none-left.png")
        },
        standingRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/standing/none-right.png")
        },
        nameTagLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/none-left.png")
        },
        nameTagRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/none-right.png")
        }
    },
    "세츠메이" : {
        portrait: {
            urlSource: {uri:hostname + ''},
            localSource: require("../assets/images/portraits/root.png")
        },
        standingLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/standing/root-left.png")
        },
        standingRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/standing/root-right.png")
        },
        nameTagLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/root-left.png")
        },
        nameTagRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/root-right.png")
        }
    },
    "루트": {
        portrait: {
            urlSource: {uri:hostname + ''},
            localSource: require("../assets/images/portraits/root.png")
        },
        standingLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/standing/root-left.png")
        },
        standingRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/standing/root-right.png")
        },
        nameTagLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/root-left.png")
        },
        nameTagRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/root-right.png")
        }
    },
    "울프": {
        portrait: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/portraits/wolf.png")
        },
        standingLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/standing/wolf-left.png")
        },
        standingRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/standing/wolf-right.png")
        },
        nameTagLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/wolf-left.png")
        },
        nameTagRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/wolf-right.png")
        }
    },
    "비올라": {
        portrait: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/portraits/viola.png")
        },
        standingLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/standing/viola-left.png")
        },
        standingRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("@/assets/images/standing/viola-right.png")
        },
        nameTagLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/viola-left.png")
        },
        nameTagRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/viola-right.png")
        }
    },
    "델피": {
        portrait: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/portraits/delphi.png")
        },
        standingLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/standing/delphi-left.png")
        },
        standingRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/standing/delphi-right.png")
        },
        nameTagLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/delphi-left.png")
        },
        nameTagRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/delphi-right.png")
        }
    },
    "키스": {
        portrait: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/portraits/kiss.png")
        },
        standingLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/standing/kiss-left.png")
        },
        standingRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/standing/kiss-right.png")
        },
        nameTagLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/kiss-left.png")
        },
        nameTagRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/kiss-right.png")
        }
    },
    "니아": {
        portrait: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/portraits/nia.png")
        },
        standingLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/standing/nia-left.png")
        },
        standingRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/standing/nia-right.png")
        },
        nameTagLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/nia-left.png")
        },
        nameTagRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/nia-right.png")
        }
    },
    "레브": {
        portrait: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/portraits/rev.png")
        },
        standingLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/standing/rev-left.png")
        },
        standingRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/standing/rev-right.png")
        },
        nameTagLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/rev-left.png")
        },
        nameTagRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/rev-right.png")
        }
    },
    "타오": {
        portrait: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/portraits/tao.png")
        },
        standingLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/standing/tao-left.png")
        },
        standingRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/standing/tao-right.png")
        },
        nameTagLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/tao-left.png")
        },
        nameTagRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/tao-right.png")
        }
    },
    "리타": {
        portrait: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/portraits/lita.png")
        },
        standingLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/standing/lita-left.png")
        },
        standingRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/standing/lita-right.png")
        },
        nameTagLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/lita-left.png")
        },
        nameTagRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/lita-right.png")
        }
    },
    "린": {
        portrait: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/portraits/lin.png")
        },
        standingLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/standing/lin-left.png")
        },
        standingRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/standing/lin-right.png")
        },
        nameTagLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/lin-left.png")
        },
        nameTagRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/lin-right.png")
        }
    },
    "요한": {
        portrait: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/portraits/joan.png")
        },
        standingLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/standing/joan-left.png")
        },
        standingRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/standing/joan-right.png")
        },
        nameTagLeft: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/joan-left.png")
        },
        nameTagRight: {
            urlSource: {uri: hostname + ''},
            localSource: require("../assets/images/name/joan-right.png")
        }
    }
}

export interface ICharacterSource {
    portrait: IImageSource,
    standingLeft: IImageSource,
    standingRight: IImageSource,
    nameTagLeft: IImageSource,
    nameTagRight: IImageSource,
}

export interface IImageSource {
    urlSource: ImageURISource;
    localSource: ImageRequireSource;
}