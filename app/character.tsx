import {Button, YStack, XStack, View, isWeb} from "tamagui";
import {Link} from "expo-router";
import {useAppSelector} from "@/hooks/storeHooks";
import {
  PlayerState,
  selectFirstPlayer,
  selectSecondPlayer,
} from "@/store/slices/boardSlice";
import {ImageBackground, Image} from "react-native";
import styleSheet from "@/constants/styleSheet";
import {useBoardPublisher} from "@/hooks/sideEffectHook";
import CharacterSelectDialog from "@/components/organisms/dialoge/CharacterSelectDialog";
import React, {useState} from "react";
import CharacterPanel from "@/components/organisms/panel/CharacterPanel";
import {miscImgSources} from "@/constants/imageSource";

export default function SelectCharacter() {
  const firstPlayer = useAppSelector(selectFirstPlayer);
  const secondPlayer = useAppSelector(selectSecondPlayer);
  useBoardPublisher();

  const [firstSelectOpen, setFirstSelectOpen] = useState(false);
  const [secondSelectOpen, setSecondSelectOpen] = useState(false);

  const setToNonSelectCharacter = (player: PlayerState) => {
    if (player.isFirst) {
      setFirstSelectOpen(true);
    } else {
      setSecondSelectOpen(true);
    }
  }

  // style={{justifyContent: "center", alignItems: "center"}}
  return (
    <View style={[styleSheet.centeredContainer, styleSheet.flexedContainer]}>
      <ImageBackground source={miscImgSources.background}
                       style={[styleSheet.centeredContainer, styleSheet.background]}
      >
        <YStack>
          <XStack style={styleSheet.centeredContainer}>
            <CharacterPanel player={firstPlayer} onClick={() => setToNonSelectCharacter(firstPlayer)} />
            <Link href={"/board"} asChild={!isWeb}>
              <Button>선택 완료</Button>
            </Link>
            <CharacterPanel player={secondPlayer} onClick={() => setToNonSelectCharacter(secondPlayer)} />
          </XStack>
        </YStack>
        <CharacterSelectDialog player={firstPlayer} open={firstSelectOpen} close={() => setFirstSelectOpen(false)} />
        <CharacterSelectDialog player={secondPlayer} open={secondSelectOpen} close={() => setSecondSelectOpen(false)} />
      </ImageBackground>
      <Image
          source={miscImgSources.backgroundShadowTop}
          style={{position:"absolute", top: 0, width: '100%', maxHeight: '20%'}}
      />

      <Image
          source={miscImgSources.backgroundShadowBottom}
          style={{position:"absolute", bottom: 0, width: '100%', maxHeight: '30%'}}
      />
    </View>
  )
}