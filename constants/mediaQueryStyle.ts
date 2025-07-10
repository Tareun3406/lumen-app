import {WithMediaProps} from "@tamagui/core";
import {ComponentProps} from "react";
import {Button, XStack, YStack} from "tamagui";

export const damageButtonPanelStyle = {
  button: {
    $sm: { size: "$3",width: "$6"},
    $md: { size: "$4", width: "$7"}
  } as WithMediaProps<ComponentProps<typeof Button>>,

  yStack: {
    $sm: {gap: "$2"},
    $md: {gap: "$2"}
  } as WithMediaProps<ComponentProps<typeof YStack>>,

  xStack: {
    $sm: {gap: "$2"},
    $md: {gap: "$2"}
  } as WithMediaProps<ComponentProps<typeof XStack>>,
}

export const fpCounterStyle = {
  yStack: {
    $sm: {gap: "$2"},
    $md: {gap: "$2"}
  } as WithMediaProps<ComponentProps<typeof YStack>>,
  stepperButton: {
    $sm: {size: "$2.5", width: "$4", height: "$2"},
    $md: {size: "$3", width: "$5", height: "$2.5"}
  } as WithMediaProps<ComponentProps<typeof Button>>,
  countButton: {
    $sm: {size: "$2.5", width: "$5", height: "$3.5"},
    $md: {size: "$3", width: "$6", height: "$4"}
  } as WithMediaProps<ComponentProps<typeof Button>>,
}

export const timerStyle = {
  game: {
  } as WithMediaProps<ComponentProps<typeof Button>>,
  ready: {
    $sm: { width: "$6",height: "$8", padding: "$1.5" },
    $md: { width: "$7",height: "$10", padding: "$1.5" }
  } as WithMediaProps<ComponentProps<typeof Button>>,
}

export const characterStandingPanelStyle = {
  standingImageContainer: {
    $sm: { width: 256, height: 256 },
    $md: { width: 256, height: 256 },
  } as WithMediaProps<ComponentProps<typeof YStack>>,
  nameTagImageContainer: {
    $sm: { width: 256, height: 90 },
    $md: { width: 256, height: 90 },
  } as WithMediaProps<ComponentProps<typeof YStack>>,
}