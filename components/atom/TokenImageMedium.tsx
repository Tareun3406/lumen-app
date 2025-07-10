import {IToken} from "@/constants/character";
import {Image, styled, XStack} from "tamagui";
import {tokenStyle} from "@/constants/mediaQueryStyle";
import {tokenImgSources} from "@/constants/imageSource";

export default function TokenImageMedium({ token } : { token: IToken }) {

  const ResponsiveXStack = styled(XStack, tokenStyle.medium);

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
