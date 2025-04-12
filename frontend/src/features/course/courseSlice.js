import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    addCourse: (state, action) => {
      state.courses.push(action.payload);
    },
    removeCourse: (state, action) => {
      state.courses = state.courses.filter(course => course.id !== action.payload.id);
    },
  },
});

export const { setCourses, addCourse, removeCourse } = courseSlice.actions;
export default courseSlice.reducer;
