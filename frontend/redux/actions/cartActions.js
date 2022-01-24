import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";
import {useCookies} from 'react-cookie'



export const addToCart = (id, qty) => async (dispatch, getState) => {
    const [cookie, setCookie] = useCookies(["cartItems"])
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

    setCookie('cartItems', JSON.stringify(getState().cart.cartItems), {
        path: "/",
        sameSite: true
    })
    
}