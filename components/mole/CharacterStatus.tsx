import {PlayerState} from "@/store/slices/boardSlice";
import {SizableText, XStack} from "tamagui";
import CharacterSelectImage from "@/components/atom/CharacterSelectImage";
import styleSheet from "@/constants/styleSheet";

export interface ICharacterStatusProps {
  player: PlayerState
}

export default function CharacterStatus(props: ICharacterStatusProps) {

  return (
    <XStack style={styleSheet.centeredContainer}>
      <CharacterSelectImage character={props.player.character} size={30} />
      <SizableText>{props.player.character.name}</SizableText>
    </XStack>
  )
}