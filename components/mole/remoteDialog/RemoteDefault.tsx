import {Button, Dialog, SizableText, XStack, YStack} from "tamagui";
import React from "react";

export interface IRemoteDefaultProps {
  onClickCreateCode: () => void,
  onClickJoinWithCode: () => void
}
export default function RemoteDefault(props: IRemoteDefaultProps) {


  return (
    <>
      <Dialog.Title >
        리모트 연결
      </Dialog.Title>
      <Dialog.Description >
        <YStack>
          <SizableText>인터넷이 원활한 환경에서 이용해주세요</SizableText>
        </YStack>
      </Dialog.Description>
      <XStack gap={"$2"}>
        <Button onPress={props.onClickCreateCode}>초대코드 만들기</Button>
        <Button onPress={props.onClickJoinWithCode}>초대코드로 연결</Button>
      </XStack>
    </>
  )
}