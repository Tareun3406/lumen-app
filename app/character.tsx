import {View, Button, YStack, XStack, SizableText, ZStack, Image} from "tamagui";
import characters, { Character } from "@/constants/character";
import CharacterSelectImage from "@/components/atom/CharacterSelectImage";
import {Link} from "expo-router";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks";
import {
  deselectCharacterToFirst, deselectCharacterToSecond,
  PlayerState,
  selectFirstPlayer,
  selectSecondPlayer,
  setCharacterToFirst,
  setCharacterToSecond
} from "@/store/slices/boardSlice";
import { TouchableOpacity } from "react-native";
import styleSheet from "@/constants/styleSheet";
import {useBoardPublisher} from "@/hooks/sideEffectHook";
import CharacterSelectDialog from "@/components/organisms/dialoge/CharacterSelectDialog";
import React, {useState} from "react";
import CharacterSelectedImage from "@/components/atom/CharacterSelectedImage";
import CharacterPanel from "@/components/organisms/panel/CharacterPanel";

export default function SelectCharacter() {
  const firstPlayer = useAppSelector(selectFirstPlayer);
  const secondPlayer = useAppSelector(selectSecondPlayer);
  const dispatch = useAppDispatch();
  useBoardPublisher();

  const [firstSelectOpen, setFirstSelectOpen] = useState(false);
  const [secondSelectOpen, setSecondSelectOpen] = useState(false);

  const setToNonSelectCharacter = (player: PlayerState) => {
    if (player.isFirst) {
      // dispatch(deselectCharacterToFirst());
      setFirstSelectOpen(true);
    } else {
      // dispatch(deselectCharacterToSecond());
      setSecondSelectOpen(true);
    }
  }

  // style={{justifyContent: "center", alignItems: "center"}}
  return (
    <View style={styleSheet.centeredContainer}>
      <YStack>
        <XStack style={styleSheet.centeredContainer}>
          <CharacterPanel player={firstPlayer} onClick={() => setToNonSelectCharacter(firstPlayer)} />
          <Link href={"/board"}>
            <Button>선택 완료</Button>
          </Link>
          <CharacterPanel player={secondPlayer} onClick={() => setToNonSelectCharacter(secondPlayer)} />
        </XStack>
      </YStack>
      <CharacterSelectDialog player={firstPlayer} open={firstSelectOpen} close={() => setFirstSelectOpen(false)} />
      <CharacterSelectDialog player={secondPlayer} open={secondSelectOpen} close={() => setSecondSelectOpen(false)} />
    </View>
  )
}