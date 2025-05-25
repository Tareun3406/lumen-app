import {
    clearReadyTimerInterval,
    decreaseReadyTimerTime,
    preventReadyTimer,
    selectTimer,
    setReadyTimerIntervalId,
    setReadyTimerTime,
    toggleReadyTimer,
    toggleGameTimer,
    clearGameTimerInterval,
    decreaseGameTimerTime,
    setGameTimerIntervalId,
    setGameTimerTime,
    preventGameTimer
} from "@/store/slices/timerSlice";
import {useAppDispatch, useAppSelector} from "@/hooks/storeHooks";
import {useRemote} from "@/hooks/remoteHooks";
import {selectRemote} from "@/store/slices/remoteSlice";
import {useEffect} from "react";

export function useTimer() {
    const dispatch = useAppDispatch();
    const { readyTimer, gameTimer } = useAppSelector(selectTimer);
    const { publishTimer } = useRemote();
    const { hasControl, socketStatus } = useAppSelector(selectRemote);

// Action
    const toggleReadyTimerAction = () => {
        if (!hasControl && socketStatus === "CONNECTED") return;
        if (socketStatus === "CONNECTED") {
            publishTimer(!readyTimer.toggle);
            return;
        }
        dispatch(toggleReadyTimer(!readyTimer.toggle));
    };

    const toggleGameTimerAction = () => {
        if (!hasControl && socketStatus === "CONNECTED") return;
        if (socketStatus === "CONNECTED") {
            // publishTimer(!gameTimer.toggle); todo 현재 레디 타이머만 퍼블리시 가능. 변경 필요.
            return;
        }
        dispatch(toggleGameTimer(!gameTimer.toggle));
    };


// Effect
    // 레디 타이머
    useEffect(() => {
        if (readyTimer.time < 1) {
            dispatch(clearReadyTimerInterval())
        }
    }, [readyTimer.time]);

    useEffect(() => {
        if (readyTimer.preventTrigger) return;
        if (readyTimer.toggle) {
            dispatch(setReadyTimerIntervalId( // @ts-ignore
                setInterval(() => {
                    dispatch(decreaseReadyTimerTime());
                }, 1000)
            ))
        } else {
            dispatch(clearReadyTimerInterval())
            dispatch(setReadyTimerTime(10));
        }
        dispatch(preventReadyTimer());
    }, [readyTimer.toggle]);

    // 게임 타이머
    useEffect(() => {
        if (gameTimer.time < 1) {
            dispatch(clearGameTimerInterval())
        }
    }, [gameTimer.time]);

    useEffect(() => {
        if (gameTimer.preventTrigger) return;
        if (gameTimer.toggle) {
            dispatch(setGameTimerIntervalId( // @ts-ignore
                setInterval(() => {
                    dispatch(decreaseGameTimerTime());
                }, 1000)
            ))
        } else {
            dispatch(clearGameTimerInterval())
            dispatch(setGameTimerTime(60 * 30));
        }
        dispatch(preventGameTimer());
    }, [gameTimer.toggle]);

    return {
        toggleReadyTimerAction,
        toggleGameTimerAction
    }
}