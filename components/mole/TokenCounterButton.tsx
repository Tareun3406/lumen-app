import {Button, styled, YStack} from "tamagui";
import styleSheet from "@/constants/styleSheet";
import {IActionProps, usePlayerAction} from "@/hooks/actionHooks";
import {Minus, MinusCircle, Plus, PlusCircle} from "@tamagui/lucide-icons";
import {tokenCounterStyle} from "@/constants/mediaQueryStyle";

export interface ITokenCounterButtonProps extends IActionProps{
    tokenIndex: number;
}

export default function TokenCounterButton(props: ITokenCounterButtonProps) {
    const { addToken, removeToken, setTokenCount } = usePlayerAction(props);
    const token = props.player.character.tokens[props.tokenIndex];

    const ResponsiveButton = styled(Button, tokenCounterStyle.counter);
    return (
        <YStack style={styleSheet.centeredContainer}>
            <ResponsiveButton chromeless={true} //@ts-ignore
                    borderRadius={"$20"}
                    onPress={() => addToken(props.tokenIndex)}><PlusCircle/></ResponsiveButton>
            <ResponsiveButton onPress={() => setTokenCount(props.tokenIndex, 0)} fontWeight="700">
                {token.count?.toString()}/{token.maxCount?.toString()}
            </ResponsiveButton>
            <ResponsiveButton chromeless={true} //@ts-ignore
                    borderRadius={"$20"}
                    onPress={() => removeToken(props.tokenIndex)}><MinusCircle/></ResponsiveButton>
        </YStack>
    )
}