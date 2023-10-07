import { useDispatch, useSelector } from "react-redux";

import {ProductCartContainer, Footer, Name, Price} from "./product-card.styles";

import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";


const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const { name, price, imageUrl } = product;
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))


    return (
        <ProductCartContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button onClick={addProductToCart} buttonType= {BUTTON_TYPE_CLASSES.inverted}>Add to cart</Button>
        </ProductCartContainer>
    )
}

export default ProductCard;