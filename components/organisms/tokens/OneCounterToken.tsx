import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import {XStack} from "tamagui";
import {useEffect} from "react";
import TokenCounterButton from "@/components/atom/TokenCounterButton";
import TokenToggleImg from "@/components/mole/TokenToggleImg";
import styleSheet from "@/constants/styleSheet";
import {useAppSelector} from "@/hooks/storeHooks";
import {selectSettings} from "@/store/slices/settingsSlice";

export default function OneCounterToken(props: IActionProps) {
  const token = props.player.character.tokens[0];
  const { setTokenToggle } = usePlayerAction(props);
  const { flipPanel } = useAppSelector(selectSettings);

  useEffect(() => {
    const payload = {
      index: 0,
      value : token.count >= token.toggleCount
    }
    setTokenToggle(payload);
  }, [token]);

  return (
    <XStack gap={"$1.5"} style={!props.player.isFirst && flipPanel?[styleSheet.flexReverse]:[]}>
      <TokenToggleImg token={token} size={116} />
      <TokenCounterButton tokenIndex={0} player={props.player} />
    </XStack>
  )
}