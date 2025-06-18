import {WithMediaProps} from "@tamagui/core";
import {ComponentProps} from "react";
import {Button, XStack, YStack} from "tamagui";

export const damageButtonPanelStyle = {
  button: {
    $xs: { size: "$2.5", width: "$6" },
    $sm: { size: "$3", width: "$7" },
    $md: { size: "$4", width: "$8" },
    $lg: { size: "$5", width: "$9" },
  } as WithMediaProps<ComponentProps<typeof Button>>,

  yStack: {
    $xs: {gap: "$2"},
    $sm: {gap: "$2"},
    $md: {gap: "$2"} ,
    $lg: {gap: "$3"}
  } as WithMediaProps<ComponentProps<typeof YStack>>,

  xStack: {
    $xs: { gap: "$2" },
    $sm: { gap: "$3" },
    $md: { gap: "$4" },
    $lg: { gap: "$5" },
  } as WithMediaProps<ComponentProps<typeof XStack>>,
}

export const fpCounterStyle = {
  stepperButton: {
    $xs: { size: "$1", width: "$1"},
    $sm: { size: "$2", width: "$2" },
    $md: { size: "$3", width: "$3" },
    $lg: { size: "$4", width: "$4.5" },
  } as WithMediaProps<ComponentProps<typeof Button>>,

  countButton: {
    $xs: { size: "$1.5", width: "$2"},
    $sm: { size: "$3", width: "$5" },
    $md: { size: "$4", width: "$6" },
    $lg: { size: "$5", width: "$7" },
  } as WithMediaProps<ComponentProps<typeof Button>>,
}