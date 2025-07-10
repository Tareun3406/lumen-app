import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import {XStack} from "tamagui";
import TokenCounterButton from "@/components/mole/TokenCounterButton";
import TokenToggleImg from "@/components/mole/TokenToggleImg";
import {TouchableOpacity} from "react-native";
import {useEffect} from "react";
import styleSheet from "@/constants/styleSheet";
import {useAppSelector} from "@/hooks/storeHooks";
import {selectSettings} from "@/store/slices/settingsSlice";

export default function RevTokens(props: IActionProps) {
  const { player } = props;
  const [darkToken, daggerToken] = player.character.tokens;
  const {changeToggle, setTokenToggle, setTokenCount} = usePlayerAction(props);
  const { flipPanel } = useAppSelector(selectSettings);

  const onClickDagger = () => {
    if(daggerToken.count < daggerToken.toggleCount) {
      return;
    }
    setTokenCount(1, 0);
  }

  useEffect(() => {
    setTokenToggle({index: 1, value: daggerToken.count >= daggerToken.toggleCount})
  }, [daggerToken]);

  return (
    <XStack gap={"$1.5"} style={!props.player.isFirst && flipPanel?[styleSheet.flexReverse]:[]}>
      <TouchableOpacity activeOpacity={1} style={{position: "relative"}} onPress={() => changeToggle(0)}>
        <TokenToggleImg token={darkToken} size={"large"}/>
      </TouchableOpacity>

      <TokenCounterButton tokenIndex={1} player={props.player} />

      <XStack style={styleSheet.centeredContainer}>
        <TouchableOpacity activeOpacity={1} style={{position: "relative"}} onPress={onClickDagger}>
          <TokenToggleImg token={daggerToken} size={"medium"}/>
        </TouchableOpacity>
      </XStack>
    </XStack>
  )
}