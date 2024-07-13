import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = 'http://192.168.0.3:8081/src/data/data.json';

type  GetCategoryState =  {
  filters: Array<string>;
  filtersLoadingStatus: string;
  currentFilter: string;
}

const initialState: GetCategoryState = {
  filters: [],
  filtersLoadingStatus: "idle",
  currentFilter: "Home",
};

export const getCategory = createAsyncThunk(
  "filters/getCategory",
  async () => {
      try {
        const response = await axios.get(API_URL);
          return response.data.CATEGORY;
      } catch(err) {
          return (console.log(err))
      }
  }
);

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    selectedFilter: (state, action: PayloadAction<string>) => {
      state.currentFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state, action) => {
        state.filtersLoadingStatus = "loading";
      })
      .addCase(
        getCategory.fulfilled,
        (state, action: PayloadAction<any>) => {
          (state.filtersLoadingStatus = "seccess"),
          (state.filters = action.payload);
        }
      )
      .addCase(getCategory.rejected, (state, action) => {
        state.filtersLoadingStatus = "failed";
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = filtersSlice;

export default reducer;

export const { selectedFilter } = actions;
