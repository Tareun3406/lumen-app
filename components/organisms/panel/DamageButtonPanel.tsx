import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import {Button, styled, XStack, YStack} from "tamagui";
import styleSheet from "@/constants/styleSheet";

export default function DamageButtonPanel(props: IActionProps) {
  const { damageToHp, healToHp } = usePlayerAction(props);

  const ResponsiveButton = styled(Button, {
    $sm: { size: "$3", width: "$7" },
    $md: { size: "$4", width: "$8" },
    $lg: { size: "$5", width: "$9" },
  })

  const ResponsiveXStack = styled(XStack, {
    $sm: { gap: "$3" },
    $md: { gap: "$5" },
    $lg: { gap: "$7" },
  })

  return (
    <YStack style={styleSheet.centeredContainer}  $sm={{gap: "$2"}} $md={{gap: "$2"}} $lg={{gap: "$4"}}>
      <ResponsiveXStack style={styleSheet.flexSpaceAround}>
        <ResponsiveButton onPress={() => damageToHp(100)}>-100</ResponsiveButton>
        <ResponsiveButton onPress={() => damageToHp(200)}>-200</ResponsiveButton>
        <ResponsiveButton onPress={() => damageToHp(300)}>-300</ResponsiveButton>
      </ResponsiveXStack>
      <ResponsiveXStack style={styleSheet.flexSpaceAround}>
        <ResponsiveButton onPress={() => damageToHp(400)}>-400</ResponsiveButton>
        <ResponsiveButton onPress={() => damageToHp(500)}>-500</ResponsiveButton>
        <ResponsiveButton onPress={() => damageToHp(600)}>-600</ResponsiveButton>
      </ResponsiveXStack>
      <ResponsiveXStack style={styleSheet.flexSpaceAround}>
        <ResponsiveButton onPress={() => damageToHp(700)}>-700</ResponsiveButton>
        <ResponsiveButton onPress={() => damageToHp(1000)}>-1000</ResponsiveButton>
        <ResponsiveButton onPress={() => healToHp(100)}>+100</ResponsiveButton>
      </ResponsiveXStack>
    </YStack>
  )
}