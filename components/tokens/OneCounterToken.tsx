import {IActionProps} from "@/hooks/actionHooks";
import TokenToolTip from "@/components/atom/TokenToolTip";
import {Image, View, XStack} from "tamagui";
import {useMemo} from "react";
import TokenCounterButton from "@/components/atom/TokenCounterButton";

export default function OneCounterToken(props: IActionProps) {
  const token = props.player.character.tokens[0];

  const getCounterToggle = useMemo(() => {
    if (token.count && token.toggleCount)
      return token.count >= token?.toggleCount;
  }, [token]);

  return (
    <XStack gap={"$1.5"}>
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
      <TokenCounterButton tokenIndex={0} player={props.player} />
    </XStack>
  )
}