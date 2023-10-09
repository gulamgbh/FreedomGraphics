import { orderConstants } from "./constants";
import axios from "../helper/axios";
import { getCartItems } from "./cart.action";

// single order with complete info and delivery location

export const getOrder = (payload) => {
    return async (dispatch) => {
        dispatch({
            type: orderConstants.GET_ORDER_REQUEST
        });
        await axios.post(`/getOrder`, payload).then((response) => {
            dispatch({
                type: orderConstants.GET_ORDER_SUCCESS,
                payload: {
                    orderById: response.data.order,
                    message: response.data.message
                },
            });
        }).catch((error) => {
            dispatch({
                type: orderConstants.GET_ORDER_FAILURE,
                payload: {
                    error: error.response.data.error
                },
            });
        })
    };
};

export const getOrders = () => {
    return async (dispatch) => {
        dispatch({
            type: orderConstants.GET_ORDERS_REQUEST
        });
        await axios.post(`/getOrders`).then((response) => {
            dispatch({
                type: orderConstants.GET_ORDERS_SUCCESS,
                payload: {
                    orders: response.data.orders,
                    message: response.data.message
                },
            });
        }).catch((error) => {
            dispatch({
                type: orderConstants.GET_ORDERS_FAILURE,
                payload: {
                    error: error.response.data.error
                },
            });
        })
    };
};

export const addOrder = (payload) => {
    if (payload.paymentType === 'cod') {
        return async (dispatch) => {
            dispatch({
                type: orderConstants.ADD_ORDER_REQUEST
            });
            await axios.post(`/addOrder`, payload).then((response) => {
                dispatch({
                    type: orderConstants.ADD_ORDER_SUCCESS,
                    payload: {
                        orderDetails: response.data.order,
                        message: response.data.message
                    }
                });
            }).catch((error) => {
                dispatch({
                    type: orderConstants.ADD_ORDER_FAILURE,
                    payload: {
                        error: "Technical error",
                    },
                });
            })
        };
    } else if (payload.paymentType === 'razorpay') {
        return async (dispatch) => {
            dispatch({
                type: orderConstants.ADD_ORDER_REQUEST
            });
            await axios.post(`/payment/razorpay`, {payload}).then((response) => {
                console.log(response);
                // dispatch({
                //     type: orderConstants.ADD_ORDER_SUCCESS,
                //     payload: {
                //         orderDetails: response.data.order,
                //         message: response.data.message
                //     }
                // });
            }).catch((error) => {
                console.log(error);
                // dispatch({
                //     type: orderConstants.ADD_ORDER_FAILURE,
                //     payload: {
                //         error: "Technical error",
                //     },
                // });
            })
        };

    }

};

