import {Button, XStack, YStack} from "tamagui";
import {useAppSelector} from "@/hooks/storeHooks";
import {selectTimer } from "@/store/slices/timerSlice";
import {useTimer} from "@/hooks/timerHooks";
import {useMemo} from "react";

export default function TimerPanel() {
    const { readyTimer, gameTimer } = useAppSelector(selectTimer);
    const { toggleReadyTimerAction, toggleGameTimerAction } = useTimer();

    const gameTimerClock = useMemo(() => {
        const minutes = Math.floor((gameTimer.time)/60).toString().padStart(2,'0');
        const seconds = (gameTimer.time % 60).toString().padStart(2, '0');
        return `${minutes} : ${seconds}`;
    }, [gameTimer.time]);

  return (
    <XStack theme={"blue"}>
      <YStack gap={5}>
        <Button onPress={toggleGameTimerAction}>
            {gameTimerClock}
        </Button>
        <Button size="$6" onPress={toggleReadyTimerAction}>
          {readyTimer.time.toString()}
        </Button>
      </YStack>
    </XStack>
  )
}