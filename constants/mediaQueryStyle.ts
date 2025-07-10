import {WithMediaProps} from "@tamagui/core";
import {ComponentProps} from "react";
import {Button, XStack, YStack} from "tamagui";

export const damageButtonPanelStyle = {
  button: {
    $md: { size: "$4", width: "$7"}
  } as WithMediaProps<ComponentProps<typeof Button>>,

  yStack: {
    $md: {gap: "$2"}
  } as WithMediaProps<ComponentProps<typeof YStack>>,

  xStack: {
    $sm: {gap: "$2"},
    $md: {gap: "$2"}
  } as WithMediaProps<ComponentProps<typeof XStack>>,
}

export const fpCounterStyle = {
  yStack: {
    $md: {gap: "$2"}
  } as WithMediaProps<ComponentProps<typeof YStack>>,
  stepperButton: {
    $md: {size: "$3", width: "$5", height: "$2.5"}
  } as WithMediaProps<ComponentProps<typeof Button>>,
  countButton: {
    $md: {size: "$3", width: "$6", height: "$4"}
  } as WithMediaProps<ComponentProps<typeof Button>>,
}

export const timerStyle = {
  game: {
  } as WithMediaProps<ComponentProps<typeof Button>>,
  ready: {
    $md: { width: "$7",height: "$10", padding: "$1.5" }
  } as WithMediaProps<ComponentProps<typeof Button>>,
}

export const characterStandingPanelStyle = {
  standingImageContainer: {
    $md: { width: 256, height: 256 },
  } as WithMediaProps<ComponentProps<typeof YStack>>,
  nameTagImageContainer: {
    $md: { width: 256, height: 90 },
  } as WithMediaProps<ComponentProps<typeof YStack>>,
}