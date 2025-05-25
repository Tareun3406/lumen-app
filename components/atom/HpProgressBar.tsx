import React, {useEffect, useMemo} from 'react'
import {SizableText, SizeTokens, XStack} from 'tamagui'
import { Progress, YStack } from 'tamagui'
import {PlayerState} from "@/store/slices/boardSlice";
import styleSheet from "@/constants/styleSheet";


interface HpProgressBarProps {
  player: PlayerState,
  size: number,
}
export function HpProgressBar(props: HpProgressBarProps) {
  const maxHp = props.player.character.hp.maxHp
  const currentHp = props.player.currentHp
  const [progress, setProgress] = React.useState(0)
  const sizeProp = `$${props.size}` as SizeTokens

  const hand = useMemo(() => {
    return props.player.character.hp.hpHand.find(([hp]) => props.player.currentHp <= hp) ?? [5000, 6]
  }, [props.player.currentHp, props.player.character.hp]);

  useEffect(() => {
    setProgress( (props.player.currentHp / props.player.character.hp.maxHp) * 100)
  }, [props.player.character.hp.maxHp, props.player.currentHp])

  return (
    <YStack theme={"blue"}>
      <Progress size={sizeProp} value={progress}>
        <Progress.Indicator animation="bouncy" />
      </Progress>
      <XStack style={styleSheet.flexSpaceAround}>
        <SizableText> {currentHp} / {maxHp}</SizableText>
        <SizableText> Hand: {hand.at(1)}</SizableText>
      </XStack>
    </YStack>
  )
}