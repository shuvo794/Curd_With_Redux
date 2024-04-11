import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// create Action

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
        body: JSON.stringify(data),
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

// Read Action
export const ReadUser = createAsyncThunk(
  "readuser",
  async (_, { rejectWithValue }) => {
    const res = await fetch("https://6614ff462fc47b4cf27dae4a.mockapi.io/curd");
    try {
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `https://6614ff462fc47b4cf27dae4a.mockapi.io/curd/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue({ message: error.message });
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
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
    builder.addCase(ReadUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(ReadUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(ReadUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
    builder.addCase(deleteUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;

      console.log("delete", action.payload);
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export default userDetailSlice.reducer;
