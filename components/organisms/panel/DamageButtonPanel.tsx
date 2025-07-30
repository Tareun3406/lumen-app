import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import {Button, styled, XStack, YStack} from "tamagui";
import styleSheet from "@/constants/styleSheet";
import {useMemo} from "react";
import {useAppSelector} from "@/hooks/storeHooks";
import {selectSettings} from "@/store/slices/settingsSlice";
import { damageButtonPanelStyle } from "@/constants/mediaQueryStyle";

export default function DamageButtonPanel(props: IActionProps) {
  const { damageToHp, healToHp } = usePlayerAction(props);
  const { flipPanel } = useAppSelector(selectSettings);

  const ResponsiveButton = styled(Button, damageButtonPanelStyle.button);
  const ResponsiveXStack = styled(XStack, damageButtonPanelStyle.xStack);
  const ResponsiveYStack = styled(YStack, damageButtonPanelStyle.yStack);

  const stackStyle = useMemo(() => {
    if (flipPanel && !props.player.isFirst) {
      return [styleSheet.flexSpaceAround, styleSheet.flexReverse]
    }
    return [styleSheet.flexSpaceAround]
  }, [flipPanel])

  const fontWeight = "700"

  return (
    <ResponsiveYStack style={styleSheet.centeredContainer}>
      <ResponsiveXStack style={stackStyle}>
        <ResponsiveButton fontWeight={fontWeight} onPress={() => damageToHp(100)}>-100</ResponsiveButton>
        <ResponsiveButton fontWeight={fontWeight} onPress={() => damageToHp(200)}>-200</ResponsiveButton>
        <ResponsiveButton fontWeight={fontWeight} onPress={() => damageToHp(300)}>-300</ResponsiveButton>
      </ResponsiveXStack>
      <ResponsiveXStack style={stackStyle}>
        <ResponsiveButton fontWeight={fontWeight} onPress={() => damageToHp(400)}>-400</ResponsiveButton>
        <ResponsiveButton fontWeight={fontWeight} onPress={() => damageToHp(500)}>-500</ResponsiveButton>
        <ResponsiveButton fontWeight={fontWeight} onPress={() => damageToHp(600)}>-600</ResponsiveButton>
      </ResponsiveXStack>
      <ResponsiveXStack style={stackStyle}>
        <ResponsiveButton fontWeight={fontWeight} onPress={() => damageToHp(700)}>-700</ResponsiveButton>
        <ResponsiveButton fontWeight={fontWeight} onPress={() => healToHp(100)} theme={"green"}>+100</ResponsiveButton>
        <ResponsiveButton fontWeight={fontWeight} onPress={() => healToHp(200)} theme={"green"}>+200</ResponsiveButton>
      </ResponsiveXStack>
    </ResponsiveYStack>
  )
}