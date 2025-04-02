import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import {XStack} from "tamagui";
import TokenCounterButton from "@/components/atom/TokenCounterButton";
import TokenToggleImg from "@/components/mole/TokenToggleImg";
import {TouchableOpacity} from "react-native";
import {useEffect} from "react";
import styleSheet from "@/constants/styleSheet";

export default function RevTokens(props: IActionProps) {
  const { player } = props;
  const [darkToken, daggerToken] = player.character.tokens;
  const {changeToggle, setTokenToggle, setTokenCount} = usePlayerAction(props);

  const onClickDagger = () => {
    if(daggerToken.count < daggerToken.toggleCount) {
      return;
    }
    setTokenCount(1, 0);
  }

  useEffect(() => {
    setTokenToggle({index: 1, value: daggerToken.count >= daggerToken.toggleCount})
  }, [daggerToken, setTokenToggle]);

  return (
    <XStack gap={"$1.5"}>
      <TouchableOpacity activeOpacity={1} style={{position: "relative"}} onPress={() => changeToggle(0)}>
        <TokenToggleImg token={darkToken} size={116}/>
      </TouchableOpacity>

      <TokenCounterButton tokenIndex={1} player={props.player} />

      <XStack style={styleSheet.centeredContainer}>
        <TouchableOpacity activeOpacity={1} style={{position: "relative"}} onPress={onClickDagger}>
          <TokenToggleImg token={daggerToken} size={80}/>
        </TouchableOpacity>
      </XStack>
    </XStack>
  )
}