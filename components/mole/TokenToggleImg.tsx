import {Image, View} from "tamagui";
import TokenToolTip from "@/components/atom/TokenToolTip";
import {IToken} from "@/constants/character";

interface ITokenImageWithToolTipProps {
    token: IToken,
    size: number,
}
export default function TokenToggleImg({ token, size }: ITokenImageWithToolTipProps) {
    return (
        <TokenToolTip descriptions={token.description}>
            <Image
                source={token.img}
                objectFit={"contain"}
                height={size}
                width={size}
            />
            <View style={{
                position: "absolute",
                top: 0,
                left: 0,
                background: "black",
                width: "100%",
                height: "100%",
                opacity: token.toggle ? 0 : 0.6
            }}/>
        </TokenToolTip>
    )
}