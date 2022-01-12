import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
// import { PostDataType } from "data/types";

// export interface MediaRunningState {
//   postData?: PostDataType;
//   state?: "loading" | "playing" | "paused" | "ended" | null;
//   listPostAudio?: PostDataType[];
// }

const initialState = {};

export const mediaRunningSlice = createSlice({
  name: "mediaRunning",
  initialState,
  reducers: {
    changeCurrentMediaRunning: (
      state,
      action
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    changeStateMediaRunning: (
      state,
      action
    ) => {
      return {
        ...state,
        state: action.payload,
      };
    },
    removeMediaRunning: (state) => {
      return {
        listPostAudio: state.listPostAudio,
      };
    },
    //
    addNewListPostAudio: (state, action) => {
      return {
        ...state,
        listPostAudio: [...(state.listPostAudio || []), action.payload],
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeCurrentMediaRunning,
  changeStateMediaRunning,
  removeMediaRunning,
  addNewListPostAudio,
} = mediaRunningSlice.actions;

export const selectCurrentMediaRunning = (state) =>
  state.mediaRunning;

export default mediaRunningSlice.reducer;
