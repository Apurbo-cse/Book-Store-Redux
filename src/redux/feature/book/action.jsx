import { ADDED, LOADED } from "./actionType"

export const loaded = (books) => {
    return {
        type: LOADED,
        payload : books
    }
}

export const added = (name, author, img_url, price, rating) => {
    return {
        type: ADDED,
        payload : name, author, img_url, price, rating
    }
}