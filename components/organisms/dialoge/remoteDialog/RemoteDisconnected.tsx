import {Button, Dialog, SizableText, XStack, YStack} from "tamagui";
import {useRemote} from "@/hooks/remoteHooks";

export interface IRemoteDisconnectedProps{
    onCancelConnect: () => void;
}
export default function RemoteDisconnected(props: IRemoteDisconnectedProps) {
    const { disconnectRemote, reconnectRemote } = useRemote();


    const handleCancel = async () => {
        await disconnectRemote();
        props.onCancelConnect();
    };
    const handleReconnect = async () => {
        await reconnectRemote();
    };

    return (
      <>
          <Dialog.Description>
              <YStack>
                  <SizableText>서버와의 연결이 끊어졌습니다.</SizableText>
                  <SizableText>재연결을 시도하시겠습니까?</SizableText>
              </YStack>
          </Dialog.Description>
          <XStack>
              <Button onPress={handleCancel}>취소</Button>
              <Button onPress={handleReconnect}>재연결</Button>
          </XStack>
      </>

    )
}