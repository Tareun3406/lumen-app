import { defaultConfig } from '@tamagui/config/v4'
import {createFont, createTamagui} from 'tamagui'

const pretendardFont = createFont({
    family: 'Pretendard',        // expo-font로 로드된 이름
    size: defaultConfig.fonts.body.size,
})

export const tamaguiConfig = createTamagui({
    ...defaultConfig,
    fonts: {
      body: pretendardFont,
      heading: pretendardFont,
    },
    media: {
      xs: {minWidth: 0, maxWidth: 699},
      sm: {minWidth: 700, maxWidth: 799},
      md: {minWidth: 800, maxWidth: 899},
      lg: {minWidth: 900},
    },
})

export default tamaguiConfig

export type Conf = typeof tamaguiConfig

declare module 'tamagui' {
    interface TamaguiCustomConfig extends Conf {}
}