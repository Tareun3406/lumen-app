import {WithMediaProps} from "@tamagui/core";
import {ComponentProps} from "react";
import {Button, XStack, YStack} from "tamagui";

export const damageButtonPanelStyle = {
  button: {
    $xs: { size: "$2",width: "$5", height: "$2.5", padding: 0},
    $sm: { size: "$3", width: 56, fontSize: "$3", padding: 0},
    $md: { size: "$4", width: "$7", padding: "$1"},
    $lg: { size: "$5", width: "$9",padding: "$1"},
  } as WithMediaProps<ComponentProps<typeof Button>>,

  yStack: {
    $xs: {gap: "$2"},
    $sm: {gap: "$2"},
    $md: {gap: "$2"},
    $lg: {gap: "$3"},
  } as WithMediaProps<ComponentProps<typeof YStack>>,

  xStack: {
    $xs: {gap: "$2"},
    $sm: {gap: "$2"},
    $md: {gap: "$2"},
    $lg: {gap: "$3"},
  } as WithMediaProps<ComponentProps<typeof XStack>>,
}

export const fpCounterStyle = {
  yStack: {
    $xs: {gap: "$2"},
    $sm: {gap: "$2"},
    $md: {gap: "$2"},
    $lg: {gap: "$2"},
  } as WithMediaProps<ComponentProps<typeof YStack>>,
  stepperButton: {
    $xs: {size: "$2", width: "$3.5", height: "$2"},
    $sm: {size: "$2.5", width: "$4", height: "$2"},
    $md: {size: "$3", width: "$5", height: "$2.5"},
    $lg: {size: "$4", width: "$6", height: "$3"},
  } as WithMediaProps<ComponentProps<typeof Button>>,
  countButton: {
    $xs: {size: "$2", fontSize: "$5", width: "$4.5", height: "$3"},
    $sm: {size: "$2.5", fontSize: "$6", width: 48, height: "$3.5"},
    $md: {size: "$3", fontSize: "$6", width: "$6", height: "$4"},
    $lg: {fontSize: "$8", width: "$7", height: "$5"},
  } as WithMediaProps<ComponentProps<typeof Button>>,
}

export const timerStyle = {
  game: {
  } as WithMediaProps<ComponentProps<typeof Button>>,
  ready: {
    $xs: { fontSize: "$8", width: "$5", height: "$7", padding: "$1.5" },
    $sm: { fontSize: "$9", width: "$6", height: "$8", padding: "$1.5" },
    $md: { fontSize: "$9", width: "$7", height: "$10", padding: "$1.5" },
    $lg: { fontSize: "$10", width: "$8", height: "$11", padding: "$1.5" },
  } as WithMediaProps<ComponentProps<typeof Button>>,
}

export const characterStandingPanelStyle = {
  standingImageContainer: {
    $xs: { width: 160, height: 160 },
    $sm: { width: 192, height: 192 },
    $md: { width: 256, height: 256 },
    $lg: { width: 384, height: 384 },
  } as WithMediaProps<ComponentProps<typeof YStack>>,
  nameTagImageContainer: {
    $xs: { width: 160, height: 60 },
    $sm: { width: 198, height: 75},
    $md: { width: 256, height: 90 },
    $lg: { width: 384, height: 95 },
  } as WithMediaProps<ComponentProps<typeof YStack>>,
}

export const tokenStyle = {
  large: {
    $xs: {width: 64, height: 64},
    $sm: {width: 88, height: 88},
    $md: {width: 116, height: 116},
    $lg: {width: 136, height: 136},
  },
  medium: {
    $xs: {width: 52, height: 52},
    $sm: {width: 72, height: 72},
    $md: {width: 80, height: 80},
    $lg: {width: 92, height: 92},
  },
  small: {
    $xs: {width: 40, height: 40},
    $sm: {width: 48, height: 48},
    $md: {width: 52, height: 52},
    $lg: {width: 72, height: 72},
  },
}

export const tokenCounterStyle = {
  stepper: {
    $xs: {size: "$1"},
    $sm: {size: "$2"},
    $md: {size: "$2"},
    $lg: {size: "$2"},
  } as WithMediaProps<ComponentProps<typeof Button>>,
  counter: {
    $xs: {size: "$1.5", width: "$5", padding: "$1.5"},
    $sm: {size: "$2"},
    $md: {size: "$3"},
    $lg: {size: "$3"},
  } as WithMediaProps<ComponentProps<typeof Button>>
}


export const characterStyle = {
  lita: {
    tokenButton: {
      $xs: {height: 32},
      $sm: {height: 35},
      $md: {height: 38},
      $lg: {height: 40},
    }
  }
}