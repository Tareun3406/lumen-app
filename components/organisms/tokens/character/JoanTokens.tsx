import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import {XStack} from "tamagui";
import TokenToggleImg from "@/components/mole/TokenToggleImg";
import TokenCounterButton from "@/components/mole/TokenCounterButton";
import {useEffect} from "react";
import styleSheet from "@/constants/styleSheet";
import {TouchableOpacity} from "react-native";
import {useAppSelector} from "@/hooks/storeHooks";
import {selectSettings} from "@/store/slices/settingsSlice";

export default function JoanTokens(props: IActionProps) {
  const { player } = props;
  const { character } = player;
  const [ coin, disasterOne ] = character.tokens;
  const { setTokenToggle, changeToggle } = usePlayerAction(props);
  const { flipPanel } = useAppSelector(selectSettings);

  useEffect(() => {
    setTokenToggle({ index: 0, value: coin.count >= coin.toggleCount})
  }, [coin.count, coin.toggleCount])

  return (
    <XStack gap={"$1"} style={!props.player.isFirst && flipPanel?[styleSheet.flexReverse]:[]}>
      <TokenToggleImg token={coin} size={116} />
      <TokenCounterButton tokenIndex={0} player={player} />
      <XStack>
        <TouchableOpacity onPress={() => changeToggle(1)}>
          <TokenToggleImg token={disasterOne} size={116} />
        </TouchableOpacity>
      </XStack>
    </XStack>
  )
}