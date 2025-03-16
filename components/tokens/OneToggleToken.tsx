import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import {TouchableOpacity} from "react-native";
import TokenToggleImg from "@/components/mole/TokenToggleImg";

export default function OneToggleToken(props: IActionProps) {
  const { player } = props;
  const { character } = player;
  const { changeToggle } = usePlayerAction(props);
  const token = character.tokens[0];

  return (
      <TouchableOpacity activeOpacity={1} style={{position: "relative"}} onPress={() => changeToggle(0)}>
        <TokenToggleImg token={token} size={116}/>
      </TouchableOpacity>
  )
}