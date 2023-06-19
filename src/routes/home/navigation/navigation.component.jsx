import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import CartIcon from '../../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../../components/cart-dropdown/cart-dropdown.component';
import {ReactComponent as CrwnLogo} from "../../../assets/crown.svg";
import { UserContext } from '../../../contexts/user.context';
import { signOutUser } from '../../../utils/firebase/firebase.utils';
import { CartContext } from '../../../contexts/cart.context';


import './navigation.styles.jsx';
import { NavLinkContainer, NavLink, LogoContainer, NavigationContainer } from './navigation.styles.jsx';

const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);


  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={
              signOutUser
            }> {` `}SIGN OUT{` `}</NavLink>
            ):(
            <NavLink to='/auth'>
             SIGN IN
            </NavLink>
            )}
            <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;