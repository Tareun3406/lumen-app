import {View, Image} from "tamagui";
import characters from "@/constants/character";
import CharacterSelectImage from "@/components/CharacterSelectImage";

export default function Play() {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "center",
      }}>
      {characters.map((character, i) => (
        <CharacterSelectImage character={character} key={i} />))}
    </View>
  )
}