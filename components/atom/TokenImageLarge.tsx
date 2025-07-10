import {IToken} from "@/constants/character";
import {tokenImgSources} from "@/constants/imageSource";
import {Image, styled, XStack} from "tamagui";
import {tokenStyle} from "@/constants/mediaQueryStyle";

export default function TokenImageLarge({ token } : { token: IToken }) {

  const ResponsiveXStack = styled(XStack, tokenStyle.large);

  return (
    <ResponsiveXStack>
      <Image
        source={tokenImgSources[token.name]}
        objectFit={"contain"}
        width="100%"
        height="100%"
      />
    </ResponsiveXStack>
  )
}