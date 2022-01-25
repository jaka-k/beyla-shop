import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";
import Cookie from 'js-cookie'





export const addToCart = (id, qty) => async (dispatch, getState) => {
   
    const {data} = await axios.get(`/api/products/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    Cookie.set('cartItems', JSON.stringify(getState().cart.cartItems))
    
}