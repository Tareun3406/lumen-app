import {IActionProps} from "@/hooks/actionHooks";
import OneToggleToken from "@/components/tokens/OneToggleToken";
import OneCounterToken from "@/components/tokens/OneCounterToken";
import SetzTokens from "@/components/tokens/character/SetzTokens";
import RevTokens from "@/components/tokens/character/RevTokens";
import TaoTokens from "@/components/tokens/character/TaoTokens";

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

      // 그 외 특화
      case "세츠메이":
        return <SetzTokens player={props.player} />;
      case "레브":
        return <RevTokens player={props.player} otherPlayer={props.otherPlayer}/>
      case "타오":
        return <TaoTokens player={props.player} />
      case "리타":
        break;
      case "린":
        break;
      case "요한":
        break;

      // 토큰 없음
      case "선택없음":
      default: return (<></>)
    }
  }

  return renderPanel()
}