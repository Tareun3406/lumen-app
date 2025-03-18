import {Button, Dialog, Unspaced} from "tamagui";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks";
import {selectRemote, setShowRemoteDialog} from "@/store/slices/remoteSlice";
import { X } from '@tamagui/lucide-icons'
import React, {useEffect, useState} from "react";
import {useRemote} from "@/hooks/remoteHooks";

export default function RemoteDialog() {
  const { showRemoteDialog } = useAppSelector(selectRemote)
  const dispatch = useAppDispatch()

  const [selectType, setSelectType] = useState<"NONE" | "HOST" | "JOIN" | "PENDING" | "CONNECTED" | "DISCONNECTED">(
    "NONE"
  );
  const { socketStatus } = useAppSelector(selectRemote);

  const { disconnectRemote, reconnectRemote } = useRemote();
  useEffect(() => {
    if (socketStatus === "CONNECTED") setSelectType("CONNECTED");
    else if (socketStatus === "NONE") setSelectType("NONE");
    else if (socketStatus === "DISCONNECTED") setSelectType("DISCONNECTED");
  }, [socketStatus]);

  const handleCancel = async () => {
    await disconnectRemote();
    setSelectType("NONE");
  };
  const handleReconnect = async () => {
    await reconnectRemote();
  };


  return   (
  <Dialog modal open={showRemoteDialog}>
    <Dialog.Portal >
      <Dialog.Overlay key="overlay"
                      // backgroundColor="$shadow6"
                      animation="slow"
                      enterStyle={{ opacity: 0 }}
                      exitStyle={{ opacity: 0 }}
      />
      <Dialog.Content
        bordered
        elevate
        key="content"
        animateOnly={['transform', 'opacity']}
        animation={[
          'quicker',
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}
        enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
        exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
        gap="$4"
      >
        <Dialog.Title >
          리모트 연결
        </Dialog.Title>
        <Dialog.Description >
          리모트 기능 내용
        </Dialog.Description>
        <Button onPress={() => dispatch(setShowRemoteDialog(false))}>닫기</Button>

        <Unspaced>
          <Button
            position="absolute"
            // top="$3"
            // right="$3"
            size="$2"
            circular
            icon={X}
            onPress={() => dispatch(setShowRemoteDialog(false))}
          />
        </Unspaced>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog>
    )


}