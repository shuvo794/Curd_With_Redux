import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
  "createuser",
  async (data, { rejectWithValue }) => {
    const res = await fetch(
      "https://6614ff462fc47b4cf27dae4a.mockapi.io/curd",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "test",
        }),
      }
    );

    try {
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
});

export default userDetailSlice.reducer;
