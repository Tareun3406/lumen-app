import {WithMediaProps} from "@tamagui/core";
import {ComponentProps} from "react";
import {Button, XStack, YStack} from "tamagui";

export const damageButtonPanelStyle = {
  button: {
    $xs: { size: "$2.5", width: "$6" },
    $sm: { size: "$3", width: "$7" },
    $md: { size: "$3", width: "$7", height: "$4"},
    $mdmw: { size: "$3", width: "$6", height: "$4" },
    $mdsw: { size: "$2", width: "$5", height: "$4" },
    $lg: { size: "$5", width: "$9" },
  } as WithMediaProps<ComponentProps<typeof Button>>,

  yStack: {
    $xs: {gap: "$2"},
    $sm: {gap: "$2"},
    $md: {gap: "$3"} ,
    $mdsw: {gap: "$3"} ,
    $lg: {gap: "$3"}
  } as WithMediaProps<ComponentProps<typeof YStack>>,

  xStack: {
    $xs: { gap: "$2" },
    $sm: { gap: "$2" },
    $md: { gap: "$2" },
    $mdsw: { gap: "$2" },
    $lg: { gap: "$3" },
  } as WithMediaProps<ComponentProps<typeof XStack>>,
}

export const fpCounterStyle = {
  stepperButton: {
    $xs: { size: "$1.5", width: "$1.5"},
    $sm: { size: "$2", width: "$2" },
    $md: { size: "$3", width: "$3" },
    $mdmw: { size: "$2", width: "$2" },
    $mdsw: { size: "$2", width: "$2" },
    $lg: { size: "$4", width: "$4.5" },
  } as WithMediaProps<ComponentProps<typeof Button>>,

  countButton: {
    $xs: { size: "$2", width: "$2.5"},
    $sm: { size: "$3", width: "$5" },
    $md: { size: "$4", width: "$5" },
    $mdmw: { size: "$3", width: "$3" },
    $mdsw: { size: "$3", width: "$3" },
    $lg: { size: "$5", width: "$7" },
  } as WithMediaProps<ComponentProps<typeof Button>>,
}

export const timerStyle = {
  game: {
    $md: { size: "$2", width: "$7", height: "$3" },
    $mdmw: { size: "$2", width: "$6", height: "$3" },
    $mdsw: { size: "$2", width: "$6", height: "$4" },
  } as WithMediaProps<ComponentProps<typeof Button>>,
  ready: {
    $md: { size: "$5", width: "$7", height: "$5" },
    $mdmw: { size: "$4", width: "$6", height: "$5" },
    $mdsw: { size: "$2", width: "$6", height: "$4" },
  } as WithMediaProps<ComponentProps<typeof Button>>,
}