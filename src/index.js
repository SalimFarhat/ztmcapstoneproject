import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { UserProvider } from './contexts/user.context';
// import { CategoriesProvider } from './contexts/categories.context';
// import { CartProvider } from './contexts/cart.context';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';


// const root = ReactDOM.createRoot(document.getElementById('root'));

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
    {/* <UserProvider>  */}
        {/* <CategoriesProvider> */}
          {/* <CartProvider> */}
            <App />
          {/* </CartProvider> */}
      {/* </CategoriesProvider> */}
    {/* </UserProvider> */}
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootElement
);


