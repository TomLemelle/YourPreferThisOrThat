import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserChoicesState {
  choices: string[];
  currentIndex: number;
}

const initialState: UserChoicesState = {
  choices: [],
  currentIndex: 0,
};

const userChoicesSlice = createSlice({
  name: "userChoices",
  initialState,
  reducers: {
    addChoice: (state, action: PayloadAction<string>) => {
      state.choices.push(action.payload);
      state.currentIndex += 1;
    },
    gameOver: (state) => {
      state.choices = [];
      state.currentIndex = 0;
    },
    setCurrentIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload;
    },
  },
});

export const { addChoice, gameOver, setCurrentIndex } =
  userChoicesSlice.actions;
export default userChoicesSlice.reducer;
