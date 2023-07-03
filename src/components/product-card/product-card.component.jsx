import {
    ProductCartContainer,
    Footer,
    Name,
    Price,
  } from './product-card.styles';
// import { useContext } from 'react';
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
// import { CartContext } from '../../contexts/cart.context';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';


const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const {name, price, imageUrl} = product;
    const cartItems = useSelector(selectCartItems);
    // const addItemToCart = useSelector(addItemToCart);

    const addProductToCart = () => {
        console.log('another effect fired');
        dispatch(addItemToCart(cartItems, product));
    }


    return (
        <ProductCartContainer>
          <img src={imageUrl} alt={`${name}`} />
          <Footer>
            <Name>{name}</Name>
            <Price>{price}</Price>
          </Footer>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={addProductToCart}
          >
            Add to card
          </Button>
        </ProductCartContainer>
      );
    };
    

export default ProductCard;