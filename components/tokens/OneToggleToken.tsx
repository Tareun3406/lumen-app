import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import {Image, View} from "tamagui";
import {TouchableOpacity} from "react-native";
import TokenToolTip from "@/components/atom/TokenToolTip";

export default function OneToggleToken(props: IActionProps) {
  const { player } = props;
  const { character } = player;
  const { changeToggle } = usePlayerAction(props);
  const token = character.tokens[0];

  return (
    <TokenToolTip descriptions={token.description}>
      <TouchableOpacity activeOpacity={1} style={{position: "relative"}} onPress={() => changeToggle(0)}>
        <Image
          source={token.img}
          objectFit={"contain"}
          height={116}
          width={116}
        />
        <View style={{
          position: "absolute",
          top: 0,
          left: 0,
          background: "black",
          width: "100%",
          height: "100%",
          opacity: token.toggle ? 0 : 0.6
        }}/>
      </TouchableOpacity>
    </TokenToolTip>
  )
}