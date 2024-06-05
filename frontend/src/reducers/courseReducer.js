// courseSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: [],
  loading: false,
  error: null,
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setCourses(state, action) {
      state.courses = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const { setCourses, setLoading, setError, clearError } = courseSlice.actions;

export default courseSlice.reducer;
