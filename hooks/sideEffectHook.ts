import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks";
import {selectBoard, setPreventTrigger} from "@/store/slices/boardSlice";
import {getStompClient, selectRemote} from "@/store/slices/remoteSlice";

export function useBoardPublisher() {
  const boardState = useAppSelector(selectBoard);
  const { roomId, hasControl, socketStatus } = useAppSelector(selectRemote);
  const dispatch = useAppDispatch();

  const publishUpdate = () => {
    if (!hasControl || boardState.preventTrigger) return;
    if (socketStatus !== "CONNECTED") return;
    dispatch(setPreventTrigger(true));
    const stompClient = getStompClient();
    stompClient?.publish({
      destination: `/app/remote/updateBoard`,
      headers: { roomId },
      body: JSON.stringify(boardState)
    });
  };

  useEffect(() => {
    if (hasControl && !boardState.preventTrigger) {
      publishUpdate();
    }
  }, [boardState.triggerPublish, boardState.preventTrigger]);
}