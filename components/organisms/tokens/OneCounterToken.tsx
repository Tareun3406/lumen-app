import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import {XStack} from "tamagui";
import {useEffect} from "react";
import TokenCounterButton from "@/components/atom/TokenCounterButton";
import TokenToggleImg from "@/components/mole/TokenToggleImg";

export default function OneCounterToken(props: IActionProps) {
  const token = props.player.character.tokens[0];
  const { setTokenToggle } = usePlayerAction(props);

  useEffect(() => {
    const payload = {
      index: 0,
      value : token.count >= token.toggleCount
    }
    setTokenToggle(payload);
  }, [token, setTokenToggle]);

  return (
    <XStack gap={"$1.5"}>
      <TokenToggleImg token={token} size={116} />
      <TokenCounterButton tokenIndex={0} player={props.player} />
    </XStack>
  )
}