// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userChoicesReducer from "./slices/userChoicesSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // utilise le local storage

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userChoicesReducer);

export const store = configureStore({
  reducer: {
    userChoices: persistedReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
