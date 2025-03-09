import React, {useEffect} from 'react'
import type { SizeTokens } from 'tamagui'
import { Progress, YStack } from 'tamagui'
import {PlayerState} from "@/store/slices/boardSlice";


interface HpProgressBarProps {
  player: PlayerState,
  size: number,
}
export function HpProgressBar(props: HpProgressBarProps) {
  const [progress, setProgress] = React.useState(0)
  const sizeProp = `$${props.size}` as SizeTokens

  useEffect(() => {
    setProgress( (props.player.currentHp / props.player.character.hp.maxHp) * 100)
  }, [props.player.character.hp.maxHp, props.player.currentHp])

  return (
    <YStack height={60} gap="$4" theme={"blue"}>
      <Progress size={sizeProp} value={progress}>
        <Progress.Indicator animation="bouncy" />
      </Progress>
    </YStack>
  )
}