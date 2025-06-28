import {Button, Paragraph, SizableText, styled, ThemeName} from "tamagui";
import {useMemo} from "react";
import {useAppSelector} from "@/hooks/storeHooks";
import {selectTimer} from "@/store/slices/timerSlice";
import {useTimer} from "@/hooks/timerHooks";
import {Pressable} from "react-native";


export function GameTimer() {
  const { gameTimer } = useAppSelector(selectTimer);
  const { toggleGameTimerAction } = useTimer();

  const gameTimerClock = useMemo(() => {
    const minutes = Math.floor((gameTimer.time)/60).toString().padStart(2,'0');
    const seconds = (gameTimer.time % 60).toString().padStart(2, '0');
    return `${minutes} : ${seconds}`;
  }, [gameTimer.time]);

  const gameTimerTheme = useMemo(() => {
    if (gameTimer.time <= 0) return "red"
    if (gameTimer.toggle === true) return "#9c27b0"
    return ""
  }, [gameTimer.time, gameTimer.toggle])

  // const ResponsiveGameTimer = styled(Button, timerStyle.game)

  return (
    <Pressable>
      <Paragraph size={"$5"} fontWeight="800" onPress={toggleGameTimerAction} // @ts-ignore
                 color={gameTimerTheme}>
        {gameTimerClock}
      </Paragraph>
    </Pressable>
  )
}