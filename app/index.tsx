import {Button, View} from 'tamagui'
import {SizableText} from "tamagui";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
      <Link href={"/play"}>
        <Button>시작하기</Button>
      </Link>
      <SizableText>루멘콘덴서 서포트 어플리케이션입니다.</SizableText>
    </View>
  );
}
