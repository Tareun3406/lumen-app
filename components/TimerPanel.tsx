import {Button, XStack, YStack} from "tamagui";

export default function TimerPanel() {
  return (
    <XStack theme={"blue"}>
      <YStack>
        <Button>30:00</Button>
        <Button size="$6">
          10
        </Button>
      </YStack>
    </XStack>
  )
}