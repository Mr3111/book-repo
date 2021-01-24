import axios from "axios";
import { SET_ARTICLE_DETAILS } from "./types";

export function fetchArticleDetails() {
            dispatch(setArticleDetails(data));
}

function setArticleDetails(data) {
    return {
        type: SET_ARTICLE_DETAILS,
        payload: data
    };
}
