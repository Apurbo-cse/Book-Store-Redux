import { ADDED, LOADED, UPDATED } from "./actionType"

export const loaded = (books) => {
    return {
        type: LOADED,
        payload : books
    }
}

export const added = (name, author, img_url, price, rating, featured) => {
    return {
        type: ADDED,
        payload : name, author, img_url, price, rating, featured
    }
}

export const updated = (book) => {
    return {
      type: 'UPDATED',
      payload: book
    };
  };
  