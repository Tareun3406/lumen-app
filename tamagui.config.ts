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
        xs: {minHeight: 0, maxWidth: 699},
        sm: {minHeight: 0, minWidth: 700},  // todo sm, md, lg 각각 width 별 쿼리 설정
        md: {minHeight: 400},
        mdmw: {minHeight: 400, minWidth: 600, maxWidth: 700},
        mdsw: {minHeight: 400, minWidth: 0, maxWidth: 599},
        lg: {minHeight: 500}
    },
})

export default tamaguiConfig

export type Conf = typeof tamaguiConfig

declare module 'tamagui' {
    interface TamaguiCustomConfig extends Conf {}
}