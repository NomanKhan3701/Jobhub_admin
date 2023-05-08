import * as actionTypes from "../constants/jobs";
import { updateObject } from "../../shared/utility";

const initialState = {
    jobTitles: [
        { name: "Software Engineer", },
        { name: "Software Developer", },
        { name: "Web Developer", },
        { name: "Frontend Developer", },
        { name: "Backend Developer", },
        { name: "Fullstack Developer", },
        { name: "Mobile Developer", },
        { name: "iOS Developer", },
        { name: "Android Developer", },
        { name: "DevOps Engineer", },
        { name: "Data Scientist", },
        { name: "Data Analyst", },
    ],
    companies: [
        { name: "Google", },
        { name: "Facebook", },
        { name: "Amazon", },
        { name: "Apple", },
        { name: "Microsoft", },
        { name: "Netflix", },
        { name: "Twitter", },
        { name: "Uber", },
        { name: "Airbnb", },
        { name: "Lyft", },
        { name: "Dropbox", },
        { name: "Salesforce", },
        { name: "Square", },
        { name: "Stripe", },
        { name: "Slack", },
    ],
}

const setJobTitles = (state, action) => {
    return updateObject(state, { jobTitles: action.data })
}

const setCompanies = (state, action) => {
    return updateObject(state, { companies: action.data })
}

const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_JOB_TITLES:
            return setJobTitles(state, action)
        case actionTypes.SET_COMPANIES:
            return setCompanies(state, action)
        default:
            return state
    }
}

export default jobsReducer