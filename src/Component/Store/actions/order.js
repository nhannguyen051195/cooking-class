import * as actionTypes from './actionTypes';
import axios from '../../../axios-orders'

export const purchaseSuccess = ( id, orderData ) => {
    return {
        type: actionTypes.PURCHASE_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseFail = ( error ) => {
    return {
        type: actionTypes.PURCHASE_FAIL,
        error: error
    };
}

export const purchaseStart = () => {
    return {
        type: actionTypes.PURCHASE_START
    };
};

export const purchase = ( orderData, token ) => {
    return dispatch => {
        dispatch( purchaseStart() );
        axios.post( '/orders.json?auth=' + token, orderData  )
            .then( response => {
                console.log( response.data );
                dispatch( purchaseSuccess( response.data.name, orderData ) );
            } )
            .catch( error => {
                dispatch( purchaseFail( error ) );
            } );
    };
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
};

