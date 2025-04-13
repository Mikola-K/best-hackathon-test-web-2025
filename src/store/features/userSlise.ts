import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  userRole: null | string;
  userData: null | Object
}

const initialState: UserState = {
  userRole: null,
  userData: {}
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserRole: (state, action: PayloadAction<string | null>) => {
      state.userRole = action.payload;
    },
    setUserData: (state, action: PayloadAction<any | null>) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserRole, setUserData } = userSlice.actions;

export const selectUserStore = (state: { user: UserState }) => state.user;
export const selectUserRoleStore = (state: { user: UserState }) => state.user.userRole;

export default userSlice.reducer;
