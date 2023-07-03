
import { useContext } from 'react';
import {CartIconContainer, ItemCount} from './cart-icon.styles.jsx';
import { CartContext } from '../../contexts/cart.context';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsCartOpen, selectCartItems, selectCartTotal, selectCartCount } from '../../store/cart/cart.selector.js';
import { setIsCartOpen } from '../../store/cart/cart.action.js';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
    const dispatch = useDispatch();

    const isCartOpen = useSelector(selectIsCartOpen)
    const cartCount = useSelector(selectCartCount);
    // const setIsCartOpen = useSelector();

    // const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen))
}

    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}
export default CartIcon;