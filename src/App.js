import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication';
import Shop from './routes/shop/shop.component';
import Checkout from './components/Checkout/checkout.component';
import { checkUserSession } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;









// import Home from "./routes/home/home.component";
// import Navigation from "./routes/home/navigation/navigation.component";
// import "./categories.styles.scss";
// import Authentication from "./routes/authentication/authentication";
// import Shop from "./routes/shop/shop.component"
// import Checkout from "./components/Checkout/checkout.component";
// import ErrorPage from "./routes/errorpage/error.component";
// import { useEffect } from "react";
// import { getCurrentUser } from "./utils/firebase/firebase.utils.ts";
// import { useDispatch } from "react-redux";


// // import {BrowserRouter as Routes, useRoutes} from 'react-router-dom'
// import { Routes, Route } from "react-router-dom";

// const App = () => { 
//   const dispatch = useDispatch();


//   useEffect(() => {
//     getCurrentUser().then((user) => console.log(user));
//   },[])
  
//   // useEffect(() => {
//   //   const unsubscribe = onAuthStateChangedListener((user) => {
//   //     if (user) {
//   //       createUserDocumentFromAuth(user);
//   //     }
//   //     const pickedUser = user && (({ accessToken, email }) => ({ accessToken, email}))(user);
//   //     console.log(setCurrentUser(pickedUser));
//   //     dispatch(setCurrentUser(pickedUser));
//   //   });

//   //   return unsubscribe;
//   // }, [dispatch]);

//   return (
//     <Routes>
//       <Route path="/" element={<Navigation />}>
//         <Route index element={<Home />} />
//         <Route path="shop/*" element={<Shop />} /> 
//         <Route path="auth" element={<Authentication />} />
//         <Route path="checkout" element={<Checkout />} />
//         <Route path="/*" element={<ErrorPage />}/>
//       </Route>
//     </Routes>
//   );
// }

// export default App;

