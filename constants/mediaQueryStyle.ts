import {WithMediaProps} from "@tamagui/core";
import {ComponentProps} from "react";
import {Button, Paragraph, Progress, XStack, YStack, ZStack} from "tamagui";

export const characterStatusStyle = {

}

export const hpStatusStyle = {
  zStack: {
    $xs: {height: 24},
    $sm: {height: 28},
    $md: {height: 32},
    $lg: {height: 36},
  } as WithMediaProps<ComponentProps<typeof ZStack>>,
  progress: {
    $xs: {height: 24},
    $sm: {height: 28},
    $md: {height: 32},
    $lg: {height: 36},
  } as WithMediaProps<ComponentProps<typeof Progress>>,
  paragraph: {
    $xs: {size: "$4"},
    $sm: {size: "$5"},
    $md: {size: "$6"},
    $lg: {size: "$7"},
  } as WithMediaProps<ComponentProps<typeof Paragraph>>,
}

export const damageButtonPanelStyle = {
  button: {
    $xs: { size: "$2",width: "$5", height: "$2.5"},
    $sm: { size: "$3",width: "$6"},
    $md: { size: "$4", width: "$7"},
    $lg: { size: "$5", width: "$9"},
  } as WithMediaProps<ComponentProps<typeof Button>>,

  yStack: {
    $xs: {gap: "$2"},
    $sm: {gap: "$2"},
    $md: {gap: "$2"},
    $lg: {gap: "$2"},
  } as WithMediaProps<ComponentProps<typeof YStack>>,

  xStack: {
    $xs: {gap: "$2"},
    $sm: {gap: "$2"},
    $md: {gap: "$2"},
    $lg: {gap: "$2"},
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
    $sm: {size: "$2.5", fontSize: "$6", width: "$5", height: "$3.5"},
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
    $xs: { width: 198, height: 198 },
    $sm: { width: 256, height: 256 },
    $md: { width: 256, height: 256 },
    $lg: { width: 256, height: 256 },
  } as WithMediaProps<ComponentProps<typeof YStack>>,
  nameTagImageContainer: {
    $xs: { width: 198, height: 75 },
    $sm: { width: 256, height: 90 },
    $md: { width: 256, height: 90 },
    $lg: { width: 256, height: 90 },
  } as WithMediaProps<ComponentProps<typeof YStack>>,
}

export const tokenStyle = {
  large: {
    $xs: {width: 92, height: 92},
    $sm: {width: 104, height: 104},
    $md: {width: 116, height: 116},
    $lg: {width: 128, height: 128},
  },
  medium: {
    $xs: {width: 64, height: 64},
    $sm: {width: 72, height: 72},
    $md: {width: 80, height: 80},
    $lg: {width: 88, height: 88},
  },
  small: {
    $xs: {width: 44, height: 44},
    $sm: {width: 48, height: 48},
    $md: {width: 52, height: 52},
    $lg: {width: 56, height: 56},
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
    $xs: {size: "$2.5", width: "$5", padding: "$1.5"},
    $sm: {size: "$3"},
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