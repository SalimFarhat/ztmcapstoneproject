import { takeLatest, all, call, put } from 'typed-redux-saga/macro';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from './category.action';

import { CATEGORIES_ACTION_TYPES } from './category.types';

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield* call(getCategoriesAndDocuments);
    yield* put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error));
  }
}

export function* onFetchCategories() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}

// before changing

// import { takeLatest, all, call, put } from 'redux-saga/effects';

// import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils.js';

// import {
//   fetchCategoriesSuccess,
//   fetchCategoriesFailed,
// } from './category.action.js';

// import { CATEGORIES_ACTION_TYPES } from './category.types.js';

// export function* fetchCategoriesAsync() {
//   try {
//     const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
//     yield put(fetchCategoriesSuccess(categoriesArray));
//   } catch (error) {
//     yield put(fetchCategoriesFailed(error));
//   }
// }

// export function* onFetchCategories() {
//   yield takeLatest(
//     CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
//     fetchCategoriesAsync
//   );
// }

// export function* categoriesSaga() {
//   yield all([call(onFetchCategories)]);
// }