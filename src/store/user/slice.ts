import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { logout } from "../../services/auth";
import { fetchUser } from "../../services/user";

const initialState: IUserData = {
  firstName: "",
  lastName: "",
  image: "",
  id: "",
  email: "",
  role: null,
};

export const logoutUser = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      return await logout();
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export const getUserInfo = createAsyncThunk<any, string>(
  "user/login",
  async (id, { rejectWithValue }) => {
    try {
      return await fetchUser(id);
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getUserInfo.fulfilled,
      (state, action: PayloadAction<IUserData>) => {
        return { ...action.payload };
      }
    );
    builder.addCase(logoutUser.fulfilled, () => {
      return { ...initialState };
    });
  },
});
export default authSlice.reducer;
