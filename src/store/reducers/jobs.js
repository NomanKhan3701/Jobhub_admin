import * as actionTypes from "../constants/jobs";
import { updateObject } from "../../shared/utility";

const initialState = {
    filter: {},
}

const setFilter = (state, action) => {
    return updateObject(state, { filter: action.data })
}


const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_FILTER:
            return setFilter(state, action)
        default:
            return state
    }
}

export default jobsReducer