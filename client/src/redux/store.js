import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./User/userSlice";
import cartReducer from "./Cart/cartSlice"
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store)