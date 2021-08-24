import { createStore } from 'redux';
import { rootReducer } from '../reducers/rootReducer';

// import productReducer from '../reducers/productReducer';
// let productStore = createStore(productReducer);


let Store = createStore(rootReducer,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default Store;