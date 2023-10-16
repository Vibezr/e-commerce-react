import { CategoryItem } from "../categories/categories.types";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { createAction, withMatcher, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem):CartItem[] => {
    // find if cartItems contains productToAdd
    const existingCarItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    )


        //if found, increment quantity
        if(existingCarItem) {
            return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem)
        }

    //return new array wit h modified cartItems/ new cart item
    return [...cartItems, {...productToAdd, quantity:1}]
}

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] => {
    // find the cart item to remove
    const existingCarItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    )
    // check if quantity is equal to 1, if it is, remove that item from the cart
        if(existingCarItem && existingCarItem.quantity === 1) {
            return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
        }
    // rettun back cartitems with matching cart item wit reduced quantity
    return cartItems.map((cartItem) => 
            cartItem.id === cartItemToRemove.id 
            ? {...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem)
}

const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem): CartItem[] =>
 cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)


export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>



export const setIsCartOpen = withMatcher((boolean:boolean): SetIsCartOpen =>
 createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
);

export const setCartItems = withMatcher(
    (cartItems: CartItem[]): SetCartItems =>
     createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
)


export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItems)
}

export const removeItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return setCartItems(newCartItems)
}

export const clearItemFromCart = (cartItems: CartItem[], cartItemToClear: CartItem) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return setCartItems(newCartItems)
} 
