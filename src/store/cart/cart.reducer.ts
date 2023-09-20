import { AnyAction } from 'redux';

import { CartItem } from './cart.types';
import { setIsCartOpen, setCartItems } from './cart.action';

export type CartState = {
  isCartOpen: boolean;
  cartItems: CartItem[];
};

export const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};

//old code below

// import {createSlice} from "@reduxjs/toolkit";

// const addCartItem = (cartItems, producToAdd) => {

//   const existingCartItem = cartItems.find((cartItem) => cartItem.id === producToAdd.id)
//   if(existingCartItem){
//     return cartItems.map((cartItem) => cartItem.id === producToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
//   }
//   return[...cartItems, {...producToAdd, quantity: 1}];
// };

// const removeCartItem = (cartItems, cartItemToRemove) => {
//   const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
//   if(existingCartItem.quantity === 1){
//     return cartItems.filter((cartItems) => cartItems.id !== cartItemToRemove.id);
//   }

//   return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem);
// };


// const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);


// const CART_INITIAL_STATE = {
//   isCartOpen: false,
//   cartItems: [],
// };

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState: CART_INITIAL_STATE,
//   reducers: {
//     setIsCartOpen(state, action){
//       state.isCartOpen = action.payload;
//     },
//     addItemToCart(state, action){
//       state.cartItems = addCartItem(state.cartItems, action.payload);
//     },
//     removeItemFromCart(state, action){
//       state.cartItems = removeCartItem(state.cartItems, action.payload);
//     },
//     clearItemFromCart(state, action){
//       state.cartItems = clearCartItem(state.cartItems, action.payload);
//     },
//   },
// });

// export const { setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart} = cartSlice.actions;

// export const cartReducer = cartSlice.reducer;

// import { CART_ACTION_TYPES } from './cart.types';

// const CART_INITIAL_STATE = {
//   isCartOpen: false,
//   cartItems: [],
// };

// export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         cartItems: payload,
//       };
//     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//       return {
//         ...state,
//         isCartOpen: payload,
        

        
//   }
// }
// };
