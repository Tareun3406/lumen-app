import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import {selectSettings} from "@/store/slices/settingsSlice";
import {useAppSelector} from "@/hooks/storeHooks";
import {Button, Image, View, XStack, YGroup} from "tamagui";
import {useMemo} from "react";

export default function SetzTokens(props: IActionProps) {
  const { player } = props;
  const { character } = player;
  const { tokens } = character;
  const { setTokenToggleAsList, changeToggle } = usePlayerAction(props);
  const { flipPanel } = useAppSelector(selectSettings);

  const handleToggle = (index: number) => {
    if (tokens[index].toggle) {
      changeToggle(index);
      return;
    }
    setTokenToggleAsList({0: false, 1: index === 1, 2: index === 2});
  }

  const token = useMemo(() => {
    return tokens.find((token) => token.toggle) ?? tokens[0]
  }, [tokens])

  return (
    <XStack>
      <Image
        source={token.img}
        objectFit={"contain"}
        height={116}
        width={116}
      />
      <YGroup>
        <Button onPress={() => handleToggle(1)}>신속</Button>
        <Button onPress={() => handleToggle(2)}>정확</Button>
      </YGroup>
      <View width={"$11"}>
        {token.description}
      </View>
    </XStack>
  )
}


