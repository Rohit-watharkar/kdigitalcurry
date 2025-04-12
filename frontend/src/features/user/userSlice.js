import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: null,
  courses: [],
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  
    setUser: (state, action) => {
      state.user = action.payload;
    },
 
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
  },
});


export const { setUser, setCourses } = userSlice.actions;


export default userSlice.reducer;
