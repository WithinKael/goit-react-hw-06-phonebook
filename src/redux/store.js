import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { phoneBookReducer } from './phoneBookReducer';

const phoneBookPersistConfig = {
  key: 'conctacts',
  storage,
  whitelist: ['contacts'],
};

export const store = configureStore({
  reducer: {
    phoneBook: persistReducer(phoneBookPersistConfig, phoneBookReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
