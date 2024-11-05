import { createSlice } from "@reduxjs/toolkit";
const initialuserNameState = { userName: "",theme:1};

const userNameSlice = createSlice({
  name: "userName",
  initialState: initialuserNameState,
  reducers: {
    set(state, actions) {
      state.userName = actions.payload;
    },
    setTheme(state,actions){
      state.theme=actions.payload
    }
  },
});
export const userNameActions = userNameSlice.actions;

export default userNameSlice.reducer;
