// src/features/user/userSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:5005/users";

// Thunk to fetch user data, including addresses
export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (userId: number) => {
    const response = await axios.get(`${BASE_URL}/${userId}`);
    return response.data;
  }
);
// Thunk to update user personal info
export const updateUserInfo = createAsyncThunk(
    'user/updateUserInfo',
    async ({ userId, updatedInfo }: { userId: number; updatedInfo: Partial<User> }) => {
      const response = await axios.patch(`${BASE_URL}/${userId}`, updatedInfo);
      return response.data;
    }
  );

// Thunk to add a new address for a user
export const addAddress = createAsyncThunk(
  "user/addAddress",
  async (
    { userId, address }: { userId: number; address: Address },
    { getState }
  ) => {
    const state = getState() as { user: UserState };
    const currentAddresses = state.user.user?.addresses || [];

    const response = await axios.patch(`${BASE_URL}/${userId}`, {
      addresses: [...currentAddresses, address],
    });
    return response.data;
  }
);

type Address = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  addresses: Address[];
};

type UserState = {
  user: User | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: UserState = {
  user: null,
  status: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Could not fetch user";
      })
      .addCase(updateUserInfo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserInfo.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = 'succeeded';
        state.user = action.payload; // Updates user information with the new data from the server
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Could not update user info';
      })
      .addCase(addAddress.fulfilled, (state, action: PayloadAction<User>) => {
        if (state.user) {
          state.user.addresses = action.payload.addresses;
        }
      });
  },
});


// export { fetchUser, updateUserInfo, addAddress };
// export const { resetUI, authLogout } = authSlice.actions;
export default userSlice.reducer;
