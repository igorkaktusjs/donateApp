import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Listing } from 'src/interfaces/listingInterface';
import { LISTINGS } from 'src/data/index'

interface ListingsState {
  allListings: Listing[];
}

const initialState: ListingsState = {
  allListings: LISTINGS,
};

const listingsSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {},
});

export default listingsSlice.reducer;
