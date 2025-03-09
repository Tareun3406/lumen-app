import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import TokenToolTip from "@/components/atom/TokenToolTip";
import {TouchableOpacity} from "react-native";
import {Button, Image, View, XStack, YStack} from "tamagui";
import {useMemo} from "react";
import styleSheet from "@/constants/styleSheet";

export default function OneCounterToken(props: IActionProps) {
  const token = props.player.character.tokens[0];
  const { addToken, removeToken, setTokenCount } = usePlayerAction(props);

  const getCounterToggle = useMemo(() => {
    if (token.count && token.toggleCount)
      return token.count >= token?.toggleCount;
  }, [token]);

  const counterButton = (
    <YStack style={styleSheet.centeredContainer}>
      <TouchableOpacity onPress={() => addToken(0)}>
        <Button size={"$3"}>+</Button>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTokenCount(0, 0)}>
        <Button size={"$3"}>{token.count?.toString()}/{token.maxCount?.toString()}</Button>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => removeToken(0)}>
        <Button size={"$3"}>-</Button>
      </TouchableOpacity>
    </YStack>
  )

  return (
    <XStack>
      <TokenToolTip descriptions={token.description}>
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
          opacity: getCounterToggle ? 0 : 0.6
        }}/>
      </TokenToolTip>
      {counterButton}
    </XStack>
  )
}