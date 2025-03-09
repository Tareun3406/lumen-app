import {Paragraph, Tooltip} from "tamagui";
import {PropsWithChildren} from "react";

interface ITokenToolTipProps {
  descriptions: string;
}
export default function TokenToolTip({ children, descriptions }: PropsWithChildren<ITokenToolTipProps>) {


  return (
    <Tooltip placement="top">
      <Tooltip.Trigger>
        {children}
      </Tooltip.Trigger>

      <Tooltip.Content
        enterStyle={{ x: 0, y: -5, opacity: 0, scale: 0.9 }}
        exitStyle={{ x: 0, y: -5, opacity: 0, scale: 0.9 }}
        scale={1}
        x={0}
        y={0}
        opacity={1}
        animation={[
          'quick',
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}
      >
        <Tooltip.Arrow />
        <Paragraph>
          {descriptions}
        </Paragraph>
      </Tooltip.Content>
    </Tooltip>
  )
}