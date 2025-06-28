import {Button, YStack} from "tamagui";
import styleSheet from "@/constants/styleSheet";
import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import {Minus, MinusCircle, Plus, PlusCircle} from "@tamagui/lucide-icons";

export interface ITokenCounterButtonProps extends IActionProps{
    tokenIndex: number;
}

export default function TokenCounterButton(props: ITokenCounterButtonProps) {
    const { addToken, removeToken, setTokenCount } = usePlayerAction(props);
    const token = props.player.character.tokens[props.tokenIndex];

    return (
        <YStack style={styleSheet.centeredContainer}>
            <Button size={"$2"} chromeless={true} //@ts-ignore
                    borderRadius={"$20"}
                    onPress={() => addToken(props.tokenIndex)}><PlusCircle/></Button>
            <Button size={"$3"} onPress={() => setTokenCount(props.tokenIndex, 0)} fontWeight="700">
                {token.count?.toString()}/{token.maxCount?.toString()}
            </Button>
            <Button size={"$2"} chromeless={true} //@ts-ignore
                    borderRadius={"$20"}
                    onPress={() => removeToken(props.tokenIndex)}><MinusCircle/></Button>
        </YStack>
    )
}