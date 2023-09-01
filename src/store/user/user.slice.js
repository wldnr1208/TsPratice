import { createSlice } from "@reduxjs/toolkit";

//로컬스토리지 getitem user에 값이 있다면 json parse해서 로컬스토리지에 user값을 담을거다. 아니면은
//email: "", token: "", id: "" 다 빈값으로 사용할 것이다.
const initialState = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : { email: "", token: "", id: "" };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;

      localStorage.setItem("user", JSON.stringify(state));
    },

    removeUser: (state) => {
      state.email = "";
      state.token = "";
      state.id = "";

      localStorage.setItem("user", JSON.stringify(state));
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
