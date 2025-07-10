import {View, YStack} from "tamagui";
import TokenToolTip from "@/components/atom/TokenToolTip";
import {IToken} from "@/constants/character";
import {useMemo} from "react";
import TokenImageLarge from "@/components/atom/TokenImageLarge";
import TokenImageMedium from "@/components/atom/TokenImageMedium";
import TokenImageSmall from "@/components/atom/TokenImageSmall";

interface ITokenImageWithToolTipProps {
  token: IToken,
  size: "small" | "medium" | "large",
  toggle?: boolean,
}
export default function TokenToggleImg({ token, size, toggle }: ITokenImageWithToolTipProps) {

  const isToggle = useMemo(() => {
    return (toggle ?? token.toggle)
  }, [toggle, token.toggle])

    return (
        <TokenToolTip descriptions={token.description}>
          <View position={"relative"}>
            {size === "small" && (<TokenImageSmall token={token} />)}
            {size === "medium" && (<TokenImageMedium token={token} />)}
            {size === "large" && (<TokenImageLarge token={token} />)}
            { !isToggle && (
              <YStack
                position="absolute" // @ts-ignore
                top={0}
                left={0}
                right={0}
                bottom={0}
                backgroundColor="black"
                opacity={0.6}
              />)
            }
          </View>
        </TokenToolTip>
    )
}