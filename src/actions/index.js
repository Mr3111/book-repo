import axios from "axios";
import { SET_ARTICLE_DETAILS } from "./types";

export function fetchArticleDetails() {
    return function(dispatch) {
        return axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json").then(({ data }) => {
            dispatch(setArticleDetails(data));
        });
    };
}

function setArticleDetails(data) {
    return {
        type: SET_ARTICLE_DETAILS,
        payload: data
    };
}
