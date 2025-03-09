import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import {Button, XStack, YStack} from "tamagui";
import {TouchableOpacity} from "react-native";
import styleSheet from "@/constants/styleSheet";

export default function DamageButtonPanel(props: IActionProps) {
  const { damageToHp, healToHp } = usePlayerAction(props);

  return (
    <YStack style={styleSheet.centeredContainer}>
      <XStack style={styleSheet.flexSpaceAround}>
        <TouchableOpacity onPress={() => damageToHp(100)}><Button>-100</Button></TouchableOpacity>
        <TouchableOpacity onPress={() => damageToHp(200)}><Button>-200</Button></TouchableOpacity>
        <TouchableOpacity onPress={() => damageToHp(300)}><Button>-300</Button></TouchableOpacity>
      </XStack>
      <XStack style={styleSheet.flexSpaceAround}>
        <TouchableOpacity onPress={() => damageToHp(400)}><Button>-400</Button></TouchableOpacity>
        <TouchableOpacity onPress={() => damageToHp(500)}><Button>-500</Button></TouchableOpacity>
        <TouchableOpacity onPress={() => damageToHp(600)}><Button>-600</Button></TouchableOpacity>
      </XStack>
      <XStack style={styleSheet.flexSpaceAround}>
        <TouchableOpacity onPress={() => damageToHp(700)}><Button>-700</Button></TouchableOpacity>
        <TouchableOpacity onPress={() => damageToHp(1000)}><Button>-1000</Button></TouchableOpacity>
        <TouchableOpacity onPress={() => healToHp(100)}><Button>+100</Button></TouchableOpacity>
      </XStack>
    </YStack>
  )
}