import {XStack} from "tamagui";
import TokenCounterButtonMaxInfinity from "@/components/atom/TokenCounterButtonMaxInfinity";
import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import TokenToggleImg from "@/components/mole/TokenToggleImg";
import {useEffect} from "react";

export default function OneInfinityCounterToken(props: IActionProps) {
  const { player } = props;
  const [ token ] = player.character.tokens;
  const { setTokenToggle } = usePlayerAction(props);

  useEffect(() => {
    setTokenToggle({index: 0, value: token.count >= token.toggleCount})
  }, [token.count, token.toggleCount])

  return (
    <XStack gap={"$1.5"}>
      <TokenToggleImg token={token} size={116}/>
      <TokenCounterButtonMaxInfinity tokenIndex={0} player={player} />
    </XStack>
  )
}