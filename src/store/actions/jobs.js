import * as actionTypes from "../constants/jobs";

export const setJobTitles = (data) => {
    return {
        type: actionTypes.SET_JOB_TITLES,
        data: data,
    };
}

export const setCompanies = (data) => {
    return {
        type: actionTypes.SET_COMPANIES,
        data: data,
    };
}