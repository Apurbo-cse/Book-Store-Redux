import { LOADED } from "./actionType"

export const loaded = (books) => {
    return {
        type: LOADED,
        payload : books
    }
}