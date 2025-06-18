import {Button, styled, YStack} from "tamagui";
import styleSheet from "@/constants/styleSheet";
import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import {useMemo} from "react";
import {fpCounterStyle} from "@/constants/mediaQueryStyle";


export default function FpCounter(props: IActionProps) {
  const { increaseFp, decreaseFp, resetFp} = usePlayerAction(props);
  const fp = props.player.fp

  const ResponsiveButton = styled(Button, fpCounterStyle.stepperButton)

  const ResponsiveCountButton = styled(Button, fpCounterStyle.countButton)

  const countTheme = useMemo(() => {
    if (fp < 0) {
      return "red"
    }
    if (fp > 0) {
      return "green"
    }
    return null
  }, [fp])

  return (
    <YStack style={styleSheet.centeredContainer}>
      <ResponsiveButton onPress={() => increaseFp(1)} theme={"green"} // @ts-ignore
                        borderRadius={"$20"}>+</ResponsiveButton>

      <ResponsiveCountButton onPress={() => resetFp()} theme={countTheme}>
        {fp.toString()}
      </ResponsiveCountButton>

      <ResponsiveButton onPress={() => decreaseFp(1)} theme={"red"} // @ts-ignore
                        borderRadius={"$20"}>-</ResponsiveButton>
    </YStack>
  )
}