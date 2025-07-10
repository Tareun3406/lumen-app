import {Button, styled, ThemeName, XStack, YStack} from "tamagui";
import {useAppSelector} from "@/hooks/storeHooks";
import {selectTimer } from "@/store/slices/timerSlice";
import {useTimer} from "@/hooks/timerHooks";
import {useMemo} from "react";
import {timerStyle} from "@/constants/mediaQueryStyle";

export default function TimerPanel() {
  const { readyTimer } = useAppSelector(selectTimer);
  const { toggleReadyTimerAction } = useTimer();

  const readyTimerTheme = useMemo(() => {
    if (readyTimer.toggle === true) return "red" as ThemeName
    return "blue" as ThemeName
  }, [readyTimer.time, readyTimer.toggle])

  const ResponsiveReadyTimer = styled(Button, timerStyle.ready)

  return (
    <XStack>
      <YStack gap={5}>
        <ResponsiveReadyTimer onPress={toggleReadyTimerAction} theme={readyTimerTheme} // @ts-ignore
                              borderRadius={"$20"} fontWeight={"700"}
                              themeInverse={readyTimer.time <= 0}
        >
          {readyTimer.time.toString()}
        </ResponsiveReadyTimer>
      </YStack>
    </XStack>
  )
}