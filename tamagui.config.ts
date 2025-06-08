import { defaultConfig } from '@tamagui/config/v4'
import {createTamagui } from 'tamagui'


export const tamaguiConfig = createTamagui({
    ...defaultConfig,
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