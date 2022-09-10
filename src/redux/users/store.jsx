import { contactApi } from 'redux/contacts/contactsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from 'redux/contacts/filterSlice';

export const store = configureStore({
  reducer: {
    // users: usersReducer,
    [contactApi.reducerPath]: contactApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

setupListeners(store.dispatch);
