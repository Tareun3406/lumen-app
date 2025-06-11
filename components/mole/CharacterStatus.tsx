import {PlayerState} from "@/store/slices/boardSlice";
import {Paragraph, XStack} from "tamagui";
import CharacterSelectImage from "@/components/atom/CharacterSelectImage";
import styleSheet from "@/constants/styleSheet";

export interface ICharacterStatusProps {
  player: PlayerState
}

export default function CharacterStatus(props: ICharacterStatusProps) {
  return (
    <XStack
      width={"20%"}
      style={props.player.isFirst
        ? [styleSheet.centeredContainer, styleSheet.flexSpaceAround]
        : [styleSheet.centeredContainer, styleSheet.flexSpaceAround,styleSheet.flexReverse]}
    >
      <CharacterSelectImage character={props.player.character} size={30} />
      <Paragraph size={"$5"} fontWeight="800">
        {props.player.character.name}
      </Paragraph>
    </XStack>
  )
}