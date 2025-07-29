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
        xs: {minWidth: 0, maxWidth: 575},       // 모바일 (~576px)
        sm: {minWidth: 576, maxWidth: 767},     // 큰 모바일/작은 태블릿 (576-768px)
        md: {minWidth: 768, maxWidth: 991},     // 태블릿 (768-992px)
        lg: {minWidth: 992},                    // 데스크톱 (992px+)
    },
})

export default tamaguiConfig

export type Conf = typeof tamaguiConfig

declare module 'tamagui' {
    interface TamaguiCustomConfig extends Conf {}
}