import { createSlice } from "@reduxjs/toolkit";

const repositories = createSlice({
  name: "repositories",
  initialState: [],
  reducers: {
    storeDevData: (_, action) => action.payload,
  },
});

export default repositories;

export const { storeDevData } = repositories.actions;
