import { createSlice } from "@reduxjs/toolkit";
const initialuserNameState = { userName: ""};

const userNameSlice = createSlice({
  name: "userName",
  initialState: initialuserNameState,
  reducers: {
    set(state, actions) {
      state.userName = actions.payload;
    }
  },
});
export const userNameActions = userNameSlice.actions;

export default userNameSlice.reducer;
