import { AnyAction } from 'redux';

import {
  signInSuccess,
  signOutSuccess,
  signInFailed,
  signUpFailed,
  signOutFailed,
} from './user.action.ts';

import { UserData } from '../../utils/firebase/firebase.utils.ts';

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  if (
    signOutFailed.match(action) ||
    signInFailed.match(action) ||
    signUpFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  }

  return state;
};

// import { createSlice } from "@reduxjs/toolkit";

// const INITIAL_STATE = {
//     currentUser: null,
//     test: {a: 1},
// };

// export const userSlice = createSlice({
//     name: 'user',
//     initialState: INITIAL_STATE,
//     reducers: {
//         setCurrentUser(state, action){
//             state.currentUser = action.payload;
//         },
//     },
// });

// export const {setCurrentUser} = userSlice.actions;

// export const userReducer = userSlice.reducer; 









// import { USER_ACTION_TYPES } from './user.types';






// export const INITIAL_STATE = {
//     currentUser: null,
// }

// export const userReducer = (state = INITIAL_STATE, action) => {
//     const {type, payload} = action;
    
//     switch(type){
//         case USER_ACTION_TYPES.SET_CURRENT_USER:
//             return{
//                 ...state,
//                 currentUser: payload
//             }
//         default:
//             return state;

//     }
// }