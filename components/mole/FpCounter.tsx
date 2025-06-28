import {Button, styled, YStack} from "tamagui";
import styleSheet from "@/constants/styleSheet";
import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import {useMemo} from "react";
import {fpCounterStyle} from "@/constants/mediaQueryStyle";
import {Minus, Plus} from "@tamagui/lucide-icons";


export default function FpCounter(props: IActionProps) {
  const { increaseFp, decreaseFp, resetFp} = usePlayerAction(props);
  const fp = props.player.fp

  const ResponsiveButton = styled(Button, fpCounterStyle.stepperButton)

  const ResponsiveCountButton = styled(Button, fpCounterStyle.countButton)

  const countBackgroundColor = useMemo(() => {
    if (fp < 0) {
      return "$red9"
    }
    if (fp > 0) {
      return "$green9"
    }
    return "$black9"
  }, [fp])

  return (
    <YStack style={styleSheet.centeredContainer}>
      <ResponsiveButton onPress={() => increaseFp(1)} // @ts-ignore
                        backgroundColor={"transparent"}
                        size={"$3"}
                        borderRadius={"$20"}
      >
        <Plus/>
      </ResponsiveButton>

      <ResponsiveCountButton onPress={() => resetFp()}// @ts-ignore
                             backgroundColor={countBackgroundColor}
                             color={"white"}
                             fontSize={"$6"}
                             fontWeight={"700"}
      >
        {fp.toString()}
      </ResponsiveCountButton>

      <ResponsiveButton onPress={() => decreaseFp(1)} // @ts-ignore
                        backgroundColor={"transparent"}
                        size={"$3"}
                        borderRadius={"$20"}><Minus/></ResponsiveButton>
    </YStack>
  )
}