import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../api";

export interface Data {
  name: string;
  Dob: string;
  email: string;
  gender: string;
  phone: string;
  address: string;
  healthIssue: string;
}

export const addData = createAsyncThunk(
  "data/addData",
  async (payload: {
    name: string;
    DOB: string;
    email: string;
    gender: string;
    phone: any;
    address: string;
    healthIssue: string;
  }) => {
    const res = await api.post("/savePatient", payload);
    return res.data;
  }
);

interface DataState {
  list: Data[];
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  list: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "Datas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addData.fulfilled, (state, action) => {
      state.list.push(action.payload);
    });
  },
});

export default dataSlice.reducer;