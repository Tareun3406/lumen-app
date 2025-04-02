import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import {XStack} from "tamagui";
import TokenToggleImg from "@/components/mole/TokenToggleImg";
import TokenCounterButton from "@/components/atom/TokenCounterButton";
import {useEffect} from "react";
import styleSheet from "@/constants/styleSheet";
import {TouchableOpacity} from "react-native";

export default function JoanTokens(props: IActionProps) {
  const { player } = props;
  const { character } = player;
  const [ coin, disasterOne ] = character.tokens;
  const { setTokenToggle, changeToggle } = usePlayerAction(props);

  useEffect(() => {
    setTokenToggle({ index: 0, value: coin.count >= coin.toggleCount})
  }, [coin.count, coin.toggleCount, setTokenToggle])

  return (
    <XStack>
      <TokenToggleImg token={coin} size={116} />
      <TokenCounterButton tokenIndex={0} player={player} />
      <XStack style={styleSheet.centeredContainer} >
        <TouchableOpacity onPress={() => changeToggle(1)}>
          <TokenToggleImg token={disasterOne} size={80} />
        </TouchableOpacity>
      </XStack>
      
    </XStack>
  )
}