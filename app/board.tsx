import {Button, SizableText, View, XGroup, XStack, YStack} from "tamagui";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks";
import {selectFirstPlayer, selectSecondPlayer} from "@/store/slices/boardSlice";
import {HpProgressBar} from "@/components/HpProgressBar";
import DamageButtonPanel from "@/components/DamageButtonPanel";
import CharacterStatus from "@/components/CharacterStatus";
import {Cable, RotateCw, Settings, StepBack, TextSearch, User} from "@tamagui/lucide-icons";
import styleSheet from "@/constants/styleSheet";
import TimerPanel from "@/components/TimerPanel";
import TokenPanel from "@/components/TokenPanel";
import {useGlobalAction} from "@/hooks/actionHooks";
import {useRouter} from "expo-router";
import RemoteDialog from "@/components/organisms/RemoteDialog";
import {setShowRemoteDialog} from "@/store/slices/remoteSlice";

export default function Board() {
  const firstPlayer = useAppSelector(selectFirstPlayer);
  const secondPlayer = useAppSelector(selectSecondPlayer);
  const { initializeBoard } = useGlobalAction();
  const router = useRouter()
  const dispatch = useAppDispatch();

  return (
    <View style={styleSheet.centeredContainer}>
      <YStack gap={"$2"}>
        <XStack style={styleSheet.flexSpaceAround}>
          <CharacterStatus player={firstPlayer} />
          <XGroup>
            <XGroup.Item><Button onPress={() => router.push('/character')} icon={User} /></XGroup.Item>
            <XGroup.Item><Button onPress={initializeBoard} icon={RotateCw}/></XGroup.Item>
            <XGroup.Item><Button onPress={() => dispatch(setShowRemoteDialog(true))} icon={Cable}/></XGroup.Item>
            <XGroup.Item><Button onPress={() => {}} icon={Settings}/></XGroup.Item>
            <XGroup.Item><Button onPress={() => {}} icon={TextSearch}/></XGroup.Item>
            <XGroup.Item><Button onPress={() => {}} icon={StepBack}/></XGroup.Item>
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
      <RemoteDialog />
    </View>
  )
}