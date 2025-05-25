import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ITimer {
  time: number;
  toggle: boolean;
  preventTrigger: boolean;
  timerIntervalId: undefined | number;
}

export interface ITimerState {
  readyTimer: ITimer;
  gameTimer: ITimer;
}

const initialState: ITimerState = {
  readyTimer: {
    time: 10,
    toggle: false,
    preventTrigger: true,
    timerIntervalId: undefined
  },
  gameTimer: {
    time: 60 * 30, // 30분
    toggle: false,
    preventTrigger: true,
    timerIntervalId: undefined
  }
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    // 레디 타이머
    toggleReadyTimer: (state, action: PayloadAction<boolean>) => {
      state.readyTimer.preventTrigger = false;
      state.readyTimer.toggle = action.payload;
    },
    setReadyTimerTime: (state, action: PayloadAction<number>) => {
      state.readyTimer.time = action.payload;
    },
    decreaseReadyTimerTime: state => {
      state.readyTimer.time--;
    },
    preventReadyTimer: state => {
      state.readyTimer.preventTrigger = true;
    },
    setReadyTimerIntervalId: (state, action: PayloadAction<number>) => {
      if (state.readyTimer.timerIntervalId) {
        clearInterval(state.readyTimer.timerIntervalId);
      }
      state.readyTimer.timerIntervalId = action.payload
    },
    clearReadyTimerInterval: state => {
      if (!state.readyTimer.timerIntervalId) return;
      clearInterval(state.readyTimer.timerIntervalId);
    },

    // 게임 타이머
    toggleGameTimer: (state, action: PayloadAction<boolean>) => {
      state.gameTimer.preventTrigger = false;
      state.gameTimer.toggle = action.payload;
    },
    setGameTimerTime: (state, action: PayloadAction<number>) => {
      state.gameTimer.time = action.payload;
    },
    decreaseGameTimerTime: state => {
      state.gameTimer.time--;
    },
    preventGameTimer: state => {
      state.gameTimer.preventTrigger = true;
    },
    setGameTimerIntervalId: (state, action: PayloadAction<number>) => {
      if (state.gameTimer.timerIntervalId) {
        clearInterval(state.gameTimer.timerIntervalId);
      }
      state.gameTimer.timerIntervalId = action.payload
    },
    clearGameTimerInterval: state => {
      if (!state.gameTimer.timerIntervalId) return;
      clearInterval(state.gameTimer.timerIntervalId);
    }


  }
});

export const {
  toggleReadyTimer,
  setReadyTimerTime,
  decreaseReadyTimerTime,
  preventReadyTimer,
  setReadyTimerIntervalId,
  clearReadyTimerInterval,
  toggleGameTimer,
  setGameTimerTime,
  decreaseGameTimerTime,
  preventGameTimer,
  setGameTimerIntervalId,
  clearGameTimerInterval,
} = timerSlice.actions;
export const selectTimer = (state: RootState) => state.timer;
export default timerSlice.reducer;
