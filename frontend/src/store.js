import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers'

// Were our reducers exist
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
})

// initial state
const initialState = {}

const middleware = [thunk]

// Where the entire state tree of the app exists
const store = createStore(
  reducer,
  initialState,
  // use devTools and allow for thunk which supports async calls
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
