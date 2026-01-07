import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api";

export interface Det {
  name: string;
  email: string;
  password: string;
}

export const addDetail = createAsyncThunk(
  "detail/addDetail",
  async (payload: { name: string; email: string; password: string }) => {
    const res = await api.post("/saveUser", payload);
    return res.data;
  }
);

export const fetchDetail = createAsyncThunk("detail/fetchDetail", async () => {
  const res = await api.get("/getUsers");
  return res.data;
});

interface DetailState {
  list: Det[];
  loading: boolean;
  error: string | null;
}

const initialState: DetailState = {
  list: [],
  loading: false,
  error: null,
};

const detailSlice = createSlice({
  name: "Details",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDetail.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchDetail.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "Failed to fetch Details!!";
    });

    builder.addCase(addDetail.fulfilled, (state, action) => {
      state.list.push(action.payload);
    });
  },
});

export default detailSlice.reducer;