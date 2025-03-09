import {View, Button} from "tamagui";
import characters from "@/constants/character";
import CharacterSelectImage from "@/components/CharacterSelectImage";
import {Link} from "expo-router";

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
      <Link href={"/board"}>
        <Button>플레이</Button>
      </Link>
    </View>
  )
}