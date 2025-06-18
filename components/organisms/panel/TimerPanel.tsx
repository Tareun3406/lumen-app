import {Button, styled, ThemeName, XStack, YStack} from "tamagui";
import {useAppSelector} from "@/hooks/storeHooks";
import {selectTimer } from "@/store/slices/timerSlice";
import {useTimer} from "@/hooks/timerHooks";
import {useMemo} from "react";
import {timerStyle} from "@/constants/mediaQueryStyle";

export default function TimerPanel() {
  const { readyTimer, gameTimer } = useAppSelector(selectTimer);
  const { toggleReadyTimerAction, toggleGameTimerAction } = useTimer();

  const gameTimerClock = useMemo(() => {
      const minutes = Math.floor((gameTimer.time)/60).toString().padStart(2,'0');
      const seconds = (gameTimer.time % 60).toString().padStart(2, '0');
      return `${minutes} : ${seconds}`;
  }, [gameTimer.time]);

  const gameTimerTheme = useMemo(() => {
    if (gameTimer.time <= 0) return "red" as ThemeName
    if (gameTimer.toggle === true) return "yellow" as ThemeName
    return "blue" as ThemeName
  }, [gameTimer.time, gameTimer.toggle])

  const readyTimerTheme = useMemo(() => {
    if (readyTimer.time <= 0) return "red" as ThemeName
    if (readyTimer.toggle === true) return "yellow" as ThemeName
    return "blue" as ThemeName
  }, [readyTimer.time, readyTimer.toggle])

  const ResponsiveGameTimer = styled(Button, timerStyle.game)
  const ResponsiveReadyTimer = styled(Button, timerStyle.ready)

  return (
    <XStack>
      <YStack gap={5}>
        <ResponsiveGameTimer onPress={toggleGameTimerAction} theme={gameTimerTheme}>
            {gameTimerClock}
        </ResponsiveGameTimer>
        <ResponsiveReadyTimer size="$6" onPress={toggleReadyTimerAction} theme={readyTimerTheme}>
          {readyTimer.time.toString()}
        </ResponsiveReadyTimer>
      </YStack>
    </XStack>
  )
}