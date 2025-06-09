import React, {useEffect, useMemo} from 'react'
import {SizableText, SizeTokens, XStack, ZStack} from 'tamagui'
import { Progress } from 'tamagui'
import {PlayerState} from "@/store/slices/boardSlice";
import styleSheet from "@/constants/styleSheet";


interface HpProgressBarProps {
  player: PlayerState,
  size: number,
}
export function HpProgressBar(props: HpProgressBarProps) {
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
    <ZStack theme={"green"} height={32} width={"44%"} scaleX={props.player.isFirst?1:-1} >
      <Progress value={progress} size={sizeProp} width={"100%"} // @ts-ignore
                backgroundColor={"$green4"}
                minWidth={0}>
        <Progress.Indicator animation="bouncy" // @ts-ignore
                            backgroundColor={'hsl(154, 53.5%, 21.25%)'}/>
      </Progress>
      <XStack // @ts-ignore
        marginTop={"$1.5"}
        style={props.player.isFirst?[styleSheet.flexSpaceAround]:[styleSheet.flexSpaceAround, styleSheet.flexReverse]} scaleX={props.player.isFirst?1:-1}
      >
        <SizableText color={"$blue8"}  size={"$5"}>Hand: {hand.at(1)}</SizableText>
        <SizableText color={"$blue8"} size={"$5"}>{currentHp}</SizableText>
      </XStack>
    </ZStack>
  )
}