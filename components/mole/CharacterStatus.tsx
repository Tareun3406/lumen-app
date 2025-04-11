import {PlayerState} from "@/store/slices/boardSlice";
import {SizableText, XStack} from "tamagui";
import CharacterSelectImage from "@/components/atom/CharacterSelectImage";
import {useMemo} from "react";
import styleSheet from "@/constants/styleSheet";

export interface ICharacterStatusProps {
  player: PlayerState
}

export default function CharacterStatus(props: ICharacterStatusProps) {

  const hand = useMemo(() => {
    return props.player.character.hp.hpHand.find(([hp]) => props.player.currentHp <= hp) ?? [5000, 6]
  }, [props.player.currentHp, props.player.character.hp]);

  return (
    <XStack style={styleSheet.centeredContainer}>
      <CharacterSelectImage character={props.player.character} size={30} />
      <SizableText>{props.player.character.name}</SizableText>
      <SizableText>Hand: {hand.at(1)}</SizableText>
    </XStack>
  )
}