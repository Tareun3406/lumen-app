import {Image, View, YStack} from "tamagui";
import TokenToolTip from "@/components/atom/TokenToolTip";
import {IToken} from "@/constants/character";
import {tokenImgSources} from "@/constants/imageSource";
import {useMemo} from "react";

interface ITokenImageWithToolTipProps {
  token: IToken,
  size: number,
  toggle?: boolean,
}
export default function TokenToggleImg({ token, size, toggle }: ITokenImageWithToolTipProps) {

  const isToggle = useMemo(() => {
    return (toggle ?? token.toggle)
  }, [toggle, token.toggle])

    return (
        <TokenToolTip descriptions={token.description}>
          <View position={"relative"}>
            <Image
              source={tokenImgSources[token.name]}
              objectFit={"contain"}
              height={size}
              width={size}
            />
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