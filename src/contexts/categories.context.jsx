import { createContext, useState, useEffect } from 'react';
// import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils.js';

import { getCateogriesAndDocuments } from '../utils/firebase/firebase.utils.ts';

// import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCateogriesAndDocuments();
      setCategoriesMap(categoryMap);
    }
    getCategoryMap();
  },[])

  // useEffect(() => {
  //   addCollectionAndDocuments('collections', SHOP_DATA);
  // }, []);

  const value = { categoriesMap };
  
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};