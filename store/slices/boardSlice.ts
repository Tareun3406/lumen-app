import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import characters, { Character } from "@/constants/character";
import _ from "lodash";

export interface PlayerState {
  isFirst: boolean;
  currentHp: number;
  damagedHp: number;
  character: Character;
  fp: number;
}
export interface IDamageLog {
  isFirstPlayer: boolean;
  type: "DAMAGE" | "HEAL";
  payload: number;
  result: number;
}

export interface BoardState {
  firstPlayer: PlayerState;
  secondPlayer: PlayerState;
  damageLogs: IDamageLog[];
  triggerPublish: boolean;
  preventTrigger: boolean;
}

const noneCharacter: Character = {
  name: "선택없음",
  hp: {
    maxHp: 1000,
    hpHand: []
  },
  tokens: [],
};

const initialState: BoardState = {
  firstPlayer: {
    isFirst: true,
    currentHp: 5000,
    damagedHp: 0,
    character: noneCharacter,
    fp: 0
  },
  secondPlayer: {
    isFirst: false,
    currentHp: 5000,
    damagedHp: 0,
    character: noneCharacter,
    fp: 0
  },
  damageLogs: [],
  triggerPublish: false,
  preventTrigger: true
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    initialize: state => {
      state.firstPlayer.character = _.cloneDeep(characters.find(character => state.firstPlayer.character.name === character.name))! // 타입 단언 주의
      state.firstPlayer.currentHp = state.firstPlayer.character.hp.maxHp;
      state.firstPlayer.damagedHp = 0;

      state.secondPlayer.character = _.cloneDeep(characters.find(character => state.secondPlayer.character.name === character.name))! // 타입 단언 주의
      state.secondPlayer.currentHp = state.secondPlayer.character.hp.maxHp;
      state.secondPlayer.damagedHp = 0;

      state.firstPlayer.fp = 0;
      state.secondPlayer.fp = 0;

      state.damageLogs = [];
      state.triggerPublish = !state.triggerPublish;
    },
    damageToFirst: (state, action: PayloadAction<number>) => {
      state.firstPlayer.damagedHp = action.payload;
      state.firstPlayer.currentHp = Math.max(state.firstPlayer.currentHp - action.payload, 0);
    },
    damageToSecond: (state, action: PayloadAction<number>) => {
      state.secondPlayer.damagedHp = action.payload;
      state.secondPlayer.currentHp = Math.max(state.secondPlayer.currentHp - action.payload, 0);
    },
    healToFirst: (state, action: PayloadAction<number>) => {
      state.firstPlayer.damagedHp = 0;
      state.firstPlayer.currentHp = Math.min(state.firstPlayer.currentHp + action.payload, 5000);
    },
    healToSecond: (state, action: PayloadAction<number>) => {
      state.secondPlayer.damagedHp = 0;
      state.secondPlayer.currentHp = Math.min(state.secondPlayer.currentHp + action.payload, 5000);
    },
    setHealthToFirst: (state, action: PayloadAction<number>) => {
      const damage = action.payload - state.firstPlayer.currentHp;
      state.firstPlayer.damagedHp = damage > 0 ? 0 : damage;
      state.firstPlayer.currentHp = action.payload;
    },
    setHealthToSecond: (state, action: PayloadAction<number>) => {
      const damage = action.payload - state.secondPlayer.currentHp;
      state.secondPlayer.damagedHp = damage > 0 ? 0 : damage;
      state.secondPlayer.currentHp = action.payload;
    },
    addToDamageLogs: (state, action: PayloadAction<IDamageLog>) => {
      state.damageLogs.push(action.payload)
    },
    removeFromDamageLogs: (state, action: PayloadAction<number>) => {
      state.damageLogs.splice(action.payload, 1)
    },

    setCharacterToFirst: (state, action: PayloadAction<Character>) => {
      state.firstPlayer.character = action.payload;
    },
    setCharacterToSecond: (state, action: PayloadAction<Character>) => {
      state.secondPlayer.character = action.payload;
    },
    setTokenToggleToFirst: (state, action: PayloadAction<{ index: number; value: boolean }>) => {
      state.firstPlayer.character.tokens[action.payload.index].toggle = action.payload.value;
    },
    setTokenToggleToSecond: (state, action: PayloadAction<{ index: number; value: boolean }>) => {
      state.secondPlayer.character.tokens[action.payload.index].toggle = action.payload.value;
    },
    setTokenToggleToFirstAsList: (state, action: PayloadAction<{ [key: number]: boolean }>) => {
      state.firstPlayer.character.tokens = state.firstPlayer.character.tokens.map((item, index) => ({
        ...item,
        toggle: action.payload[index] ?? item.toggle
      }));
    },

    setTokenToggleToSecondAsList: (state, action: PayloadAction<{ [key: number]: boolean }>) => {
      state.secondPlayer.character.tokens = state.secondPlayer.character.tokens.map((item, index) => ({
        ...item,
        toggle: action.payload[index] ?? item.toggle
      }));
    },
    changeTokenToggleToFirst: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      const token = state.firstPlayer.character.tokens[index];
      if (token.type === "TOGGLE") {
        state.firstPlayer.character.tokens[index].toggle = !token.toggle;
      }
    },
    changeTokenToggleToSecond: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      const token = state.secondPlayer.character.tokens[index];
      if (token.type === "TOGGLE") {
        state.secondPlayer.character.tokens[index].toggle = !token.toggle;
      }
    },
    addTokenToFirst: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      const token = state.firstPlayer.character.tokens[index];
      if (token.type === "COUNTER") {
        state.firstPlayer.character.tokens[index].count = Math.min(token.count! + 1, token.maxCount!);
      }
    },
    addTokenToSecond: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      const token = state.secondPlayer.character.tokens[index];
      if (token.type === "COUNTER") {
        state.secondPlayer.character.tokens[index].count = Math.min(token.count! + 1, token.maxCount!);
      }
    },
    removeTokenToFirst: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      const token = state.firstPlayer.character.tokens[index];
      if (token.type === "COUNTER" && !!token.count && !!token.maxCount) {
        state.firstPlayer.character.tokens[index].count = Math.max(token.count - 1, 0);
      }
    },
    removeTokenToSecond: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      const token = state.secondPlayer.character.tokens[index];
      if (token.type === "COUNTER" && !!token.count && !!token.maxCount) {
        state.secondPlayer.character.tokens[index].count = Math.max(token.count - 1, 0);
      }
    },
    setTokenCountToFirst: (state, action: PayloadAction<{ index: number; value: number }>) => {
      state.firstPlayer.character.tokens[action.payload.index].count = action.payload.value;
    },
    setTokenCountToSecond: (state, action: PayloadAction<{ index: number; value: number }>) => {
      state.secondPlayer.character.tokens[action.payload.index].count = action.payload.value;
    },
    increaseFpToFirst: (state, action: PayloadAction<number>) => {
      state.firstPlayer.fp += action.payload;
    },
    increaseFpToSecond: (state, action: PayloadAction<number>) => {
      state.secondPlayer.fp += action.payload;
    },
    decreaseFpToFirst: (state, action: PayloadAction<number>) => {
      state.firstPlayer.fp -= action.payload;
    },
    decreaseFpToSecond: (state, action: PayloadAction<number>) => {
      state.secondPlayer.fp -= action.payload;
    },
    resetFpToFirst: state => {
      state.firstPlayer.fp = 0;
    },
    resetFpToSecond: state => {
      state.secondPlayer.fp = 0;
    },
    deselectCharacterToFirst: state => {
      state.firstPlayer.character = noneCharacter;
    },
    deselectCharacterToSecond: state => {
      state.secondPlayer.character = noneCharacter;
    },
    setBoardState: (state, action: PayloadAction<BoardState>) => {
      const board = action.payload;
      state.firstPlayer = board.firstPlayer;
      state.secondPlayer = board.secondPlayer;
      state.damageLogs = board.damageLogs;
    },
    triggerPublish: state => {
      state.triggerPublish = !state.triggerPublish;
      state.preventTrigger = false;
    },
    setPreventTrigger: (state, action: PayloadAction<boolean>) => {
      state.preventTrigger = action.payload;
    }
  }
});

