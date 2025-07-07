import {WithMediaProps} from "@tamagui/core";
import {ComponentProps} from "react";
import {Button, XStack, YStack} from "tamagui";

export const damageButtonPanelStyle = {
  button: {
    $xs: { size: "$2", width: "$6", height: "$2.5" },
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
    $mdsw: {gap: "$2"} ,
    $mdmw: {gap: "$2"},
    $lg: {gap: "$3"}
  } as WithMediaProps<ComponentProps<typeof YStack>>,

  xStack: {
    $xs: { gap: "$2" },
    $sm: { gap: "$2" },
    $md: { gap: "$2" },
    $mdsw: { gap: "$1" },
    $mdmw: { gap: "$1.5" },
    $lg: { gap: "$3" },
  } as WithMediaProps<ComponentProps<typeof XStack>>,
}

export const fpCounterStyle = {
  stepperButton: {
    // $xs: { size: "$1.5", width: "$1.5"},
    // $sm: { size: "$2", width: "$2" },
    // $md: { size: "$3", width: "$3" },
    // $mdmw: { size: "$2", width: "$2" },
    // $mdsw: { size: "$2", width: "$2" },
    // $lg: { size: "$4", width: "$4.5" },
  } as WithMediaProps<ComponentProps<typeof Button>>,

  countButton: {
    $xs: { size: "$2", width: "$4"},
    $sm: { size: "$3", width: "$5" },
    $md: { size: "$4", width: "$5" },
    $mdmw: { size: "$2", width: "$4" },
    $mdsw: { size: "$2", width: "$4" },
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
    $xs: { size: "$4", width: "$6", height: "$10" },
    $sm: { size: "$4", width: "$7", height: "$10" },
    $md: { size: "$5", width: "$7", height: "$10" },
    $mdmw: { size: "$3", width: "$6", height: "$10" },
    $mdsw: { size: "$2", width: "$6", height: "$10" },
  } as WithMediaProps<ComponentProps<typeof Button>>,
}

export const characterStandingPanelStyle = {
  standingImageContainer: {
    $xs: { width: 192, height: 192 },
    $sm: { width: 256, height: 256 },
    $md: { width: 256, height: 256 },
    $mdmw: { width: 224, height: 224 },
    $mdsw: { width: 192, height: 192 },
    $lg: { width: 256, height: 256 },
  } as WithMediaProps<ComponentProps<typeof YStack>>,
  nameTagImageContainer: {
    $xs: { width: 192, height: 65 },
    $sm: { width: 256, height: 90 },
    $md: { width: 256, height: 90 },
    $mdmw: { width: 224, height: 80 },
    $mdsw: { width: 192, height: 65 },
    $lg: { width: 256, height: 90 },
  } as WithMediaProps<ComponentProps<typeof YStack>>,
}