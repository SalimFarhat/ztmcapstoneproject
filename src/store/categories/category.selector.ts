import { createSelector } from 'reselect';

import { RootState } from '../store';
import { CategoriesState } from './category.reducer';
import { CategoryMap } from './category.types';

const selectCategoryReducer = (state: RootState): CategoriesState => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);










// import { CategoriesState } from './category.reducer';
// import { createSelector } from 'reselect';
// import { CategoryMap } from './category.types';



// const selectCategoryReducer = (state): CategoriesState => state.categories;

// export const selectCategories = createSelector(
//   [selectCategoryReducer],
//   (categoriesSlice) => categoriesSlice.categories
// );

// export const selectCategoriesMap = createSelector(
//   [selectCategories],
//   (categories): CategoryMap =>
//     categories.reduce((acc, category) => {
//       const { title, items } = category;
//       acc[title.toLowerCase()] = items;
//       return acc;
//     }, {} as CategoryMap)
// );








//before TS conversion

// import { createSelector } from 'reselect';

// const selectCategoryReducer = (state) => state.categories;

// export const selectCategories = createSelector(
//   [selectCategoryReducer],
//   (categoriesSlice) => categoriesSlice.categories
// );

// export const selectCategoriesMap = createSelector(
//   [selectCategories],
//   (categories) =>
//     categories.reduce((acc, category) => {
//       const { title, items } = category;
//       acc[title.toLowerCase()] = items;
//       return acc;
//     }, {})
// );









// export const selectIsLoading = createSelector(
//   [selectCategoryReducer],
//   (categoriesSlice) => categoriesSlice.isLoading
// );
