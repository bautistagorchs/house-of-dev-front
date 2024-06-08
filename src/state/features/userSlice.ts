import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email: string;
  name: string;
  last_name: string;
  phone_number: number;
  is_admin: boolean;
  is_confirmed: boolean;
}

const initialState: UserState = {
  email: "",
  name: "",
  last_name: "",
  phone_number: 0,
  is_admin: false,
  is_confirmed: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.last_name = action.payload.last_name;
      state.phone_number = action.payload.phone_number;
      state.is_admin = action.payload.is_admin;
      state.is_confirmed = action.payload.is_confirmed;
    },
    clearUser: (state) => {
      state.email = "";
      state.name = "";
      state.last_name = "";
      state.is_admin = false;
      state.is_confirmed = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
