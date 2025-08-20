import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import {Button, styled, XStack, YStack} from "tamagui";
import styleSheet from "@/constants/styleSheet";
import {useMemo} from "react";
import {useAppSelector} from "@/hooks/storeHooks";
import {selectSettings} from "@/store/slices/settingsSlice";
import { damageButtonPanelStyle } from "@/constants/mediaQueryStyle";
import { useWindowDimensions } from 'react-native';

export default function DamageButtonPanel(props: IActionProps) {
  const { damageToHp, healToHp } = usePlayerAction(props);
  const { flipPanel } = useAppSelector(selectSettings);
  const { width, height } = useWindowDimensions();
  const aspectRatio = width / height;
  const fontWeight = "700"

  const ResponsiveButton = styled(Button, damageButtonPanelStyle.button);
  const ResponsiveXStack = styled(XStack, damageButtonPanelStyle.xStack);
  const ResponsiveYStack = styled(YStack, damageButtonPanelStyle.yStack);

  const stackStyle = useMemo(() => {
    if (flipPanel && !props.player.isFirst) {
      return [styleSheet.flexSpaceAround, styleSheet.flexReverse]
    }
    return [styleSheet.flexSpaceAround]
  }, [flipPanel, props.player.isFirst])

  const ResponsiveButtonStacks = useMemo(() => {
    if (aspectRatio > 1.8) {
      return (
        <>
          <ResponsiveXStack style={stackStyle}>
            <ResponsiveButton fontWeight={fontWeight} onPress={() => damageToHp(700)} theme={"red"}>-700</ResponsiveButton>
            <ResponsiveButton fontWeight={fontWeight} onPress={() => healToHp(100)} theme={"green"}>+100</ResponsiveButton>
            <ResponsiveButton fontWeight={fontWeight} onPress={() => healToHp(200)} theme={"green"}>+200</ResponsiveButton>
          </ResponsiveXStack>
        </>
      )
    } else {
      return (
        (
          <>
            <ResponsiveXStack style={stackStyle}>
              <ResponsiveButton fontWeight={fontWeight} onPress={() => damageToHp(700)} theme={"red"}>-700</ResponsiveButton>
              <ResponsiveButton fontWeight={fontWeight} onPress={() => damageToHp(800)} theme={"red"}>-800</ResponsiveButton>
              <ResponsiveButton fontWeight={fontWeight} onPress={() => damageToHp(900)} theme={"red"}>-900</ResponsiveButton>
            </ResponsiveXStack>
            <ResponsiveXStack style={stackStyle}>
              <ResponsiveButton fontWeight={fontWeight} onPress={() => healToHp(100)} theme={"green"}>+100</ResponsiveButton>
              <ResponsiveButton fontWeight={fontWeight} onPress={() => healToHp(200)} theme={"green"}>+200</ResponsiveButton>
              <ResponsiveButton fontWeight={fontWeight} onPress={() => healToHp(200)} theme={"green"}>+400</ResponsiveButton>
            </ResponsiveXStack>
          </>
        )
      )
    }
  }, [ResponsiveButton, ResponsiveXStack, aspectRatio, damageToHp, healToHp, stackStyle]);


  return (
    <ResponsiveYStack style={styleSheet.centeredContainer}>
      <ResponsiveXStack style={stackStyle}>
        <ResponsiveButton fontWeight={fontWeight} onPress={() => damageToHp(100)} theme={"red"}>-100</ResponsiveButton>
        <ResponsiveButton fontWeight={fontWeight} onPress={() => damageToHp(200)} theme={"red"}>-200</ResponsiveButton>
        <ResponsiveButton fontWeight={fontWeight} onPress={() => damageToHp(300)} theme={"red"}>-300</ResponsiveButton>
      </ResponsiveXStack>
      <ResponsiveXStack style={stackStyle}>
        <ResponsiveButton fontWeight={fontWeight} onPress={() => damageToHp(400)} theme={"red"}>-400</ResponsiveButton>
        <ResponsiveButton fontWeight={fontWeight} onPress={() => damageToHp(500)} theme={"red"}>-500</ResponsiveButton>
        <ResponsiveButton fontWeight={fontWeight} onPress={() => damageToHp(600)} theme={"red"}>-600</ResponsiveButton>
      </ResponsiveXStack>
      {ResponsiveButtonStacks}
    </ResponsiveYStack>
  )
}