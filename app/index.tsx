import {Button, View} from 'tamagui'
import {SizableText} from "tamagui";
import {Link} from "expo-router";
import styleSheet from "@/constants/styleSheet";

export default function Index() {
  return (
    <View
        style={styleSheet.centeredContainer}>
      <Link href={"/character"}>
        <Button>시작하기</Button>
      </Link>
      <SizableText>루멘콘덴서 서포트 어플리케이션입니다.</SizableText>
    </View>
  );
}
