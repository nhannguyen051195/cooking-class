import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
};
const purchaseInit = ( state, action ) => {
    return updateObject( state, { purchased: false } );
};
const purchaseStart = ( state, action ) => {
    return updateObject( state, { loading: false } );
};
const purchaseSuccess = ( state, action ) => {
    const newOrder = updateObject( action.orderData, { id: action.orderId } );
    return updateObject( state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat( newOrder )
    } );
};
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.PURCHASE_INIT: return purchaseInit( state, action );
        case actionTypes.PURCHASE_START: return purchaseStart( state, action );
        case actionTypes.PURCHASE_SUCCESS: return purchaseSuccess( state, action )
        default: return state;
    }
};

export default reducer;