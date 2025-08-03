import {Button, isWeb, View, XGroup, XStack, YStack} from "tamagui";
import {useAppSelector} from "@/hooks/storeHooks";
import {selectDamageLogs, selectFirstPlayer, selectSecondPlayer} from "@/store/slices/boardSlice";
import {HpProgressBar} from "@/components/mole/HpProgressBar";
import DamageButtonPanel from "@/components/organisms/panel/DamageButtonPanel";
import CharacterStatus from "@/components/mole/CharacterStatus";
import {RotateCw, StepBack, TextSearch, User} from "@tamagui/lucide-icons";
import styleSheet from "@/constants/styleSheet";
import TimerPanel from "@/components/organisms/panel/TimerPanel";
import TokenPanel from "@/components/organisms/panel/TokenPanel";
import {useGlobalAction} from "@/hooks/actionHooks";
import {useRouter} from "expo-router";
import RemoteDialog from "@/components/organisms/dialoge/RemoteDialog";
import {useBoardPublisher} from "@/hooks/sideEffectHook";
import DamageLogSheet from "@/components/organisms/sheet/DamageLogSheet";
import {useMemo, useState} from "react";
import {useTimer} from "@/hooks/timerHooks";
import FpCounter from "@/components/mole/FpCounter";
import ResetAlertDialog from "@/components/organisms/dialoge/ResetAlertDialog";
import {GameTimer} from "@/components/mole/GameTimer";
import {useWindowDimensions} from "react-native";
import DamageLogPanel from "@/components/organisms/panel/DamageLogPanel";

export default function Board() {
  const firstPlayer = useAppSelector(selectFirstPlayer);
  const secondPlayer = useAppSelector(selectSecondPlayer);
  const { initializeBoard, goToPreviousDamage } = useGlobalAction();
  const { initGameTimerAction } = useTimer()
  const router = useRouter()
  useBoardPublisher();
  const { width, height } = useWindowDimensions();
  const aspectRatio = width / height;
  const damageLogs = useAppSelector(selectDamageLogs);

  const [resetAlertOpen, setResetAlertOpen] = useState(false);
  const [damageLogOpen, setDamageLogOpen] = useState(false);


  const initialize = () => {
    initializeBoard()
    initGameTimerAction()
  }
  const isFoldRatio = useMemo(() => {
    return aspectRatio < 1.5
  }, [aspectRatio])

  return (
    <View style={[styleSheet.centeredContainer, styleSheet.flexedContainer]}>
      <YStack gap={"$2"} width={"95%"}>
        <XStack style={styleSheet.flexSpaceEvenly}>
          <CharacterStatus player={firstPlayer} />
          <XGroup>
            <XGroup.Item><Button onPress={() => router.push('/character')} icon={User} /></XGroup.Item>
            <XGroup.Item><Button onPress={() => setResetAlertOpen(true)} icon={RotateCw}/></XGroup.Item>
            {
              !isFoldRatio &&
              <XGroup.Item>
                <Button onPress={() => {setDamageLogOpen(true)}} icon={TextSearch}/>
                <DamageLogSheet open={damageLogOpen}  setOpen={(open) => setDamageLogOpen(open)}/>
              </XGroup.Item>
            }
            <XGroup.Item><Button onPress={goToPreviousDamage} icon={StepBack}/></XGroup.Item>
          </XGroup>
          <CharacterStatus player={secondPlayer} />
        </XStack>
        <XStack style={styleSheet.flexSpaceBetween}>
          <HpProgressBar player={firstPlayer} size={11}/>
          <GameTimer />
          <HpProgressBar player={secondPlayer} size={11}/>
        </XStack>

        <XStack style={styleSheet.flexSpaceAround}>
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
        {
          isFoldRatio &&
          <XStack height={"25%"} style={{marginTop:"10"}} borderColor={"black"} borderTopWidth={"$1"} borderBottomWidth={"$1"}>
            <DamageLogPanel damageLogs={damageLogs} />
          </XStack>
        }
      </YStack>

      <RemoteDialog />
      <ResetAlertDialog open={resetAlertOpen} close={() => setResetAlertOpen(false)} action={initialize} />
    </View>
  )
}