import { configureStore } from "@reduxjs/toolkit"
import filters from './filtersSlice'
import listingsReducer from './listingsSlice';
import userProfilesReducer from './userProfilesSlice';

import { useDispatch } from 'react-redux'

 const store = configureStore({
    reducer: {
        filters,
        listings: listingsReducer,
        userProfiles: userProfilesReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: false,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;


