import {Button, GetThemeValueForKey, styled, YStack} from "tamagui";
import styleSheet from "@/constants/styleSheet";
import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import {useMemo} from "react";


export default function FpCounter(props: IActionProps) {
  const { increaseFp, decreaseFp, resetFp} = usePlayerAction(props);
  const fp = props.player.fp

  const ResponsiveButton = styled(Button, {
    $sm: { size: "$2", width: "$2" },
    $md: { size: "$3", width: "$3" },
    $lg: { size: "$4", width: "$4.5" },
  })

  const ResponsiveCountButton = styled(Button, {
    $sm: { size: "$3", width: "$4.5" }, // @ts-ignore
    $md: { size: "$4", width: "$5.5" }, // @ts-ignore
    $lg: { size: "$5", width: "$6.5" },
  })

  const countTheme = useMemo(() => {
    if (fp < 0) {
      return "red"
    }
    if (fp > 0) {
      return "blue"
    }
    return null
  }, [fp])

  return (
    <YStack style={styleSheet.centeredContainer}>
      <ResponsiveButton onPress={() => increaseFp(1)} theme={"blue"} // @ts-ignore
                        borderRadius={"$20"}>+</ResponsiveButton>

      <ResponsiveCountButton onPress={() => resetFp()} theme={countTheme}>
        {fp.toString()}
      </ResponsiveCountButton>

      <ResponsiveButton onPress={() => decreaseFp(1)} theme={"red"} // @ts-ignore
                        borderRadius={"$20"}>-</ResponsiveButton>
    </YStack>
  )
}