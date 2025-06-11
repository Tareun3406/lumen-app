import {Button, isWeb, View, XGroup, XStack, YStack} from "tamagui";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks";
import {selectFirstPlayer, selectSecondPlayer} from "@/store/slices/boardSlice";
import {HpProgressBar} from "@/components/atom/HpProgressBar";
import DamageButtonPanel from "@/components/organisms/panel/DamageButtonPanel";
import CharacterStatus from "@/components/mole/CharacterStatus";
import {ChevronsRightLeft, RotateCw, StepBack, TextSearch, User} from "@tamagui/lucide-icons";
import styleSheet from "@/constants/styleSheet";
import TimerPanel from "@/components/organisms/panel/TimerPanel";
import TokenPanel from "@/components/organisms/panel/TokenPanel";
import {useGlobalAction} from "@/hooks/actionHooks";
import {useRouter} from "expo-router";
import RemoteDialog from "@/components/organisms/dialoge/RemoteDialog";
import {useBoardPublisher} from "@/hooks/sideEffectHook";
import DamageLogSheet from "@/components/organisms/sheet/DamageLogSheet";
import {useState} from "react";
import {useTimer} from "@/hooks/timerHooks";
import {selectSettings, setFlipPanel} from "@/store/slices/settingsSlice";
import FpCounter from "@/components/mole/FpCounter";
import ResetAlertDialog from "@/components/organisms/dialoge/ResetAlertDialog";

export default function Board() {
  const firstPlayer = useAppSelector(selectFirstPlayer);
  const secondPlayer = useAppSelector(selectSecondPlayer);
  const { flipPanel } = useAppSelector(selectSettings);
  const dispatch = useAppDispatch();
  const { initializeBoard, goToPreviousDamage } = useGlobalAction();
  const { initGameTimerAction } = useTimer()
  const router = useRouter()
  useBoardPublisher();

  const [resetAlertOpen, setResetAlertOpen] = useState(false);
  const [damageLogOpen, setDamageLogOpen] = useState(false);


  const initialize = () => {
    initializeBoard()
    initGameTimerAction()
  }

  return (
    <View style={[styleSheet.centeredContainer, styleSheet.flexedContainer]}>
      <YStack gap={"$2"} width={"90%"}>
        <XStack style={styleSheet.flexSpaceEvenly}>
          <CharacterStatus player={firstPlayer} />
          <XGroup>
            <XGroup.Item><Button onPress={() => router.push('/character')} icon={User} /></XGroup.Item>
            <XGroup.Item><Button onPress={() => setResetAlertOpen(true)} icon={RotateCw}/></XGroup.Item>
            {/*<XGroup.Item><Button onPress={() => dispatch(setShowRemoteDialog(true))} icon={Cable}/></XGroup.Item>*/}
            {/*<XGroup.Item><Button onPress={() => {}} icon={Settings}/></XGroup.Item>*/}
            <XGroup.Item><Button onPress={() => {setDamageLogOpen(true)}} icon={TextSearch}/></XGroup.Item>
            <XGroup.Item><Button onPress={goToPreviousDamage} icon={StepBack}/></XGroup.Item>
          </XGroup>
          <CharacterStatus player={secondPlayer} />
        </XStack>
        <XStack style={styleSheet.flexSpaceAround}>
          <HpProgressBar player={firstPlayer} size={11}/>
          <Button size={"$2"} onPress={() => dispatch(setFlipPanel(!flipPanel))} theme={flipPanel ? "blue" : null}>
            <ChevronsRightLeft />
          </Button>
          <HpProgressBar player={secondPlayer} size={11}/>
        </XStack>

        <XStack style={styleSheet.flexSpaceAround} gap={isWeb ? '$3' : '$0'}>
          <DamageButtonPanel player={firstPlayer} />
          <FpCounter player={firstPlayer} />
          <TimerPanel />
          <FpCounter player={secondPlayer} />
          <DamageButtonPanel player={secondPlayer} />
        </XStack>

        <XStack style={styleSheet.flexSpaceAround}>
          <XStack width={"50%"} style={styleSheet.centeredContainer}>
            <TokenPanel player={firstPlayer} otherPlayer={secondPlayer} />
          </XStack>
          <XStack width={"50%"} style={styleSheet.centeredContainer}>
            <TokenPanel player={secondPlayer} otherPlayer={firstPlayer} />
          </XStack>
        </XStack>
      </YStack>
      <RemoteDialog />
      <ResetAlertDialog open={resetAlertOpen} close={() => setResetAlertOpen(false)} action={initialize} />
      <DamageLogSheet open={damageLogOpen}  setOpen={(open) => setDamageLogOpen(open)}/>
    </View>
  )
}