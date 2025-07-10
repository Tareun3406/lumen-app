import React, {useEffect, useMemo} from 'react'
import {Paragraph, styled, XStack, ZStack} from 'tamagui'
import { Progress } from 'tamagui'
import {PlayerState} from "@/store/slices/boardSlice";
import styleSheet from "@/constants/styleSheet";
import {hpStatusStyle} from "@/constants/mediaQueryStyle";


interface HpProgressBarProps {
  player: PlayerState,
}
export function HpProgressBar(props: HpProgressBarProps) {
  const currentHp = props.player.currentHp
  const [progress, setProgress] = React.useState(0)


  const hand = useMemo(() => {
    return props.player.character.hp.hpHand.find(([hp]) => props.player.currentHp <= hp) ?? [5000, 6]
  }, [props.player.currentHp, props.player.character.hp]);
  useEffect(() => {
    setProgress(Math.round((props.player.currentHp / props.player.character.hp.maxHp) * 100))
  }, [props.player.character.hp.maxHp, props.player.currentHp])

  const ResponsiveZStack = styled(ZStack, hpStatusStyle.zStack)
  const ResponsiveParagraph = styled(Paragraph, hpStatusStyle.paragraph)
  const ResponsiveProgress = styled(Progress, hpStatusStyle.progress)

  return (
    <ResponsiveZStack theme={"green"} height={32} width={"42%"} scaleX={props.player.isFirst?1:-1} >
      <ResponsiveProgress value={progress}  // @ts-ignore
                backgroundColor={"$green4"}
                minWidth={0}>
        <Progress.Indicator animation="bouncy" // @ts-ignore
                            backgroundColor={'hsl(154, 53.5%, 21.25%)'}/>
      </ResponsiveProgress>
      <XStack // @ts-ignore
        marginTop={"$1.5"}
        style={props.player.isFirst?[styleSheet.flexSpaceAround]:[styleSheet.flexSpaceAround, styleSheet.flexReverse]} scaleX={props.player.isFirst?1:-1}
      >
        <ResponsiveParagraph fontWeight="800" color={"$red8"}> Hand: {hand.at(1)}</ResponsiveParagraph>
        <ResponsiveParagraph fontWeight="800" color={"$red8"}>{currentHp}</ResponsiveParagraph>
      </XStack>
    </ResponsiveZStack>
  )
}