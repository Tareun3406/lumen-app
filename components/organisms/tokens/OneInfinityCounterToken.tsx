import {XStack} from "tamagui";
import TokenCounterButtonMaxInfinity from "@/components/atom/TokenCounterButtonMaxInfinity";
import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import TokenToggleImg from "@/components/mole/TokenToggleImg";
import {useEffect} from "react";
import styleSheet from "@/constants/styleSheet";
import {useAppSelector} from "@/hooks/storeHooks";
import {selectSettings} from "@/store/slices/settingsSlice";

export default function OneInfinityCounterToken(props: IActionProps) {
  const { player } = props;
  const [ token ] = player.character.tokens;
  const { setTokenToggle } = usePlayerAction(props);
  const { flipPanel } = useAppSelector(selectSettings);

  useEffect(() => {
    setTokenToggle({index: 0, value: token.count >= token.toggleCount})
  }, [token.count, token.toggleCount])

  return (
    <XStack gap={"$1.5"} style={!props.player.isFirst && flipPanel?[styleSheet.flexReverse]:[]}>
      <TokenToggleImg token={token} size={116}/>
      <TokenCounterButtonMaxInfinity tokenIndex={0} player={player} />
    </XStack>
  )
}