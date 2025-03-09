import {View, Button, YStack, XStack, SizableText} from "tamagui";
import characters, { Character } from "@/constants/character";
import CharacterSelectImage from "@/components/CharacterSelectImage";
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

export default function SelectCharacter() {
  const firstPlayer = useAppSelector(selectFirstPlayer);
  const secondPlayer = useAppSelector(selectSecondPlayer);
  const dispatch = useAppDispatch();

  const onClickCharacter = (character: Character) => {
    if (firstPlayer.character.name === "선택없음") {
      dispatch(setCharacterToFirst(character))
    } else if (secondPlayer.character.name === "선택없음") {
      dispatch(setCharacterToSecond(character));
    }
  };

  const setToNonSelectCharacter = (player: PlayerState) => {
    if (player.isFirst) {
      dispatch(deselectCharacterToFirst());
    } else {
      dispatch(deselectCharacterToSecond());
    }
  }

  // style={{justifyContent: "center", alignItems: "center"}}
  return (
    <View style={styleSheet.centeredContainer}>
      <YStack>
        <XStack style={styleSheet.centeredContainer}>
          <YStack>
            <SizableText>{firstPlayer.character.name}</SizableText>
            <CharacterSelectImage character={firstPlayer.character} size={126}/>
          </YStack>
          <YStack style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}>
            <XStack>
              <TouchableOpacity onPress={() => setToNonSelectCharacter(firstPlayer)}>
                <Button>1P 초기화</Button>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setToNonSelectCharacter(secondPlayer)}>
                <Button>2P 초기화</Button>
              </TouchableOpacity>
            </XStack>
            <Link href={"/board"}>
              <Button>선택 완료</Button>
            </Link>
          </YStack>
          <YStack>
            <SizableText>{secondPlayer.character.name}</SizableText>
            <CharacterSelectImage character={secondPlayer.character} size={126}/>
          </YStack>
        </XStack>
        <View style={styleSheet.flexWrap}>
          {characters.filter(character => (character.name !== "선택없음")).map((character, i) => (
            <TouchableOpacity onPress={() => onClickCharacter(character)}>
              <CharacterSelectImage character={character} size={126} key={i}/>
            </TouchableOpacity>
            ))}
        </View>
      </YStack>
    </View>
  )
}