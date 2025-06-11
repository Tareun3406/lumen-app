import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import {Button, styled, XStack, YStack} from "tamagui";
import styleSheet from "@/constants/styleSheet";
import {useMemo} from "react";
import {useAppSelector} from "@/hooks/storeHooks";
import {selectSettings} from "@/store/slices/settingsSlice";

export default function DamageButtonPanel(props: IActionProps) {
  const { damageToHp, healToHp } = usePlayerAction(props);
  const { flipPanel } = useAppSelector(selectSettings);

  const ResponsiveButton = styled(Button, {
    $sm: { size: "$3", width: "$7" },
    $md: { size: "$4", width: "$8" },
    $lg: { size: "$5", width: "$9" },
  })

  const ResponsiveXStack = styled(XStack, {
    $sm: { gap: "$3" },
    $md: { gap: "$4" },
    $lg: { gap: "$5" },
  })

  const stackStyle = useMemo(() => {
    if (flipPanel && !props.player.isFirst) {
      return [styleSheet.flexSpaceAround, styleSheet.flexReverse]
    }
    return [styleSheet.flexSpaceAround]
  }, [flipPanel])

  return (
    <YStack style={styleSheet.centeredContainer}  $sm={{gap: "$2"}} $md={{gap: "$2"}} $lg={{gap: "$3"}}>
      <ResponsiveXStack style={stackStyle}>
        <ResponsiveButton onPress={() => damageToHp(100)}>-100</ResponsiveButton>
        <ResponsiveButton onPress={() => damageToHp(200)}>-200</ResponsiveButton>
        <ResponsiveButton onPress={() => damageToHp(300)}>-300</ResponsiveButton>
      </ResponsiveXStack>
      <ResponsiveXStack style={stackStyle}>
        <ResponsiveButton onPress={() => damageToHp(400)}>-400</ResponsiveButton>
        <ResponsiveButton onPress={() => damageToHp(500)}>-500</ResponsiveButton>
        <ResponsiveButton onPress={() => damageToHp(600)}>-600</ResponsiveButton>
      </ResponsiveXStack>
      <ResponsiveXStack style={stackStyle}>
        <ResponsiveButton onPress={() => damageToHp(700)}>-700</ResponsiveButton>
        <ResponsiveButton onPress={() => damageToHp(1000)} theme={"red"}>-1000</ResponsiveButton>
        <ResponsiveButton onPress={() => healToHp(100)} theme={"green"}>+100</ResponsiveButton>
      </ResponsiveXStack>
    </YStack>
  )
}