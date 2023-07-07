import {
    ProductCartContainer,
    Footer,
    Name,
    Price,
  } from './product-card.styles';

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.reducer';

// import { selectCartItems } from '../../store/cart/cart.selector';


const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const {name, price, imageUrl} = product;
    // const cartItems = useSelector(selectCartItems);
    // const addItemToCart = useSelector(addItemToCart);

    const addProductToCart = () => dispatch(addItemToCart(product));


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