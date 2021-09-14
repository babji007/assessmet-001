import { combineReducers } from 'redux';

// import Ereducer from './Ereducer';
// import counterReducer from './counterReducer';
import EmpReducer from './Empreducer';
import productReducer from './productReducer'
// import CReducer from './CReducer';
// import todoReducer from './todoReducer';
export const rootReducer =
    combineReducers({
        EmpReducer,
        // counterReducer,
        productReducer,
        // todoReducer,
        //....
    }
)