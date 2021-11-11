import { createSlice } from "@reduxjs/toolkit";

const repositories = createSlice({
  name: "repositories",
  initialState: [],
  reducers: {
    storeRepoData: (_, action) => action.payload,
  },
});

export default repositories;

export const { storeRepoData } = repositories.actions;
