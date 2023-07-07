// import { compose, createStore, applyMiddleware } from 'redux';
// import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV === 'production' && logger].filter(
  Boolean
);

// const thunkMiddleware = (store) => (next) => (action) => {
//   if(typeof(action) === 'function'){
//     action(dispatch);
//   }
// }

// const composeEnhancer =
//   (process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   blacklist: ['user'],
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWares),
});

// export const persistor = persistStore(store);