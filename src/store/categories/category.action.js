import { CATEGORIES_ACTION_TYPES } from './category.types';
import { createAction } from '../../utils/reducers/reducer.utils';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export const fetchCategoriesStart = () => {
  createAction (CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
  }
  
export const fetchCategoriesSuccess = (categoriesArray) => {
  createAction (CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);
  }
  
export const fetchCategoriesFailure = (error) => {
  createAction (CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
  }


// export const fetchCategoriesAsync = () => {return async (dispatch) =>  {
//   try{
//     const categoriesArray = await getCategoriesAndDocuments('collections');
//     dispatch(fetchCategoriesSuccess(categoriesArray));
//   }catch(error){
//     dispatch(fetchCategoriesFailure(error))

//   }
//   }
// }

export const fetchCategoriesStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
      dispatch(fetchCategoriesFailure(error));
    }
  };
};