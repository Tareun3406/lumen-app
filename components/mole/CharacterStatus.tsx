import {PlayerState} from "@/store/slices/boardSlice";
import {Button, Paragraph, XStack} from "tamagui";
import CharacterSelectImage from "@/components/atom/CharacterSelectImage";
import styleSheet from "@/constants/styleSheet";
import {ArrowRightLeft} from "@tamagui/lucide-icons";
import {selectSettings, setFlipPanel} from "@/store/slices/settingsSlice";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks";

export interface ICharacterStatusProps {
  player: PlayerState
}

export default function CharacterStatus(props: ICharacterStatusProps) {
  const dispatch = useAppDispatch();
  const { flipPanel } = useAppSelector(selectSettings);

  return (
    <XStack
      width={"20%"}
      style={props.player.isFirst
        ? [styleSheet.centeredContainer, styleSheet.flexSpaceAround]
        : [styleSheet.centeredContainer, styleSheet.flexSpaceAround,styleSheet.flexReverse]}
    >
      {!props.player.isFirst && (
        <Button size={"$2"}
                style={{position:"absolute", right: -40}}
                onPress={() => dispatch(setFlipPanel(!flipPanel))} theme={flipPanel ? "blue" : null}>
          <ArrowRightLeft />
        </Button>
      )}
      <CharacterSelectImage character={props.player.character} size={44} />
      <Paragraph size={"$5"} fontWeight="800">
        {props.player.character.name}
      </Paragraph>
    </XStack>
  )
}