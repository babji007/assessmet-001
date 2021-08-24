function cartReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            state = state.concat(action.Product);
            return state;
        case 'DEL_TO_CART':
            state = state.filter((Product) => Product.id !== Product.id);
            return state;
        // case 'FETCH_EMPLOYEE':
             
        //     return state;
        default:
            return state;
    }
}

export default cartReducer;