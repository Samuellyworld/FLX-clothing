import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
import directoryReducer from './directory/directory-reducer';
import shopReducer from './shop/shop-reducer';
import queryReducer from './media-query/query-reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist : ['cart']
}

const rootReducer = combineReducers({
	user: userReducer, 
	cart : cartReducer,
	directory: directoryReducer,
	shop : shopReducer,
	mediaQuery : queryReducer
})

export default  persistReducer(persistConfig, rootReducer);

