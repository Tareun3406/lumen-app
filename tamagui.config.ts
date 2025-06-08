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
        sm: {minHeight: 0},
        md: {minHeight: 400},
        lg: {minHeight: 500}
    },
})

export default tamaguiConfig

export type Conf = typeof tamaguiConfig

declare module 'tamagui' {
    interface TamaguiCustomConfig extends Conf {}
}