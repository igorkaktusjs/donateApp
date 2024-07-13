import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userProfiles } from '@/src/data/userProfiles';

import {Review, Address, UserProfile } from 'src/interfaces/userProfileInterface'

interface UserProfilesState {
  userProfiles: UserProfile[];
}

const initialState: UserProfilesState = {
  userProfiles
};

const userProfilesSlice = createSlice({
  name: 'userProfiles',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<{ userId: number; listingId: number }>) => {
      const user = state.userProfiles.find(user => user.id === action.payload.userId);
      if (user) {
        user.wishlist.listing_ids.push(action.payload.listingId);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<{ userId: number; listingId: number }>) => {
      const user = state.userProfiles.find(user => user.id === action.payload.userId);
      if (user) {
        user.wishlist.listing_ids = user.wishlist.listing_ids.filter(id => id !== action.payload.listingId);
      }
    },
    toggleWishlistItem: (state, action: PayloadAction<{ userId: number; listingId: number }>) => {
      const user = state.userProfiles.find(user => user.id === action.payload.userId);
      if (user) {
        if (user.wishlist.listing_ids.includes(action.payload.listingId)) {
            user.wishlist.listing_ids = user.wishlist.listing_ids.filter(id => id !== action.payload.listingId);
        } else {
            user.wishlist.listing_ids.push(action.payload.listingId);
        }
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist, toggleWishlistItem } = userProfilesSlice.actions;

export default userProfilesSlice.reducer;
