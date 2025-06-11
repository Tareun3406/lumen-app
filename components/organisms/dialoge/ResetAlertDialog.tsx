import {AlertDialog, Button, XStack, YStack} from "tamagui";

interface IResetAlertDialogProps {
  open: boolean;
  close: () => void;
  action: () => void;
}
export default function ResetAlertDialog(props: IResetAlertDialogProps) {
  return (
    <AlertDialog open={props.open}>
      <AlertDialog.Portal theme={"yellow"}>
        <AlertDialog.Content>
          <YStack gap={"$4"}>
            <AlertDialog.Title>초기화</AlertDialog.Title>
            <AlertDialog.Description>정말로 초기화 하시겠습니까? 이 작업은 되돌릴 수 없습니다.</AlertDialog.Description>
            <XStack gap="$3" // @ts-ignore
                    justifyContent="flex-end">
              <AlertDialog.Cancel asChild>
                <Button onPress={props.close}>취소</Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild theme={"red"}>
                <Button theme="accent" onPress={() => { props.action(); props.close();}}>초기화</Button>
              </AlertDialog.Action>
            </XStack>
          </YStack>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  )
}