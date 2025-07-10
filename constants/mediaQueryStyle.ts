import {WithMediaProps} from "@tamagui/core";
import {ComponentProps} from "react";
import {Button, XStack, YStack} from "tamagui";

export const damageButtonPanelStyle = {
  button: {
    $xs: { size: "$2",width: "$5", height: "$2.5"},
    $sm: { size: "$3",width: "$6"},
    $md: { size: "$4", width: "$7"}
  } as WithMediaProps<ComponentProps<typeof Button>>,

  yStack: {
    $xs: {gap: "$2"},
    $sm: {gap: "$2"},
    $md: {gap: "$2"}
  } as WithMediaProps<ComponentProps<typeof YStack>>,

  xStack: {
    $xs: {gap: "$2"},
    $sm: {gap: "$2"},
    $md: {gap: "$2"}
  } as WithMediaProps<ComponentProps<typeof XStack>>,
}

export const fpCounterStyle = {
  yStack: {
    $xs: {gap: "$2"},
    $sm: {gap: "$2"},
    $md: {gap: "$2"}
  } as WithMediaProps<ComponentProps<typeof YStack>>,
  stepperButton: {
    $xs: {size: "$2", width: "$3.5", height: "$2"},
    $sm: {size: "$2.5", width: "$4", height: "$2"},
    $md: {size: "$3", width: "$5", height: "$2.5"}
  } as WithMediaProps<ComponentProps<typeof Button>>,
  countButton: {
    $xs: {size: "$2", width: "$4.5", height: "$3"},
    $sm: {size: "$2.5", width: "$5", height: "$3.5"},
    $md: {size: "$3", width: "$6", height: "$4"}
  } as WithMediaProps<ComponentProps<typeof Button>>,
}

export const timerStyle = {
  game: {
  } as WithMediaProps<ComponentProps<typeof Button>>,
  ready: {
    $xs: { size: "$6", width: "$5", height: "$7", padding: "$1.5" },
    $sm: { size: "$6", width: "$6", height: "$8", padding: "$1.5" },
    $md: { size: "$6", width: "$7", height: "$10", padding: "$1.5" }
  } as WithMediaProps<ComponentProps<typeof Button>>,
}

export const characterStandingPanelStyle = {
  standingImageContainer: {
    $xs: { width: 198, height: 198 },
    $sm: { width: 256, height: 256 },
    $md: { width: 256, height: 256 },
  } as WithMediaProps<ComponentProps<typeof YStack>>,
  nameTagImageContainer: {
    $xs: { width: 198, height: 75 },
    $sm: { width: 256, height: 90 },
    $md: { width: 256, height: 90 },
  } as WithMediaProps<ComponentProps<typeof YStack>>,
}

export const tokenStyle = {
  large: {
    $xs: {width: 92, height: 92},
    $sm: {width: 104, height: 104},
    $md: {width: 116, height: 116},
  },
  medium: {
    $xs: {width: 64, height: 64},
    $sm: {width: 72, height: 72},
    $md: {width: 80, height: 80},
  },
  small: {
    $xs: {width: 44, height: 44},
    $sm: {width: 48, height: 48},
    $md: {width: 52, height: 52},
  },
}

export const tokenCounterStyle = {
  stepper: {
    $xs: {size: "$1"},
    $sm: {size: "$2"},
    $md: {size: "$2"},
  } as WithMediaProps<ComponentProps<typeof Button>>,
  counter: {
    $xs: {size: "$2.5", width: "$5", padding: "$1.5"},
    $sm: {size: "$3"},
    $md: {size: "$3"},
  } as WithMediaProps<ComponentProps<typeof Button>>
}


export const characterStyle = {
  lita: {
    tokenButton: {
      $xs: {height: 32},
      $sm: {height: 35},
      $md: {height: 38},
    }
  }
}