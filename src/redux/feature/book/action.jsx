import { ADDED, LOADED } from "./actionType"

export const loaded = (books) => {
    return {
        type: LOADED,
        payload : books
    }
}

export const added = (name, author) => {
    return {
        type: ADDED,
        payload : name, author
    }
}