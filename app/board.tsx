import {Button, SizableText, XGroup, XStack, YStack} from "tamagui";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks";
import {selectFirstPlayer, selectSecondPlayer} from "@/store/slices/boardSlice";
import {HpProgressBar} from "@/components/HpProgressBar";
import DamageButtonPanel from "@/components/DamageButtonPanel";
import CharacterStatus from "@/components/CharacterStatus";
import {Cable, RotateCw, Settings, StepBack, TextSearch, User} from "@tamagui/lucide-icons";
import styleSheet from "@/constants/styleSheet";
import TimerPanel from "@/components/TimerPanel";
import TokenPanel from "@/components/TokenPanel";

export default function Board() {
  const firstPlayer = useAppSelector(selectFirstPlayer);
  const secondPlayer = useAppSelector(selectSecondPlayer);

  return (
    <YStack>
      <XStack style={styleSheet.flexSpaceAround}>
        <CharacterStatus player={firstPlayer} />
        <XGroup>
          <XGroup.Item><Button icon={User} /></XGroup.Item>
          <XGroup.Item><Button icon={RotateCw}/></XGroup.Item>
          <XGroup.Item><Button icon={Cable}/></XGroup.Item>
          <XGroup.Item><Button icon={Settings}/></XGroup.Item>
          <XGroup.Item><Button icon={TextSearch}/></XGroup.Item>
          <XGroup.Item><Button icon={StepBack}/></XGroup.Item>
        </XGroup>
        <CharacterStatus player={secondPlayer} />
      </XStack>
      <XStack style={styleSheet.flexSpaceAround}>
        <HpProgressBar player={firstPlayer} size={10}/>
        <HpProgressBar player={secondPlayer} size={10}/>
      </XStack>
      <XStack style={styleSheet.flexSpaceAround}>
        <DamageButtonPanel player={firstPlayer} />
        <TimerPanel />
        <DamageButtonPanel player={secondPlayer} />
      </XStack>
      <XStack style={styleSheet.flexSpaceAround}>
        <TokenPanel player={firstPlayer} otherPlayer={secondPlayer} />
        <TokenPanel player={secondPlayer} otherPlayer={firstPlayer} />
      </XStack>
    </YStack>
  )
}