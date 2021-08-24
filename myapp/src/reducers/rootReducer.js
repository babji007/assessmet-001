import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

import employeeReducer from './employeeReducer';


export const rootReducer =
    combineReducers({
        employeeReducer,
        cartReducer,
        //....
    }
);