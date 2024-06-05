import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Define your initial state here
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Define your standard reducers here
    // For example:
    someReducerAction: (state, action) => {
      // Update state based on the action payload
    }
  },
});

export const { someReducerAction } = authSlice.actions;
export default authSlice.reducer;
