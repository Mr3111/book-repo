import axios from "axios";
import { FETCH_ARTICLE_DETAILS } from "./types";

export function getBookSlice() {
    return function(dispatch) {
        dispatch(getArticleDetails(data));
    };
}

function getArticleDetails(data) {
    return {
        type: FETCH_ARTICLE_DETAILS,
        payload: data
    };
}
