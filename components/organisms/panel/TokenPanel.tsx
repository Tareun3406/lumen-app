import {IActionProps} from "@/hooks/actionHooks";
import OneToggleToken from "@/components/organisms/tokens/OneToggleToken";
import OneCounterToken from "@/components/organisms/tokens/OneCounterToken";
import SetzTokens from "@/components/organisms/tokens/character/SetzTokens";
import RevTokens from "@/components/organisms/tokens/character/RevTokens";
import TaoTokens from "@/components/organisms/tokens/character/TaoTokens";
import OneInfinityCounterToken from "@/components/organisms/tokens/OneInfinityCounterToken";
import JoanTokens from "@/components/organisms/tokens/character/JoanTokens";
import LitaTokens from "@/components/organisms/tokens/character/LitaTokens";

export default function TokenPanel(props: IActionProps) {
  const character = props.player.character

  const renderPanel = () => {
    switch (character.name) {

      // 토글형 한개
      case "루트":
      case "델피":
      case "키스":
      case "니아":
        return <OneToggleToken player={props.player} />;

      // 카운터형 한개
      case "울프":
      case "비올라":
        return <OneCounterToken player={props.player} />;

      // 카운터형(무한) 한개
      case "린":
      case "이제벨":
        return <OneInfinityCounterToken player={props.player} />

      // 그 외 특화
      case "세츠메이":
        return <SetzTokens player={props.player} />;
      case "레브":
        return <RevTokens player={props.player} otherPlayer={props.otherPlayer}/>
      case "타오":
        return <TaoTokens player={props.player} />
      case "리타":
        return <LitaTokens player={props.player} />
      case "요한":
        return <JoanTokens player={props.player} />

      // 토큰 없음
      case "선택없음":
      default: return (<></>)
    }
  }

  return renderPanel()
}