import {Button, Dialog, Unspaced} from "tamagui";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks";
import {selectRemote, setShowRemoteDialog} from "@/store/slices/remoteSlice";
import { X } from '@tamagui/lucide-icons'
import React, {useEffect, useMemo, useState} from "react";
import {useRemote} from "@/hooks/remoteHooks";
import RemoteDefault from "@/components/organisms/dialoge/remoteDialog/RemoteDefault";
import RemoteHost from "@/components/organisms/dialoge/remoteDialog/RemoteHost";
import RemoteJoin from "@/components/organisms/dialoge/remoteDialog/RemoteJoin";
import RemoteConnected from "@/components/organisms/dialoge/remoteDialog/RemoteConnected";
import RemoteDisconnected from "@/components/organisms/dialoge/remoteDialog/RemoteDisconnected";

export default function RemoteDialog() {
  const { showRemoteDialog, socketStatus } = useAppSelector(selectRemote)
  const { disconnectRemote, reconnectRemote } = useRemote();
  const dispatch = useAppDispatch()

  const [selectType, setSelectType] = useState<"NONE" | "HOST" | "JOIN" | "PENDING" | "CONNECTED" | "DISCONNECTED">(
    "NONE"
  );

  const handleCancel = async () => {
    await disconnectRemote();
    setSelectType("NONE");
  };
  const handleReconnect = async () => {
    await reconnectRemote();
  };

  useEffect(() => {
    if (socketStatus === "CONNECTED") setSelectType("CONNECTED");
    else if (socketStatus === "NONE") setSelectType("NONE");
    else if (socketStatus === "DISCONNECTED") setSelectType("DISCONNECTED");
  }, [socketStatus]);

  const dialogBody = useMemo(() => {
    switch (selectType) {
      case "NONE":
        return <RemoteDefault onClickCreateCode={() => setSelectType("HOST")} onClickJoinWithCode={() => setSelectType("JOIN")}/>
      case "HOST" :
        return <RemoteHost onClickBack={() => setSelectType("NONE")} onConnected={() => setSelectType("CONNECTED")}/> // todo onConnect 메서드 삭제
      case "JOIN" :
        return <RemoteJoin onClickBack={() => setSelectType("NONE")} onConnected={() => setSelectType("CONNECTED")}/>
      case "CONNECTED" :
        return <RemoteConnected />
      case "DISCONNECTED" :
        return <RemoteDisconnected onCancelConnect={() => setSelectType("NONE")}/>
    }
    return <RemoteDefault onClickCreateCode={() => setSelectType("HOST")} onClickJoinWithCode={() => setSelectType("JOIN")}/>
  }, [selectType])


  return   (
  <Dialog modal open={showRemoteDialog}>
    <Dialog.Portal >
      <Dialog.Overlay key="overlay" // @ts-ignore
                      backgroundColor="$shadow6"
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
        {dialogBody}
        <Unspaced>
          <Button
            position="absolute"   // @ts-ignore
            top="$3"
            right="$3"
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