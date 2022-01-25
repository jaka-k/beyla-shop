import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import Cookies from 'js-cookie';

const reducer = combineReducers({
  productList: productListReducer,
  cart: cartReducer,
});

const cartItemsFromStorage = Cookies.get("cartItems") ? JSON.parse(Cookies.get("cartItems")) : [];

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
