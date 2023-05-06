import * as actionTypes from "../constants/jobs";

export const setFilter = (data) => {
    return {
        type: actionTypes.SET_FILTER,
        data: data,
    };
}