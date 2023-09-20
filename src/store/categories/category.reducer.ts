import { AnyAction } from 'redux';

import { Category } from './category.types.ts';

import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from './category.action.ts';

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as AnyAction
): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return { ...state, categories: action.payload, isLoading: false };
  }

  if (fetchCategoriesFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
};


// import { createSlice } from "@reduxjs/toolkit";

// export const CATEGORIES_INITIAL_STATE = {
//   categories: [],
// };

// export const categoriesSlice = createSlice({
//   name: 'categories',
//   initialState: CATEGORIES_INITIAL_STATE,
//   reducers: {
//     setCategories(state, action){
//       state.categories = action.payload;
//     },
//   },
// });

// export const {setCategories} = categoriesSlice.actions;

// export const categoriesReducer = categoriesSlice.reducer;


// import { CATEGORIES_ACTION_TYPES } from './category.types';

// export const CATEGORIES_INITIAL_STATE = {
//   categories: [],
//   isLoading: false,
//   error: null,
// };

// export const categoriesReducer = (
//   state = CATEGORIES_INITIAL_STATE,
//   action = {}
// ) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
//       return{...state, isLoading: true};
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
//         return{...state, error: payload, isLoading: false};
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
//       return { ...state, categories: payload, isLoading: false};
//     default:
//       return state;
//   }
// };