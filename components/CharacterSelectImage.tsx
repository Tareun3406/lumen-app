import {Character} from "@/constants/character";
import {Image, View} from "tamagui";

export interface CharacterSelectImageProps {
  character: Character;
}
export default function CharacterSelectImage(props: CharacterSelectImageProps) {
  return (
    <View
      style={{ margin: 3 }}
    >
      <Image
        source={props.character.portrait}
        objectFit={"contain"}
        height={126}
        width={126}
      />
    </View>
  )
}