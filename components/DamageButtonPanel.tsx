import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import {Button, styled, XStack, YStack} from "tamagui";
import {TouchableOpacity} from "react-native";
import styleSheet from "@/constants/styleSheet";

export default function DamageButtonPanel(props: IActionProps) {
  const { damageToHp, healToHp } = usePlayerAction(props);

  const buttonStyle = styled(Button, {
    width: "$8",
  })

  return (
    <YStack style={styleSheet.centeredContainer} gap={"$2"}>
      <XStack style={styleSheet.flexSpaceAround} gap={"$5"}>
        <Button width={"$8"} onPress={() => damageToHp(100)}>-100</Button>
        <Button width={"$8"} onPress={() => damageToHp(200)}>-200</Button>
        <Button width={"$8"} onPress={() => damageToHp(300)}>-300</Button>
      </XStack>
      <XStack style={styleSheet.flexSpaceAround} gap={"$5"}>
        <Button width={"$8"} onPress={() => damageToHp(400)}>-400</Button>
        <Button width={"$8"} onPress={() => damageToHp(500)}>-500</Button>
        <Button width={"$8"} onPress={() => damageToHp(600)}>-600</Button>
      </XStack>
      <XStack style={styleSheet.flexSpaceAround} gap={"$5"}>
        <Button width={"$8"} onPress={() => damageToHp(700)}>-700</Button>
        <Button width={"$8"} onPress={() => damageToHp(1000)}>-1000</Button>
        <Button width={"$8"} onPress={() => healToHp(100)}>+100</Button>
      </XStack>
    </YStack>
  )
}