import { SET_ARTICLE_DETAILS } from "../actions/types";

export default function BookReducer(state = {}, action) {
    switch (action.type) {
        case SET_ARTICLE_DETAILS: {
            console.log('Actions', action.payload)
            return { data: action.payload };}
        default:
            return state;
    }
}