export const {
  initialize,
  damageToFirst,
  damageToSecond,
  healToFirst,
  healToSecond,
  setHealthToFirst,
  setHealthToSecond,
  addToDamageLogs,
  removeFromDamageLogs,
  setCharacterToFirst,
  setCharacterToSecond,
  changeTokenToggleToFirst,
  setTokenToggleToFirst,
  changeTokenToggleToSecond,
  setTokenToggleToSecond,
  setTokenToggleToFirstAsList,
  setTokenToggleToSecondAsList,
  addTokenToFirst,
  addTokenToSecond,
  removeTokenToFirst,
  removeTokenToSecond,
  setTokenCountToFirst,
  setTokenCountToSecond,
  increaseFpToFirst,
  increaseFpToSecond,
  decreaseFpToFirst,
  decreaseFpToSecond,
  resetFpToFirst,
  resetFpToSecond,
  deselectCharacterToFirst,
  deselectCharacterToSecond,
  setBoardState,
  triggerPublish,
  setPreventTrigger
} = boardSlice.actions;
export const selectBoard = (state: RootState) => state.board;
export const selectFirstPlayer = (state: RootState) => state.board.firstPlayer;
export const selectSecondPlayer = (state: RootState) => state.board.secondPlayer;
export const selectDamageLogs = (state: RootState) => state.board.damageLogs;

export default boardSlice.reducer;
