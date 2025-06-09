import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import {Button, XStack, YGroup} from "tamagui";
import TokenToggleImg from "@/components/mole/TokenToggleImg";
import {useMemo} from "react";
import {TouchableOpacity} from "react-native";
import styleSheet from "@/constants/styleSheet";

export default function LitaTokens(props: IActionProps) {
  const { player } = props;
  const { character } = player;
  const [region ,guardian, assassin, paladin, lumen] = character.tokens
  const { changeToggle, setTokenToggleAsList } = usePlayerAction(props);

  const handleToggle = (index: number) => {
    if (character.tokens[index].toggle) {
      changeToggle(index);
      return;
    }
    setTokenToggleAsList({1: index === 1, 2: index === 2, 3: index === 3});
  }

  const handleActiveLumen = () => {
    changeToggle(4);
  }

  const activatedToken = useMemo(() => {
    if (lumen.toggle) {
      return region
    }

    return [guardian, assassin, paladin].find((token)=> token.toggle) ?? region
  }, [region, guardian, assassin, paladin, lumen])
  return (
    <XStack>
      <TouchableOpacity onPress={() => changeToggle(0)} activeOpacity={1}>
        <TokenToggleImg token={ activatedToken } size={116} toggle={region.toggle}/>
      </TouchableOpacity>

      <YGroup>
        <Button onPress={() => handleToggle(1)}>가디언</Button>
        <Button onPress={() => handleToggle(2)}>어쌔신</Button>
        <Button onPress={() => handleToggle(3)}>팔라딘</Button>
      </YGroup>

      <XStack style={styleSheet.centeredContainer}>
        <TouchableOpacity onPress={handleActiveLumen} disabled={player.currentHp > 1000} activeOpacity={1}>
          <TokenToggleImg token={lumen} size={80} />
        </TouchableOpacity>
      </XStack>
    </XStack>
  )
}