import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import {useEffect} from "react";
import {XStack} from "tamagui";
import TokenToggleImg from "@/components/mole/TokenToggleImg";
import styleSheet from "@/constants/styleSheet";
import TokenCounterButton from "@/components/mole/TokenCounterButton";
import {TouchableOpacity} from "react-native";
import {useAppSelector} from "@/hooks/storeHooks";
import {selectSettings} from "@/store/slices/settingsSlice";

export default function TaoTokens(props: IActionProps) {
  const {setTokenToggleAsList} = usePlayerAction(props)
  const { player } = props;
  const { character } = player;
  const [ harmony, yin, yang ] = character.tokens
  const { flipPanel } = useAppSelector(selectSettings);

  const onClickWhenHarmony = (index: number) => {
    if (!harmony.toggle) {
      return;
    }

    const payload = {
      1: index === 1,
      2: index === 2,
    }
    setTokenToggleAsList(payload);
  }

  // 타오 토큰 활성화 조건
  useEffect(() => {
    const harmonyToggle = character.tokens[0].toggle;
    const yinCount = character.tokens[1].count;
    const yangCount = character.tokens[2].count;
    const yinToggle = character.tokens[1].toggle;
    const yangToggle = character.tokens[2].toggle;

    const payload: { [type: number]: boolean } = {};

    if (yinCount === 4 && yangCount === 4 && !harmonyToggle) {
      payload[0] = true;
      payload[1] = true;
      payload[2] = true;
    } else if ((yinCount! < 3 || yangCount! < 3) && harmonyToggle) {
      payload[0] = false;
    }

    if (!harmonyToggle && !(yinCount === 4 && yangCount === 4)) {
      if (yinCount! > yangCount! && (!yinToggle || yangToggle)) {
        payload[1] = true;
        payload[2] = false;
      } else if (yinCount! < yangCount! && (yinToggle || !yangToggle)) {
        payload[1] = false;
        payload[2] = true;
      } else if (yinCount === yangCount && (yinToggle || yangToggle)) {
        payload[1] = false;
        payload[2] = false;
      }
    }

    if (Object.keys(payload).length > 0) {
      setTokenToggleAsList(payload);
    }
  }, [character.tokens, setTokenToggleAsList]);

  return (
    <XStack style={!props.player.isFirst && flipPanel?[styleSheet.flexReverse]:[]}>
      <XStack style={styleSheet.centeredContainer} >
        <TouchableOpacity onPress={() => onClickWhenHarmony(1)} activeOpacity={1}>
          <TokenToggleImg token={yin} size={"small"}/>
        </TouchableOpacity>
      </XStack>

      <TokenCounterButton tokenIndex={1} player={player}/>

      <TokenToggleImg token={harmony} size={"large"}/>

      <TokenCounterButton tokenIndex={2} player={player}/>

      <XStack style={styleSheet.centeredContainer}>
        <TouchableOpacity onPress={() => onClickWhenHarmony(2)} activeOpacity={1}>
          <TokenToggleImg token={yang} size={"small"}/>
        </TouchableOpacity>
      </XStack>
    </XStack>
  )
}