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
        <TouchableOpacity onPress={() => damageToHp(100)}><Button width={"$8"}>-100</Button></TouchableOpacity>
        <TouchableOpacity onPress={() => damageToHp(200)}><Button width={"$8"}>-200</Button></TouchableOpacity>
        <TouchableOpacity onPress={() => damageToHp(300)}><Button width={"$8"}>-300</Button></TouchableOpacity>
      </XStack>
      <XStack style={styleSheet.flexSpaceAround} gap={"$5"}>
        <TouchableOpacity onPress={() => damageToHp(400)}><Button width={"$8"}>-400</Button></TouchableOpacity>
        <TouchableOpacity onPress={() => damageToHp(500)}><Button width={"$8"}>-500</Button></TouchableOpacity>
        <TouchableOpacity onPress={() => damageToHp(600)}><Button width={"$8"}>-600</Button></TouchableOpacity>
      </XStack>
      <XStack style={styleSheet.flexSpaceAround} gap={"$5"}>
        <TouchableOpacity onPress={() => damageToHp(700)}><Button width={"$8"}>-700</Button></TouchableOpacity>
        <TouchableOpacity onPress={() => damageToHp(1000)}><Button width={"$8"}>-1000</Button></TouchableOpacity>
        <TouchableOpacity onPress={() => healToHp(100)}><Button width={"$8"}>+100</Button></TouchableOpacity>
      </XStack>
    </YStack>
  )
}