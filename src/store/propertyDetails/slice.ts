import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPropertyDetails } from "../../services/properties";

interface ISliceState {
  details: IPropertyDetails;
}

const initialState: ISliceState = {
  details: null,
};

export const getDetails = createAsyncThunk<any, string>(
  "propertyDetails/setDetails",
  async (id, { rejectWithValue }) => {
    try {
      return await getPropertyDetails(id);
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

const authSlice = createSlice({
  name: "propertyDetails",
  initialState,
  reducers: {
    resetDetails() {
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getDetails.fulfilled,
      (state, action: PayloadAction<IPropertyDetails>) => {
        state.details = action.payload;
      }
    );
  },
});

export const { resetDetails } = authSlice.actions;
export default authSlice.reducer;
