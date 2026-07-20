// lib/features/user/userSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "@/assets/assets";

interface UserState {
    data: User | null;
    loading: boolean;
}

const userSlice = createSlice({
    name: "user",
    initialState: {
        data: null,
        loading: true,
    } as UserState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.data = action.payload;
            state.loading = false;
        },
        clearUser: (state) => {
            state.data = null;
            state.loading = false;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
