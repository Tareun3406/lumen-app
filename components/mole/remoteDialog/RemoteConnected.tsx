import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks";
import {selectRemote, showNotificationMessage} from "@/store/slices/remoteSlice";
import {useCallback, useState} from "react";
import {Button, SizableText, XStack, YStack} from "tamagui";

export default function RemoteConnected() {
    const { username, playerList, observerList, playerInviteCode, observerInviteCode, hostName } =
      useAppSelector(selectRemote);
    const dispatch = useAppDispatch();

    const [viewPlayerCode, setViewPlayerCode] = useState<boolean>(false);
    const [viewObserverCode, setViewObserverCode] = useState<boolean>(false);

    const onClickPlayerCodeChip = useCallback(() => {
        if (!viewPlayerCode) {
            setViewPlayerCode(true);
        }
        navigator.clipboard.writeText(playerInviteCode);
        dispatch(showNotificationMessage({ message: "클립보드에 복사 하였습니다.", status: "info" }));
    }, [viewPlayerCode, playerInviteCode, dispatch]);

    const onClickObserverCodeChip = useCallback(() => {
        if (!viewObserverCode) {
            setViewObserverCode(true);
        }
        navigator.clipboard.writeText(observerInviteCode);
        dispatch(showNotificationMessage({ message: "클립보드에 복사 하였습니다.", status: "info" }));
    }, [viewObserverCode, observerInviteCode, dispatch]);

    const getUsernameClass = (targetName: string) => {
        if (targetName === hostName) return "red";
        if (targetName === username) return "blue";
        return "";
    };

    return (
      <YStack>
          {hostName === username && (
            <XStack>
                <YStack>
                    <SizableText>플레이어 초대코드</SizableText>
                    <Button onPress={onClickPlayerCodeChip}>{viewPlayerCode ? playerInviteCode : "초대코드 확인"}</Button>
                </YStack>
                <YStack>
                    <SizableText>관전자 초대코드</SizableText>
                    <Button onPress={onClickObserverCodeChip}>{viewObserverCode ? observerInviteCode : "초대코드 확인"}</Button>
                </YStack>
            </XStack>
          )}
          <XStack>
              <YStack>
                  <SizableText>플레이어 목록</SizableText>
                  <YStack>
                      {playerList.map(player => <SizableText>{player}</SizableText>)}
                  </YStack>
              </YStack>
              <YStack>
                  <SizableText>관전자 목록</SizableText>
                  <YStack>
                      {observerList.map(observer=> <SizableText>{observer}</SizableText>)}
                  </YStack>
              </YStack>
          </XStack>
      </YStack>
    )
}